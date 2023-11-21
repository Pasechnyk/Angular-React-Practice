import Quote from "./components/Quote";
import CitiesList from "./components/CitiesList";
 
export default function App() {
  return (
    <div className="App">
      <h1>Quote of the day:</h1>
      <Quote />

      <h1>List of Cities:</h1>
      <CitiesList />
    </div>
  );
}
