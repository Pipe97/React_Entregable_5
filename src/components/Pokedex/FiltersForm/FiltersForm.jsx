import { useEffect, useState } from "react";
import "./FiltersForm.css";
import { Form } from "react-router-dom";
import { getAllTypes } from "../../../services/getAllTypes";

const FiltersForm = ({ nameInitial, typeInitial }) => {
  const [types, setTypes] = useState([]);
  const [nameValue, setNameValue] = useState(nameInitial);
  const [typeValue, setTypeValue] = useState(typeInitial);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNameValue(newValue);
  };

  const handletypeChange = (e) => {
    const newTypeValue = e.target.value;
    setTypeValue(newTypeValue);
  };

  useEffect(() => {
    const loadTypes = async () => {
      const typesList = await getAllTypes();
      setTypes(typesList);
    };
    loadTypes();
  }, []);

  useEffect(() => {
    setNameValue(nameInitial);
  }, [nameInitial]);

  useEffect(() => {
    setTypeValue(typeInitial);
  }, [typeInitial]);

  return (
    <Form className="form">
      <h2>Filtros para la busqueda</h2>

      <div className="form__inputs-container">
        <input
          value={nameValue}
          onChange={handleChange}
          type="text"
          placeholder="Escribe el nombre de tu pokemon"
          name="pokemonName"
          className="form__input-name"
        />

        <select
          name="pokemonType"
          value={typeValue}
          onChange={handletypeChange}
          className="form__input-type"
        >
          <option value="">All</option>

          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <button className="form__btn">Buscar</button>
    </Form>
  );
};

export default FiltersForm;
