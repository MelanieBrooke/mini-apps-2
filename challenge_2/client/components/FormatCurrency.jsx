import React from 'react';
import styles from '../styles.modules.css';

const FormatCurrency = (props) => {
  let price = Math.round((props.singleDate[1] + Number.EPSILON) * 100) / 100;
  return (
    <tr className={styles.row}>
      <td>
        {props.singleDate[0]}
      </td>
      <td>
        ${price}
      </td>
    </tr>
  )
}

export default FormatCurrency;