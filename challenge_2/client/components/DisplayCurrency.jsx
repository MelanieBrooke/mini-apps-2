import React from 'react';
import FormatCurrency from "./FormatCurrency.jsx";
import FormatDate from "./FormatDate.jsx";

const DisplayCurrency = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <th>Date</th>
          <th>Closing Price</th>
          <tr>
            <td>
              {props.currency.map((singleDate) => {
                return <FormatDate singleDate={singleDate[0]} />
              })}
            </td>
            <td>
              {props.currency.map((singleDate) => {
                return <FormatCurrency singleDate={singleDate[1]} />
              })}
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default DisplayCurrency;