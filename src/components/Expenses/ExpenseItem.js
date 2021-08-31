import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // now in this return we need to access the proper key to get the value we're expecting
  // our keys are id, title, date, and amount
  // it's better practice to extract logic from JSX and have it in a helper variable
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("clicked");
    setTitle("Updated");
    console.log("title");
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <ExpenseDate date={props.date} />
      <button onClick={clickHandler}>{title}</button>
    </Card>
  );
};

export default ExpenseItem;
