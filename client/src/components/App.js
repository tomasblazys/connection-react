import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FullTable from "./FullTable"
import Popup from "./Popup"
import {useState} from "react"
import Form from "./Form"
import Details from "./Details"

function App() {

  const [buttonPopup, setButtonPopup] = useState(false)
  const [data, setData] = useState([]);
  const [dataDetails, setDetails] = useState("")
  
  return (  
    <div>
      <Header /> 
      <Details dataDetails={dataDetails} setDetails={setDetails}/>
      <FullTable data={data} setData={setData} dataDetails={dataDetails} setDetails={setDetails}/> 
      <button className="new-btn"onClick={() => setButtonPopup(true)}>Naujas įrašas</button> 
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2>Sukurti naują įrašą</h2>
        <Form data={data} setData={setData}/>
      </Popup>
         
      <Footer /> 
    </div>    
  );
}

export default App;
