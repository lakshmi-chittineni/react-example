// import React, { useState } from "react";

// function ParentComponent() {
//   const [number, setNumber] = useState(0);

//   const handleAddition = () => {
//     setNumber(number + 5);
//   };

//   const handleSubtraction = () => {
//     setNumber(number - 5);
//   };

//   return (
//     <div>
//       <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
//       <button onClick={handleAddition}>+5</button>
//       <button onClick={handleSubtraction}>-5</button>
//       <ChildComponent result={number} />
//     </div>
//   );
// }

// function ChildComponent({ result }) {
//   return <div>{"Result: " + result}</div>;
// }
