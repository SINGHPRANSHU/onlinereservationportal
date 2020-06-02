import React from 'react';

class customer extends React.Component {
    constructor(props) {
    super(props);
    
   
    }
    render() { 
        
        return ( 
            <div className="container jumbotron jumbotron-fluid">
              <center>
                <h1 className="text-primary">your account </h1>
              <h1 className="text-primary">{this.props.response.data.name}</h1>
              <h1 className="text-primary">{this.props.response.data.mob}</h1>
              <h1 className="text-primary">{this.props.response.data.email}</h1>
              <h1 className="text-success">you applied for</h1>
              <ul>
              {(this.props.response.data.reservation).forEach(element => {
               
              return <li value={this.props.response.data._id}>{element}</li>
               
              })}
             
               </ul>
              </center>
           </div>
         );
    }
}
 
export default customer;