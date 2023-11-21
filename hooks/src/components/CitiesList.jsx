import { CITIES } from "./city-mock";
import { useState } from "react";
 
function CitiesList() {
  const [cities, setCities] = useState(CITIES);
 
  const add = () => {
    const newCity = {
      id: cities.length + 1,
      title: "Lviv",
      region: "Lvivska Oblast"
    };
 
    setCities([...cities, newCity]);
  };
 
  const remove = () => setCities([]);
 
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {cities.map((i, index) => (
          <li
            style={{ color: "rebeccapurple", fontFamily: "cursive" }}
            key={i.id}
          >
            {i.id} - {i.title}, {i.region}
          </li>
        ))}
      </ul>
 
      <button
        style={{
          background: "rebeccapurple",
          margin: 5,
          color: "white",
          fontFamily: "cursive"
        }}
        onClick={add}
      >
        Add New City
      </button>
      <button
        style={{
          background: "rebeccapurple",
          margin: 5,
          color: "white",
          fontFamily: "cursive"
        }}
        onClick={remove}
      >
        Clear Cities
      </button>
    </>
  );
}
 
export default CitiesList;