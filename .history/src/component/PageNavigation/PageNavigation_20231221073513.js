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

function PageNavigation({ data }) {
  return (
    <Container className="sectionPaginator">
      <div className="Paginator">
        <span>
          Show {activePages} of {data.total_pages}
        </span>
      </div>
      <div className="flexPaginator">
        <ul>
          <li onClick={Minus}>⏪</li>
          {Array.from({ length: data.total_pages }, (_, num) => num + 1)
            .slice(min, max)
            .map((item) => (
              <li
                key={item}
                onClick={() => setActivePages(item)}
                className={item === activePages ? "active" : ""}
              >
                {item}
              </li>
            ))}
          <li>・・・</li>
          <li onClick={Plus}>⏩</li>
        </ul>
      </div>
    </Container>
  );
}

export default PageNavigation;
