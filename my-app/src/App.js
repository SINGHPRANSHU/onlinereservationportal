import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { json } from 'body-parser';
import Customer from './customer';

class app extends React.Component {
  constructor(props) {
    super(props);
     this.state={
       name:'',
       mob:'',
       email:''
     }
  }
  changehandler = (e)=>{
    this.setState({[e.target.name]:e.target.value});
  };

  submithandler = (e)=>{
   e.preventDefault();
   axios.post('http://localhost:5000/customerinfo',({name:this.state.name,mob:this.state.mob,email:this.state.mob}))
   .then((response)=>{
      console.log(response);
      
      ReactDOM.render(
        <React.StrictMode>
          <Customer response={response}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
    
    
   })
   .catch((error)=>{console.log(error);
   });
   
   
  };
   
  
   
  
 render(){
   const {name,mob,email}=this.state;
   return(
     <div className="container jumbotron jumbotron-fluid">
       <center><h1 className="text-secondary">pass your information for sign in or login</h1></center>
       <form onSubmit={this.submithandler}>
         <div ><center>
            <input className="text-primary" type="text" name="name" value={name} onChange={this.changehandler} />
            </center>
         </div><br/>
         <div><center>
           <input className="text-primary"  type="text" name="mob" value={mob} onChange={this.changehandler}/></center>
         </div><br/>
         <div><center>
           <input className="text-primary" type="text" name="email" value={email} onChange={this.changehandler}/></center>
         </div><br/><center>
         <button type="submit" className="btn btn-lg btn-dark">sign in</button></center>
       </form>
     </div>
   )
 }

  
}
 
export default app;
