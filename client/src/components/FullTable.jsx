import React from "react"
import TableHeader from "./TableHeader"
import TableData from "./TableData"

function createTable() {
 return  (  <div>
            <h3 className="tableTitle" >Data List</h3> 
            <table className="table">
            <TableHeader />
            <tbody>
            <TableData />
            </tbody>
            </table>
            </div>
 )}

 export default createTable;