import React from 'react'
import {MdDelete,MdEdit} from 'react-icons/md'
export default function ExpenditureItem({expenditure,handleDelete,handleEdit}) {
    const {id,amount,charge}=expenditure
    return (
        <>
          <li className="item">
         <div className="info">
              <span className="expense">{charge}</span>
               <span className="amounnt">{amount}</span>
         </div>
         <div>
           <button className="edit-btn" aria-label="edit-button" onClick={()=>{handleEdit(id)}}>
             <MdEdit />
           </button>
           <button className="clear-btn" aria-label="delete-button"onClick={()=>handleDelete(id)}>
             <MdDelete />
           </button>
         </div>
    </li>
    </>
    )
}
