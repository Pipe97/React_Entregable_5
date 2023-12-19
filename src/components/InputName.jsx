import React, { useRef } from "react";
import { setTrainerNameG } from "../store/slices/TrainerName";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/inputName.css"

const InputName = () => {
  const dispatch = useDispatch();
  const trainerNameRef = useRef(null);
  const trainerName = useSelector((state) => state.trainerName);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerNameG(trainerNameRef.current.value.trim()));

    navigate("/pokedex");
  };

  return (
    <form onSubmit={handleSubmit} className="container_input_name">
      <input ref={trainerNameRef} type="text" required placeholder="Tu nombre" />
      <button className="btn_name">Comenzar</button>
    </form>
  );
};

export default InputName;
