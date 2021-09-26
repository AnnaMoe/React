//wrapper component - UI component
import "./Card.css";

function Card(props) {
  const classes = `card ${props.className}`;
  //children is reserved name: the content of it is always the one between open and closing tag of custom component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
