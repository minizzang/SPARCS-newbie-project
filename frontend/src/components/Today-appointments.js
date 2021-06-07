import moment from 'moment';
import React, { useEffect, useState } from "react";
import { appointments } from './Appointments';

// const [members, setMembers] = useState([]);

// useEffect(()=> {
//   axios.get(`http://localhost:8080/schedular`)
//   .then(response => {
//     setMembers(response.data);
//   });
// }, []);


// const TodayAppointment = () => {

//   const currentDate = moment();   //현재 시간
//   let date = currentDate.date();

//   const makeTodayAppointment = (startDate, endDate) => {
//     const days = moment(startDate).diff(endDate, 'days');
//     const nextStartDate = moment(startDate)
//       .year(currentDate.year())
//       .month(currentDate.month())
//       .date(date);   //현재 날짜의 같은 시간으로 모두 변경
//     const nextEndDate = moment(endDate)
//       .year(currentDate.year())
//       .month(currentDate.month())
//       .date(date + days);
  
//     return {
//       startDate: nextStartDate.toDate(),
//       endDate: nextEndDate.toDate(),
//     };
//   };

//   return(
//     appointments.map(({ startDate, endDate, ...restArgs }) => {
//       const result = {
//         ...makeTodayAppointment(startDate, endDate),
//         ...restArgs,
//         // ...name,
//       };
//       date += 1;
//       if (date > 31) date = 1;
//       return result;
//     })
//   )
// }

// export default TodayAppointment;
const currentDate = moment();   //현재 시간
let date = currentDate.date();
const week = ['mon', 'tue', 'wed', 'thu', 'fri'];

const makeTodayAppointment = (startDate, endDate) => {
  const days = moment(startDate).diff(endDate, 'days');
  const nextStartDate = moment(startDate)
    .year(currentDate.year())
    .month(currentDate.month())
    .date(date);   //현재 날짜의 같은 시간으로 모두 변경
  const nextEndDate = moment(endDate)
    .year(currentDate.year())
    .month(currentDate.month())
    .date(date + days);

  return {
    startDate: nextStartDate.toDate(),
    endDate: nextEndDate.toDate(),
    // startDate,
    // endDate
  };
};

export default appointments.map(({ startDate, endDate, ...restArgs }) => {  //startDate, endDate, ...restArgs
  const result = {
    ...makeTodayAppointment(startDate, endDate),
    ...restArgs,
  };
  date += 1;
  if (date > 31) date = 1;
  return result;
});