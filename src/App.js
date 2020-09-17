import React from 'react';
import './App.css';
import Items from "./Items";
import ItemForm from "./ItemForm";

class App extends React.Component {
  state = {
    groceryItems: [
      { id: 1, item: 'bananas', complete: true },
      { id: 2, item: 'apples', complete: true },
      { id: 3, item: 'rice', complete: true },
      { id: 4, item: 'beans', complete: true },
      { id: 5, item: 'beer', complete: true },
      { id: 6 , item: 'toilet paper', complete: true },
      { id: 7, item: 'hamburger', complete: true },
    ],
  };

addItem = (item) => {
  console.log(item);
  // const { groceryItems } = this.state;
  const newItem = {...item, id: Math.random()};
  this.setState({
    groceryItems: [...this.state.groceryItems, newItem],
  });
};
  render() {
    return (
      <>
       <Items groceryItems={this.state.groceryItems}/>
       <hr/>
       <ItemForm add={this.addItem}/>
      </>
    );
  }
}

export default App;
