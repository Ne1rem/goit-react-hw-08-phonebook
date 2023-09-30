import { useDispatch, useSelector } from "react-redux";
import { findContacts } from '../../Redux/FilterSlice'; // Импорт из FilterSlice.js, не из selector.js

export const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        value={useSelector(state => state.filter.filterValue)} // Используем селектор из FilterSlice.js
        onChange={e => {
          dispatch(findContacts(e.target.value));
        }}
      ></input>
    </div>
  );
};