// import React, { Component } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";

// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleLogin = () => {
//     const { email, password } = this.state;

//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("User logged in:", user);
//       })
//       .catch((error) => {
//         // Handle to errors
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error("Login Error:", errorCode, errorMessage);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h2>User Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => this.setState({ email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => this.setState({ password: e.target.value })}
//         />
//         <button onClick={this.handleLogin}>LOGIN</button>
//       </div>
//     );
//   }
// }

// export default Login;
