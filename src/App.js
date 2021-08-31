import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 320.21,
      date: new Date(2021, 4, 29),
    },
    {
      id: "e2",
      title: "Groceries",
      amount: 50.31,
      date: new Date(2021, 4, 13),
    },
    {
      id: "e3",
      title: "Cleats",
      amount: 120.95,
      date: new Date(2021, 4, 17),
    },
    {
      id: "e4",
      title: "Jeans",
      amount: 40.64,
      date: new Date(2021, 4, 5),
    },
  ];

  // so how do we pass these expense items to our ExpenseItem component?
  // now we add attributes to these components and put the variable into the prop
  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
