import React, { Component } from 'react';

class Counter extends Component {

  render() { 

    const product = { id: 1, name: "Sample Product" };
    return(
     <div>
      <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
      
      <button 
      onClick={ () => this.props.onIncrement(this.props.counter)} 
      className="btn btn-secondary btn-sm">Increment</button>
     <button
      onClick={() => this.props.onDelete(this.props.counter.id)} 
      className="btn btn-danger btn-sm m-2">Delete</button>
    
     
      
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

formatCount(){
  const{ value } =this.props.counter;
  return value === 0 ?  "Zero" : value;
}

}
 
export default Counter;

//props include data that we give to a component -It is read only
//state includes data that is local or private to the component