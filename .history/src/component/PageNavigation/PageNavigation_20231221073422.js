import "./PageNavigation.css";
import { useState } from "react";
const [min, setMin] = useState(0);
const [max, setMax] = useState(5);
const [activePages, setActivePages] = useState(1);

// console.log(min);
const Minus = () => {
  if (min < 1) return null;
  setMin((count) => count - 5);
  setMax((count) => count - 5);
};
const Plus = () => {
  if (max > 163) return;
  setMax((count) => count + 5);
  setMin((count) => count + 5);
};

function PageNavigation() {
  return <div></div>;
}

export default PageNavigation;
