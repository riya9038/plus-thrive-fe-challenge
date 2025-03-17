// Font imports
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";

import ContentWidthContainer from "./components/layout/ContentWidthContainer";

import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setList } from "./redux/appSlice";
import Header from "./components/Header/Header";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import TabPanel from "./components/TabPanel/TabPanel";
import TransactionList from "./components/TransactionList/TransactionList";

/*
  To reference icons:
  
  import checkIcon from "./assets/check-circle-fill.svg";
  import receiptIcon from "./assets/receipt.svg";
  import plusIcon from "./assets/plus.svg";
  import minusIcon from "./assets/minus.svg";

  <img src={receiptIcon} />
*/

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTransactionList();
  }, []);

  async function fetchTransactionList() {
    let res = await fetch(
      "http://localhost:3004/transactions?_page=1&_limit=20"
    );
    let resJson = await res.json();
    console.log(resJson, "json");
    dispatch(setList(resJson));
  }
  return (
    <ContentWidthContainer>
      <main className="content">
        <Header />
        <AccountDetails />
        <TabPanel />
      </main>
    </ContentWidthContainer>
  );
};

export default App;
