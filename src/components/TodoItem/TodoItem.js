import React from 'react';
import './TodoItem.css';
import { FcApproval } from "react-icons/fc";
import { FaRegTimesCircle } from "react-icons/fa";



function TodoItem(props) {


  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
        
      >
        <FcApproval/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FaRegTimesCircle/>
      </span>
    </li>
  );
}

export { TodoItem };

