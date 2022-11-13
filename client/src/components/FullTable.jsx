import React from "react"
import TableHeader from "./TableHeader"
import TableData from "./TableData"

function createTable(props) {
 return  ( <div>
            <h3 className="tableTitle" >Data List</h3> 
            <div className="data-div">
            <table className="table-data">
            <TableHeader />
            <tbody>
            <TableData data={props.data} setData={props.setData} dataDetails={props.dataDetails} setDetails={props.setDetails}/>
            </tbody>
            </table>
            </div>
         </div>
 )}

 export default createTable;