import { useState } from "react";
 
function Quote() {
  const [text, setHideText] = useState(true);
 
  const quote = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
 
  const hideByClick = () => setHideText(!text);
 
  return (
    <>
      <button onClick={hideByClick}>{text ? "Hide" : "Show"}</button>
      <p>{text && quote}</p>
    </>
  );
}
 
export default Quote;