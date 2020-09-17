import React from "react";

class ItemForm extends React.Component {
  
  state = { item: ""};


  handleSubmit = (e) => {
    e.preventDefault(); //this is preventing the page from reloading
    this.props.add(this.state);
  };


    // this is going to handle the input, setting state and changing itemName
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value,
      });
    };

  
  render() {

    return(
      
        <form onSubmit={this.handleSubmit}>
          <input
          name="item"
          value={this.state.item} 
          required 
          placeholder="new item"
          onChange={this.handleChange}
          />
        <button onClick={this.handleSubmit}>Add</button>
        </form>
      
    );
  }
}

export default ItemForm;