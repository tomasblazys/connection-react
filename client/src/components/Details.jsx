import React from 'react'



function Details(props) {

  


   
  return (props.dataDetails === "") ? "" : (
    <div>
      <h3 className="tableTitle" >Data details</h3>
      <table className="table-details">
       <tbody>
        <tr>
          <th>Vardas:</th>
          <td>{props.dataDetails.fname}</td>
          <th>Pavardė:</th>
          <td>{props.dataDetails.lname}</td>
          <th>A.Kodas:</th>
          <td>{props.dataDetails.ak}</td>
          </tr>
          <tr>
          <th>E-mail:</th>
          <td>{props.dataDetails.email}</td>
          <th>Amžius:</th>
          <td>{props.dataDetails.age}</td>
          </tr>   
       </tbody>
       </table>
       <button className="new-btn" onClick={() => props.setDetails("")} >Uždaryti</button> 
    </div>
  )
}

export default Details
