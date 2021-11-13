import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const FEATURES_EVENTS = getFeaturedEvents();

  return (
    <div>
      <EventList items={FEATURES_EVENTS} />
    </div>
  );
}

export default HomePage;
