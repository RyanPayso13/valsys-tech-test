import React, { useContext } from "react";
import { FormGroup, HTMLSelect } from "@blueprintjs/core";
import * as CONSTANTS from "../../constants";
import Context from "../../state/context";
import * as actions from "../../state/actions/actionCreators";

const DataFilter = ({ filterBy = "", filterList = [] }) => {
  const { dispatch } = useContext(Context);
  const filterLabel = `Filter by ${filterBy}:`;
  const handleOnChange = event => {
    dispatch(actions.setCurrentFilter(event.currentTarget.value));
  };

  return (
    <FormGroup inline={true} label={filterLabel} labelFor="filter">
      {filterList && filterList.length > 0 && (
        <HTMLSelect
          id="filter"
          data-testid="data-filter"
          fill={true}
          options={filterList}
          defaultValue={CONSTANTS.DATA_FILTER_DEFAULT}
          onChange={handleOnChange}
        />
      )}
    </FormGroup>
  );
};

export default DataFilter;
