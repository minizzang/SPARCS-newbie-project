  import React, { useEffect, useState } from "react";
  import axios from "axios";

  

// const appointments = () => {
  
  

// }

// export default hello => {

//   const [members, setMembers] = useState([]);
//   useEffect(()=> {
//     axios.get(`http://localhost:8080/schedular`)
//     .then(response => {
//       setMembers(response.data);
//     });
//   }, []);

//   return members
// };



export const appointments = [
    
     {
      title: '이병건',
      startDate: new Date(2021, 6, 7, 13, 0),
      endDate: new Date(2021, 6, 7, 13, 30),
      id: 1,
      location: 'Room 1',
    },
    {
      title: '주호민',
      startDate: new Date(2021, 6, 9, 15, 0),
      endDate: new Date(2021, 6, 9, 15, 30),
      id: 2,
      location: 'Room 2',
    },
    {
      title: '김풍',
      startDate: new Date(2021, 6, 11, 9, 30),
      endDate: new Date(2021, 6, 11, 10, 0),
      id: 3,
      location: 'Room 3',
    },
  ];
  