import React from "react";
import { Statistic } from "semantic-ui-react";


const Results = () => {
return (
  <Statistic color="blue" inverted data-cy="results">
    <Statistic.Value>0</Statistic.Value>
    <Statistic.Label>Results</Statistic.Label>
  </Statistic>
)};

export default Results;
