import React, { useMemo, useState } from "react"; //useEffect
//import axios from "axios";
import { AiOutlineUserAdd } from "react-icons/ai";
import Member from "./Members";
import Table from "./WeekTable";
import "./Schedular.css";
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import Modal from "./Modal";
import { TextField } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './Today-appointments';
import axios from "axios";
import { responseInterceptor } from "http-proxy-middleware";

const Schedular = () => {
    const [members, setMembers] = useState([]);
    
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const headers = {'Content-Type': 'application/json'}

    const closeModal = (data) => {   //여기서 데이터 전송
        setModalOpen(false);
        axios.post(`http://localhost:8080/schedular`, {
          name: data.name,
          time1: data.time1,
          time2: data.time1,
        }, {headers: headers})
        .then(data => console.log(data.response.data))
        .catch(error => {
          console.log(error)
        })
    }
    // const closeModal = (data) => {   //여기서 데이터 전송
    //     setModalOpen(false);
    //     axios.post(`http://localhost:8080/schedular`, {
    //       name: data.name,
    //       time1: data.time1,
    //       time2: data.time1,
    //     })
    //     console.log(data)
    // }

    const onAddMember = () => {
        // setMembers([
        //     ...members, {
        //     key: 1,
        //     name : "mini",
        //     time : 30
        // }])
    }


    const membersList = members.map(v => (
        <Member 
            key={v._id}
            name={v.name}
            time={v.time}
        />
    ))

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