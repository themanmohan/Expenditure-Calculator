import React from 'react'
import {MdSend} from 'react-icons/md'
export default function ExpenditureForm({handleChange,charge,amount,edit,handleSubmit}) {
    return (
        <div>
            <form onSubmit={handleSubmit} >
              <div className="form-center">
                 <div className="form-group">
                 <label htmlFor="charge">Charge</label>
                     <input type="text"  className="form-control" name="charge" value={charge} onChange={handleChange}/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="amount">Amount</label>
                     <input type="number"  className="form-control" name="amount" value={amount} onChange={handleChange} />
                 </div>
              </div>
              <button className="btn" name="submit">{edit?'Edit':'Submit'}<MdSend className="btn-icon"/></button>
          </form>
        </div>
    )
}
