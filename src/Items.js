import React from 'react';
import './App.css';
// import Items from "./Items";
// import GroceryForm from "./GroceryForm";

class Items extends React.Component {


 
  renderGroceryItems = () => {
    const { groceryItems } = this.props;
    return groceryItems.map((item) => {
      return <div key={item.id}>{item.item}</div>;
    });
  };

  render() {
    return (
      <>
      <h1>Grocery List</h1>
      {this.renderGroceryItems()}
      </>
    );
  }
};

export default Items;