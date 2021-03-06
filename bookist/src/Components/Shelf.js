import React, { Component } from 'react';

export default class Shelf extends Component {
  constructor() {
    super();

  }

  render() {

    let mappedTitles = this.props.shelf;

    return (
      <>
        <button onClick={this.props.clearShelf}> clear </button>
        <h1 className='display'>Shelf</h1>
        {mappedTitles.map((title, idx) => (
          <div key={idx}>
            <h1>{title}</h1>
          </div>
        ))}


      </>
    )
  }
}