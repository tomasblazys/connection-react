import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateTable from "./FullTable"
import Popup from "./Popup"
import {useState} from "react"
import {useEffect} from "react"
import Form from "./Form"

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data[0].fname));
  }, []);
   


  const [buttonPopup, setButtonPopup] = useState(false)
  
  return (
    <div>
      <Header />
      <CreateTable />
      <button className="new-btn"onClick={() => setButtonPopup(true)}>Naujas įrašas</button> 
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2>Sukurti naują įrašą</h2>
        <Form />
      </Popup>
      <Footer />
    </div>    
  );
}

export default App;
