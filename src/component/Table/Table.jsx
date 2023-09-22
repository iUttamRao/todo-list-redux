import React from 'react'
import { PencilFill,Save,TrashFill } from 'react-bootstrap-icons';

const Table = (props) => {
   
    const {list, handleDelete, handleUpdate, editList, onChange} =props;
    const showTableRow =(value,index) =>{
        const isEditable =editList.includes(index);
        return(
            <tr key ={index}>
                <td>{`${index +1}.`}</td>
                <td>{!isEditable ? <p>{value}</p>: <input value={value} onChange={(e) => onChange(index, e.target.value)}/>}</td>
                <td>
                    {
                        !isEditable ?
                        <button onClick={() => handleUpdate(index)}><PencilFill color='royalblue'/></button>
                        :
                        <button onClick={() => handleUpdate(index, true)}><Save color='royalblue'/></button>
                    }
                </td>
                <td><button onClick={() => handleDelete(index)}><TrashFill color='red'/></button></td>
            </tr>
        )
    }
    const showTable =() =>{
        return(
            <table>
                <thead>
                    <tr>
                        <th>Task No.</th>
                        <th>Task Name</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(showTableRow)}
                </tbody>
            </table>
        )
    }
    if(list.length >0){
        return showTable();
    }
    else{
        return null;
    }
 
}

export default Table