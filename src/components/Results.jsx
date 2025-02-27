import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';

const Results = ({ inputs }) => {
  const resultsData = calculateInvestmentResults(inputs);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((dt, i) => {
          const totalInterest =
            dt.valueEndOfYear -
            dt.annualInvestment * dt.year -
            initialInvestment;

          const totalAmountInvested = dt.valueEndOfYear - totalInterest;

          return (
            <tr key={i} className="center">
              <td>{dt.year}</td>
              <td>{formatter.format(dt.valueEndOfYear)}</td>
              <td>{formatter.format(dt.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
