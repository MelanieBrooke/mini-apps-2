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

const formatYear = (year) => {
  if (Number(year) < 0) {
    year = year.slice(1) + ' B.C.';
  } else {
    year = year + ' A.D.'
  }
  return year;
}

const FormatDate = (props) => {
  let formattedDate = props.date;
  if (formattedDate) {
    if (formattedDate.length > 5) {
      var datePieces = formattedDate.split('/');
      formattedDate = datePieces[2] + ' ' + months[datePieces[1]] + ', ' + formatYear(datePieces[0]);
    } else {
      formattedDate = formatYear(formattedDate);
    }
  }
  return (<div>{formattedDate}</div>)
}

export default FormatDate;