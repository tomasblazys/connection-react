import React from "react";
import {useState} from "react"
import {useEffect} from "react"




function TableData(props){

  let handleClick =  async (input) => {
    let detailsData = [];
    try {
      let res = await fetch("http://localhost:3001/details", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({input}), 
      });
    detailsData = await res.json()
    props.setDetails(detailsData)
    props.setDetailsTrigger(true)
    } catch (err) {
      
    }
}

  function createRow(input){
    return (
      <tr key = {input.ak} onClick={() => handleClick(input.ak)}  className="clickable" >          
      <td>{input.ak}</td>
      <td>{input.fname}</td>
      <td>{input.lname}</td>      
     </tr>
    );
  }


  useEffect(() => {
      async function fetchMyApi() {
        let res = await fetch("http://localhost:3001/api")
        res = await res.json()
        props.setData(res)
      }
      fetchMyApi()
    }, []);
  
    return (
       props.data.map(createRow)
    );
}




export default TableData;
