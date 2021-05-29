import React from 'react';
import FormatDate from './FormatDate.jsx';

const FormatEvent = (props) => {
  // console.log(event.date)
  // work on formatting the date

  return (
    <tr>
      <td className="dateTable">
        <FormatDate date={props.event.date} />
      </td>
      <td className="eventTable">
        {props.event.description}
      </td>
    </tr>
  );
};

export default FormatEvent;