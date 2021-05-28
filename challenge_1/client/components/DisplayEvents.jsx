import React from 'react';
import FormatEvent from './FormatEvent.jsx';

const DisplayEvents = (props) => {
  var data;
  if (props.data.length === 0) {
    data = [{date:null, description:'No results found!'}]
  } else {
    data = props.data;
  }
  return (
    <div>
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Event Description</th>
            </tr>
              {data.map((item, index) => (
                <FormatEvent key={index} event={item}/>
              )).slice(0, 20)}
          </tbody>
        </table>
      </div>
  )
};

export default DisplayEvents;