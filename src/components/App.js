import React from 'react';
import { toast } from 'react-toastify';
import Dashboard from './Dashboard/Dashboard';
// import styles from "./App.module.css";
// toast.configure({
//   position: "bottom-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
// });
toast.configure({
  position: 'bottom-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  rtl: false,
});

function App() {
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
