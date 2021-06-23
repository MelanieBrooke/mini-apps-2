import React from 'react';


// for now use a simple HTML table to display scores

const Display = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Frame 01</th>
            <th>Frame 02</th>
            <th>Frame 03</th>
            <th>Frame 04</th>
            <th>Frame 05</th>
            <th>Frame 06</th>
            <th>Frame 07</th>
            <th>Frame 08</th>
            <th>Frame 09</th>
            <th>Frame 10</th>
            <th>Bonus</th>
          </tr>
          <tr>
            <td>First Bowl</td>
            <td>{props.score.frame1.bowl1}</td>
            <td>{props.score.frame2.bowl1}</td>
            <td>{props.score.frame3.bowl1}</td>
            <td>{props.score.frame4.bowl1}</td>
            <td>{props.score.frame5.bowl1}</td>
            <td>{props.score.frame6.bowl1}</td>
            <td>{props.score.frame7.bowl1}</td>
            <td>{props.score.frame8.bowl1}</td>
            <td>{props.score.frame9.bowl1}</td>
            <td>{props.score.frame10.bowl1}</td>
            <td>{props.score.frame11.bowl1}</td>
          </tr>
          <tr>
            <td>Second Bowl</td>
            <td>{props.score.frame1.bowl2}</td>
            <td>{props.score.frame2.bowl2}</td>
            <td>{props.score.frame3.bowl2}</td>
            <td>{props.score.frame4.bowl2}</td>
            <td>{props.score.frame5.bowl2}</td>
            <td>{props.score.frame6.bowl2}</td>
            <td>{props.score.frame7.bowl2}</td>
            <td>{props.score.frame8.bowl2}</td>
            <td>{props.score.frame9.bowl2}</td>
            <td>{props.score.frame10.bowl2}</td>
            <td>{props.score.frame11.bowl2}</td>
          </tr>
          <tr>
            <td>Bonus</td>
            <td></td>
            <td>{props.score.frame2.bonus}</td>
            <td>{props.score.frame3.bonus}</td>
            <td>{props.score.frame4.bonus}</td>
            <td>{props.score.frame5.bonus}</td>
            <td>{props.score.frame6.bonus}</td>
            <td>{props.score.frame7.bonus}</td>
            <td>{props.score.frame8.bonus}</td>
            <td>{props.score.frame9.bonus}</td>
            <td>{props.score.frame10.bonus}</td>
          </tr>
          <tr>
            <td>Turn Total</td>
            <td>{props.score.frame1.bowl1 + props.score.frame1.bowl2}</td>
            <td>{props.score.frame2.bowl1 + props.score.frame2.bowl2 + props.score.frame2.bonus}</td>
            <td>{props.score.frame3.bowl1 + props.score.frame3.bowl2 + props.score.frame3.bonus}</td>
            <td>{props.score.frame4.bowl1 + props.score.frame4.bowl2 + props.score.frame4.bonus}</td>
            <td>{props.score.frame5.bowl1 + props.score.frame5.bowl2 + props.score.frame5.bonus}</td>
            <td>{props.score.frame6.bowl1 + props.score.frame6.bowl2 + props.score.frame6.bonus}</td>
            <td>{props.score.frame7.bowl1 + props.score.frame7.bowl2 + props.score.frame7.bonus}</td>
            <td>{props.score.frame8.bowl1 + props.score.frame8.bowl2 + props.score.frame8.bonus}</td>
            <td>{props.score.frame9.bowl1 + props.score.frame9.bowl2 + props.score.frame9.bonus}</td>
            <td>{props.score.frame10.bowl1 + props.score.frame10.bowl2 + props.score.frame10.bonus}</td>
            <td>{props.score.frame11.bowl1 + props.score.frame11.bowl2}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>Overall Total</td>
            <td>{props.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Display;