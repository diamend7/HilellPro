import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearData, fetchData } from "../../redux/slices/swapiInfoSlice";
import { useSelector } from "react-redux";
import selectors from "../../redux/slices/selectors";

const Swapi = () => {
  const dispatch = useDispatch();

  const [path, setPath] = useState("people/1");
  const data = useSelector(selectors.swapiInfo.data);

  const handleFetch = () => {
    dispatch(fetchData(path));
  };
  const handleClear = () => {
    dispatch(clearData());
  };
  return (
    <>
      <h1>SWAPI</h1>
      <div className="inputDiv">
        <p id="link">https://swapi.py4e.com/api/</p>
        <input
          type="text"
          name="path"
          placeholder="people/1"
          id="input"
          onChange={(e) => setPath(e.target.value)}
          value={path}
        />
        <button type="button" onClick={handleFetch}>
          Get
        </button>
      </div>

      <div className="jsonInfo">{JSON.stringify(data, null, 2)}</div>

      <button type="button" id="deleteButton" onClick={handleClear}>
        Clear
      </button>
    </>
  );
};

//я сподіваюсь це не помилка що я не використав formik

export default Swapi;
