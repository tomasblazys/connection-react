import React from 'react'
import { useState } from "react";

function Form(props) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [ak, setAk] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    

  let handleSubmit = async (e) => {
    e.preventDefault();
    let newData = {
      fname : fname,
      lname : lname,
      ak : ak,
      email: email,
      age : age
    }

    try {
      let res = await fetch("http://localhost:3001/form", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newData), 
      });
      let resJson = await res;
      let oldData = props.data 
      let newArray = oldData.concat(newData);
      
      if (res.status === 200) {
        setFname("");
        setLname("");
        setAk("");
        setEmail("");
        setAge("");
        setMessage("Įrašas sukurtas sėkmingai");
        props.setData(newArray)
      } else if (res.status === 401) {
        setMessage("Įrašas nepavyko. Toks AK jau egzistuoja!");
      } else {
        setMessage("Kažkas negerai.. :(");
      }
    } catch (err) {
      
    }
  };





  return (
    <div>
      <form onSubmit={handleSubmit}>
      <p>Vardas</p><input type="text" value={fname} required placeholder="Vardas" onChange={(e) => setFname(e.target.value)}  /> <br />
      <p>Pavardė</p><input type="text" value={lname} required placeholder="Pavardė" onChange={(e) => setLname(e.target.value)} /> <br />
      <p>Asmens Kodas</p><input type="tel" minLength="11" value={ak} required placeholder="Asmens kodas" onChange={(e) => setAk(e.target.value)} /> <br />
      <p>E-mail</p><input type="email" value={email} required placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} /> <br />
      <p>Amžius</p><input type="number" value={age} required placeholder="Amžius" onChange={(e) => setAge(e.target.value)} /> <br />
      <button className="submitButton" type="submit" name="submit">Pateikti</button>
      <div className="message"><p>{message}</p></div>
    </form>
    </div>
  )
}

export default Form
