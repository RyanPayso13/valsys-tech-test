import React, { useReducer } from "react";
import Context from "./state/context";
import { filterReducer, initialState } from "./state/reducers/filterReducer";
import Summary from "./containers/Summary/Summary";
import FreeCashFlow from "./containers/FreeCashFlow/FreeCashFlow";

function App() {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Summary />
      <FreeCashFlow />
    </Context.Provider>
  );
}

export default App;
