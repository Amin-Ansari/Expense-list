import { useState } from "react";
import "./App.css";
import Cart from "./Components/UI/Cart";
import CartsWrapper from "./Components/UI/CartsWrapper";
import Form from "./Components/UI/Form";
import YearFilter from "./Components/UI/YearFilter";
import Chart from "./Components/UI/Chart";
function App() {
  let dataList = [
    [
      { date: new Date("12 / 10 / 2021"), title: "New shoes", price: 45 },
      { date: new Date("02 / 04 / 2022"), title: "Car lastics", price: 215 },
      { date: new Date("08 / 05 / 2022"), title: "New TV", price: 18 },
      { date: new Date("09 / 11 / 2022"), title: "Some choclates", price: 34 },
      { date: new Date("08 / 10 / 2022"), title: "House rent", price: 600 },
    ],
    [],
    [],
    [],
  ];
  const [dynamicList, updateDList] = useState(dataList);
  const [selectValue, updateSelectValue] = useState(0);
  const liftUpData = (...collectedData) => {
    const [Listtitle, Listnumber, Listdate] = [...collectedData];
    updateDList((previousData) => {
      const thisListData = [...previousData];
      thisListData[0].unshift({
        date: new Date(Listdate),
        title: Listtitle,
        price: Listnumber,
      });
      return [...thisListData];
    });
  };
  const updateSelect = (updatedValue) => {
    updateSelectValue(Number(updatedValue));
  };
  let outputedData = <p className="empty-pa">There is no item for this year</p>;
  if (dynamicList[selectValue].length) {
    outputedData = dynamicList[0].map((expense, index) => (
      <Cart dynamicData={expense} key={index} />
    ));
  }
  return (
    <div className="App">
      <Form onLiftupData={liftUpData}></Form>
      <CartsWrapper>
        <YearFilter onTakingSelectValue={updateSelect}></YearFilter>
        <Chart></Chart>
        {outputedData}
      </CartsWrapper>
    </div>
  );
}

export default App;
