import {React, useState} from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Modal.css';

const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));
    const classes = useStyles();

    const [newCust, setNewCust] = useState({
        name: '',
        time1: new Date(),
        time2: new Date(),
    });

    const changeName = (item) => {
      setNewCust({...newCust, name : item})
    }
    const changeTime1 = (item) => {
      setNewCust({...newCust, time1 : item})
    }
    const changeTime2 = (item) => {
        setNewCust({...newCust, time2 : item})
    }
    const addNewUser = (item) => {

        console.log("hellloo")
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        {header}
                    </header>
                    <main>
                        {props.children}
                        <div className="input-box-form">
                            <div>이름</div>
                            <input type = 'text'
                                placeholder = 'name'
                                onChange={v => changeName(v.target.value)}
                                value={newCust.name}
                            />
                        </div>
                        <form className={classes.container} noValidate>
                        <div className="input-box-form">
                            <div>PT 1</div>
                            <TextField
                                id="datetime-local"
                                //label="PT 1"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                className={classes.textField}
                                value={newCust.time1}
                                onChange={v => changeTime1(v.target.value)}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </div>
                        <div className="input-box-form">
                            <div>PT 2</div>
                            <TextField
                                id="datetime-local"
                                //label="PT 1"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                className={classes.textField}
                                value={newCust.time2}
                                onChange={v => changeTime2(v.target.value)}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </div>
                        <div className="input-box-form">* 주 2회 30분 PT</div>
                        <div>* 정각 혹은 30분에만 예약을 잡아주세요 :)</div>
                        </form>
                    </main>
                    <footer>
                        <button className="close" onClick={v=>{close(newCust)}}> 등록 </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default Modal;