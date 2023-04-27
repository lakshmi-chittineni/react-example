//import React, { useState } from "react";

// export default function Registerform() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [contact, setContact] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const showDetails = () => {
//     console.log("Email:", email);
//     console.log("password:", password);
//     console.log("contact:", contact);
//     console.log("FirstName:", firstName);
//     console.log("LastName:", lastName);
//   };
//   return (
//     <>
//       <div className="container">
//         <h2>Form Example</h2>
//         {/* <form> */}
//         <p>
//           <label htmlfor="firstName">First Name</label>
//         </p>
//         <p>
//           <input
//             type="text"
//             onChange={(e) => setFirstName(e.target.value)}
//             name="firstName"
//             placeholder="Enter firstName"
//           />
//         </p>
//         <p>
//           <label htmlfor="lastName">Last Name</label>
//         </p>
//         <p>
//           <input
//             type="text"
//             onChange={(e) => setLastName(e.target.value)}
//             name="lastName"
//             placeholder="Enter lastName"
//           />
//         </p>
//         <p>
//           <label htmlfor="contact">Contact</label>
//         </p>
//         <p>
//           <input
//             type="contact"
//             onChange={(e) => setContact(e.target.value)}
//             name="contact"
//             placeholder="Enter mobile number"
//           />
//         </p>

//         <p>
//           <label htmlfor="email">E-mail</label>
//         </p>
//         <p>
//           <input
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//             placeholder="Enter E-mail address"
//           />
//         </p>
//         <p>
//           <label htmlfor="password">Password</label>
//         </p>
//         <p>
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//             placeholder="Enter password"
//           />
//         </p>
//         <p>
//           <button type="submit" onClick={showDetails} className="btn">
//             Submit
//           </button>
//         </p>
//         {/* </form> */}
//       </div>
//     </>
//   );
// }



