import React, { Component } from 'react';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'
import SearchBar from './Components/SearchBar'
import './App.css';
// console.log(data)
class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }


  addToShelf(title) {
    const that = this
    return function () {
      const shelf = that.state.shelf;
      let isInShelf = false;
      for (let i = 0; i < shelf.length; i++) {
        if (shelf[i].indexOf(title) >= 0) {
          isInShelf = true;
        }
      }

      if (!isInShelf) {
        that.state.shelf.push(title)
        console.log(that.state.shelf)
        that.setState({ shelf: that.state.shelf });
      }

    }

  }
  clearShelf() {
    this.state.shelf = [];
    this.setState({ shelf: this.state.shelf })

  }



  filterBooks(input) {
   this.state.Books.filter((input) => {
    })
    let filteredBooks = this.state.books
    return filteredBooks
  }
  reset(){
    return (this.state.books = data)
  }



  render() {
    return (

      <div className="App">
        < Header />

        <div className='sidebyside'>
          <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
          < BookList books={this.state.books} addToShelf={this.addToShelf} />
          < Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
        </div>
      </div>
    );
  }
}

export default App;
