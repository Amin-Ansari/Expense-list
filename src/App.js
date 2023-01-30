import { useState } from "react";
import "./App.css";
import Cart from "./Components/UI/Cart";
import CartsWrapper from "./Components/UI/CartsWrapper";
import Form from "./Components/UI/Form";

function App() {
  let dataList = [
    { date: new Date("12 / 10 / 2021"), title: "New shoes", price: 45 },
    { date: new Date("02 / 04 / 2022"), title: "Car lastics", price: 215 },
    { date: new Date("08 / 05 / 2022"), title: "New TV", price: 18 },
    { date: new Date("09 / 11 / 2022"), title: "Some choclates", price: 34 },
    { date: new Date("08 / 10 / 2022"), title: "House rent", price: 600 },
  ];
  const [dynamicList, updateDList] = useState(dataList);
  const liftUpData = (...collectedData) => {
    const [Listtitle, Listnumber, Listdate] = [...collectedData];
    console.log(Listtitle, Listnumber, Listdate);
    updateDList((previousData) => {
      return [
        { date: Listdate, title: Listtitle, price: Listnumber },
        ...previousData,
      ];
    });
  };
  return (
    <div className="App">
      <Form onLiftupData={liftUpData}></Form>
      <CartsWrapper>
        {dynamicList.map((expense, index) => (
          <Cart dynamicData={expense} key={index} />
        ))}
      </CartsWrapper>
    </div>
  );
}

export default App;
