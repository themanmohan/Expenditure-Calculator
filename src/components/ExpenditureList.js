import React from 'react'
import  Item from './ExpenditureItem'
import {MdDelete} from 'react-icons/md'
export default function ExpenditureList({expenditure,handleClear,handleDelete,handleEdit}) {
    
    return (
        <>
        <ul>
            {
                expenditure.map(expenditure=>{
                    return(
                        <Item key={expenditure.id} expenditure={expenditure} handleDelete={handleDelete} handleEdit={handleEdit} />
                    )
                })
            }
            </ul>
            {
                expenditure.length>0 && <button className="btn" onClick={handleClear}>
                 Clear
                <MdDelete className="btn-icon" />
               </button>
            }
        </>
    )
}
