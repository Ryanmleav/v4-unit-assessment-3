import React, {Component} from 'react';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'
import './App.css';
// console.log(data)
class App extends Component {
  constructor(){
    super();
    this.state = {
      books: data,
      shelf: []
    }
    
    console.log(this.state.books)
  }
 addToShelf(){}
  

  render () {
  return (
    
    <div className="App">
     < Header />
     
     <div className='sidebyside'>
     < BookList books={this.state.books}/>
     < Shelf />
     </div>
     </div>
  );
}
}

export default App;
