import React from 'react';

const months = {
  '01':'January',
  '02':'February',
  '03':'March',
  '04':'April',
  '05':'May',
  '06':'June',
  '07':'July',
  '08':'August',
  '09':'September',
  '10':'October',
  '11':'November',
  '12':'December'
}

const FormatDate = (props) => {
  let formattedDate = props.date;
  if (formattedDate) {
    if (formattedDate.length > 5) {
      var datePieces = formattedDate.split('/');
      formattedDate = datePieces[2] + ' ' + months[datePieces[1]] + ', ' + datePieces[0];
    } else if (Number(formattedDate) < 0) {
      formattedDate = formattedDate.slice(1) + ' B.C.';
    } else {
      formattedDate = formattedDate + ' A.D.'
    }
  }
  return (<div>{formattedDate}</div>)
}

export default FormatDate;