import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    value: this.props.counter.value
  };


handleIncrement = () => {
  this.setState({ value: this.state.value + 1});
};

  render() { 

    const product = { id: 1, name: "Sample Product" };
    return(
     <div>
      <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
      
      <button 
      onClick={ () => this.handleIncrement(product)} 
      className="btn btn-secondary btn-sm">Increment</button>
     <button
      onClick={() => this.props.onDelete(this.props.counter.id)} 
      className="btn btn-danger btn-sm m-2">Delete</button>
    
     
      
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
  }

formatCount(){
  const{ value } =this.state;
  return value === 0 ?  "Zero" : value;
}

}
 
export default Counter;

//props include data that we give to a component -It is read only
//state includes data that is local or private to the component