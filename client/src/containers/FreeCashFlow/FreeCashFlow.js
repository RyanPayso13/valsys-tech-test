import React, { useEffect, useState, useContext } from "react";
import * as CONSTANTS from "../../constants";
import * as actions from "../../state/actions/actionCreators";
import Context from "../../state/context";
import DataTable from "../../components/DataTable/DataTable";
import DataFilter from "../../components/DataFilter/DataFilter";
import DataTitle from "../../components/DataTitle/DataTitle";
import DataChart from "../../components/DataChart/DataChart";

const FreeCashFlow = () => {
  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState({});
  const [items, setItems] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [chartFacts, setChartFacts] = useState([]);
  const fetchData = async () => {
    try {
      const result = await fetch(`${CONSTANTS.API_BASE_URL}/free-cash-flow`);

      result.json().then(data => {
        const list = [...data.data.dcfItems].map(el => el.name);

        setFilterList([CONSTANTS.DATA_FILTER_DEFAULT, ...list]);
        setData({ ...data.data });
        dispatch(actions.setFilterItems([...data.data.dcfItems]));
      });
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (state.items.length > 0) {
      if (state.currentFilter === CONSTANTS.DATA_FILTER_DEFAULT) {
        setItems([...state.items]);
      } else {
        setItems(
          [...state.items].filter(item => item.name === state.currentFilter)
        );
      }
    }
  }, [state.currentFilter, state.items]);

  useEffect(() => {
    if (state.currentFilter !== CONSTANTS.DATA_FILTER_DEFAULT) {
      setChartFacts(
        [...state.items].filter(item => item.name === state.currentFilter)[0]
          .facts
      );
    }
  }, [state.currentFilter]);

  return (
    <div data-testid="free-cash-flow-container">
      {data && data.name && data.startYear && (
        <DataTitle name={data.name} startYear={data.startYear} />
      )}
      {data && <DataFilter filterBy="name" filterList={filterList} />}
      {items && items.length > 0 && (
        <DataTable items={items} hasFacts={true} startYear={data.startYear} />
      )}
      {state.currentFilter !== CONSTANTS.DATA_FILTER_DEFAULT &&
        chartFacts &&
        chartFacts.length > 0 && <DataChart chartFacts={chartFacts} />}
    </div>
  );
};

export default FreeCashFlow;
