// stateless component - no internal state - just there to output some data

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// props allows you to pass data from another component to this component
// props is key-value pairs here
const ExpenseItem = (props) => {
 
  // react-hook:
  // with this hook the props.title can be changed -- component function will be called again - assign a new value to this state

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
  
}

export default ExpenseItem