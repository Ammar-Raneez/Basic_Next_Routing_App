import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../dummy-data';

function FilteredEventsPage() {
  const router = useRouter();
  const filtereData = router.query.slug;

  // renders twice, first time this is undefined
  if (!filtereData) {
    return <p className="center">Loading...</p>
  }

  const [filteredYear, filteredMonth] = filtereData;

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // if incase, the param is not valid
  if (isNaN(numYear) || isNaN(numMonth)
    || numYear > 2030 || numYear < 2021
    || numMonth > 12 || numMonth < 1) {
      return (
        <>
          <ErrorAlert>
            <p className="center">Invalid filter! Please adjust your values</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </>
      );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || !filteredEvents.length) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
