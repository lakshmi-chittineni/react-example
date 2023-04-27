// import React, { useState } from "react";
// import Childcomponent from "./Childcomponent";

// export default function Parentcomponent() {
//   // const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(0);

//   const handleAddition = () => {
//     setNumber(number+5);
//   };
//   const handleSubtraction = () => {
//     setNumber(number - 5);
//   };

//   return (
//     <>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <button onClick={handleAddition}>+</button>
//       <button onClick={handleSubtraction}>-</button>

//       {/* <h1>count: {count}</h1> */}
//       <Childcomponent countvalue={number} />
//     </>
//   );
// }





import { useState } from "react";


export default function ParentComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        Toggle
      </label>
      {isChecked ? <ChildComponent2 /> : <ChildComponent1 />}
    </div>
  );
}

function ChildComponent1() {
  return <h2>Child Component 1</h2>;
}

function ChildComponent2() {
  return <h2>Child Component 2</h2>;
}
