
import React, { Component } from 'react'
import ExpenditureForm from './components/ExpenditureForm'
import ExpenditureList from './components/ExpenditureList'
import {v4 as uuid} from "uuid";
import './App.css'
export default class App extends Component {
     initialState = localStorage.getItem('expenditure') ? JSON.parse(localStorage.getItem('expenditure')):[]
    state={
            expenditure:this.initialState ,
            amount:'',
            charge:'',
            edit:false,
            id:0,
            total:5500
    }

//clear
 handleClear=()=>{
   this.setState({
          expenditure:[]
   })
 }

 //edit 

 demo=()=>{
   let totalam=0;
  this.state.expenditure.forEach(item=>{
    return totalam += item.amount
  })
  return totalam
 }



 handleEdit=(id)=>{
     const expend = this.state.expenditure.find(item=>item.id===id)
    this.setState({
      charge:expend.charge,
      amount:expend.amount,
      edit:true,
      id:id
    })
    
 }

 //delete


 handleDelete=(id)=>{
  const delet = this.state.expenditure.filter(item=>item.id!==id)
  this.setState({
    expenditure:delet
  })
 }
//handling change in form
    handleChange=(e)=>{
          this.setState({
            [e.target.name]:e.target.value
          })
        
    }
    //submiiting handle

    componentDidUpdate(){
      localStorage.setItem('expenditure', JSON.stringify(this.state.expenditure))
    }

    handleSubmit=(e)=>{
    const t = this.demo()
    console.log(t)
      e.preventDefault()
   
      let charge= this.state.charge
      let amount = this.state.amount
      let amount1=parseInt(amount)
      if(this.state.charge!=='' || this.state.amount>0){
       if(this.state.edit){
         let charge = this.state.charge
         let amount = this.state.amount
         let amount1 = parseInt(amount)
         let iid = this.state.id
        const  tempexpen=this.state.expenditure.map(item=>{
          return item.id===iid?{...item,charge:charge,amount:amount1}:item
          
        }
        )
        console.log(tempexpen)
        this.setState({
          edit:false,
          expenditure:tempexpen,
          charge:'',
          amount:''
        })
       }else{
            const updatedvvalue={id:uuid(),charge,amount:amount1}
      this.setState({
        expenditure: [...this.state.expenditure, updatedvvalue],
        charge:'',
        amount:'',
        edit:false
      })
       }

      }else{
          
      }
      
    }
    render() {
        return (
             <>
            
       
      <h1>Expenditure calculator</h1>
       <div className="grid">
      <h1>
         Total Expenditure For A Month: {
           " "
         }
        <span className="total">

          ${
            this.state.total
          }
        </span>
        
      </h1>
       <h1>
        Remaining Expenditure For A Month :{" "}<br />
        <span className="total">

          ${
            this.state.total - this.demo() > 0 ? this.state.total - this.demo() : `You are Using you Money greater than located you  use ${Math.abs(this.state.total - this.demo())} more money than allocated`
          }
        </span>
        
      </h1>
      </div>
       
      <main className="App">
      
                <ExpenditureForm handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} edit={this.state.edit} charge={this.state.charge} amount={this.state.amount} />
                <ExpenditureList handleEdit={this.handleEdit} expenditure={this.state.expenditure} handleDelete={this.handleDelete} handleClear={this.handleClear} />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">

          ${
            this.demo()
              /* this.state.expenditure.reduce((acc, curr) => {
               
                  return (acc += curr.amount
                  )
              },0) */
          }
        </span>
        
      </h1>
     
    </>
        )
    }
}
