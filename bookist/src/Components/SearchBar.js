import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(){
    super ();
    this.state = {
      userInput: '',
      
    }
  }
  handleChange(){
    this.setState({userInput: ''})
  }
  handleclick(){
    return this.props.filterBooks
  }
  handleClear() {
    this.state.userInput = '';
    this.setState({ userInput: this.state.userInput })
  }

  render(){
    return(
      <>
      <input type='text' placeholder='search books' onChange={this.handleChange} value={this.state.input}/>
      <button onCLick={this.handleclick}>Search</button>
      <button onClick={this.handleClear}>Clear Search</button>
      </>
    )
  }
}