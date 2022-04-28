import React from 'react';
import './CreateTodoButton.css';
import { BsPatchPlusFill} from "react-icons/bs";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      <BsPatchPlusFill/>
    </button>
  );
}

export { CreateTodoButton };