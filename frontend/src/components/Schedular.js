import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineUserAdd } from "react-icons/ai";
import Member from "./Members";
import "./Schedular.css";
import Modal from "./Modal";

import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './Today-appointments';
import { responseInterceptor } from "http-proxy-middleware";

const Schedular = () => {
    const [members, setMembers] = useState([]);
    
    
    const [ modalOpen, setModalOpen ] = useState(false);
    const headers = {'Content-Type': 'application/json'}

    // useEffect(()=> {
    //   axios.post(`http://localhost:8080/schedular/getusers`, {})
    //   // .then(response => {
    //   //   setMembers(response.data);
    //   .then(Response => console.log(Response.data.name))
    //   .catch(error => {
    //     console.log(error)})
    // }, []);

    useEffect(()=> {
      axios.get(`http://localhost:8080/schedular`)
      .then(response => {
        response.data.map(v => {
          if ((v.name != null) &&(v.name != '')) {
            setMembers({...members, v})
            console.log(members)
            console.log(v);
          }
        })
        setMembers(response.data);
        console.log("final")
        console.log(response)
        console.log(response.data)
      });
    }, []);

    const openModal = () => {
        setModalOpen(true);
    }

    

    const closeModal = (data) => {   //여기서 데이터 전송
        setModalOpen(false);
        axios.post(`http://localhost:8080/schedular`, {
          name: data.name,
          time1: data.time1,
          time2: data.time1,
        }, {headers: headers})
        .then(data => console.log(data))
        .catch(error => {
          console.log(error)
        })
    }

    // const membersList = members.map(v => (
    //   if ((v.name != null) &&(v.name != '')) {
    //     console.log(v);
    //     <Member
    //       name={v.name}
    //       time1={v.time1}
    //       time2={v.time2}
    //     />
    //   }
    // );
    const membersList = members.map(v => (
      <Member
          name={v.name}
          time1={v.time1}
          time2={v.time2}
        />
    ));

    return (
      <>
        <div className="schedule-page-box">
            <div className="schedular">
                <div className="member-show">
                    {membersList}
                </div>
                <div className="add-icon" onClick={openModal}>
                    <AiOutlineUserAdd size="32"/>
                </div>
            </div>
              <Paper>
                <Scheduler data={appointments} height={660} > 
                  <WeekView startDayHour={9} endDayHour={22} excludedDays={[0,6]} />
                  <Appointments />
                </Scheduler>
              </Paper>
              
        </div>
        <React.Fragment>
          <Modal open={ modalOpen } close={v=> closeModal(v) } header="회원 추가">
      
          </Modal>
        </React.Fragment>
        </>
    );

    
};

export default Schedular;