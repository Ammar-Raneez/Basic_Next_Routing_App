import Link from 'next/link';
import classes from './button.module.css';

function Button(props) {
  return (
    // to apply styles we need to create a manual anchor tag
    // the anchor tag overrides the automatically added one by the Link componenr
    // Every other functionality provided by the Link component is automatically added to the anchor
    // Hence, we don't need to specify the anchors' href
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
}

export default Button;
