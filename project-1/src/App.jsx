import React, { useState } from 'react';
import Navbar from './components/Basics/Navbar';

import Textform from './components/Basics/Textform';
import Alert from './components/Basics/Alert';
//  import About from './components/Basics/About';


const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
       
//       ),
//     },
//     {
//       path: "/about",
//       element: ,
//     },
//   ]);

  return (
    <>
 
      <Navbar title="TextUtils" aboutText="About Us"mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
         <Textform showAlert={showAlert} heading="Enter your text to analyze below" mode={mode} />
       </div>
       {/* <About /> */}
    </>
  );
};

export default App;






