import React from "react";
import "./Members.css";

const Members = (props) => {
    return (
        <div className="member-list">
            <div className="member-profile" onClick={props.editInform}>
                {props.name}
            </div>
        </div>
    );
};

export default Members;