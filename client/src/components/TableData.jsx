import React from "react";
import {useState} from "react"
import {useEffect} from "react"

//Table rows elementu template

function createRow(input){
  
  return (
    <tr key = {input.ak} className="clickable" >          
    <td>{input.ak}</td>
    <td>{input.fname}</td>
    <td>{input.lname}</td>      
   </tr>
  );
}

//Fetchina json ir sukuria lentele

function TableData(){
  const [data, setData] = useState([]);
  useEffect(() => {
      async function fetchMyApi() {
        let res = await fetch("http://localhost:3001/api")
        res = await res.json()
        setData(res)
      }
      fetchMyApi()
    }, []);
  
    return (
       data.map(createRow)
    );
}


export default TableData;