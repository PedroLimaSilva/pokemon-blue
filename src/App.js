import React, { Component } from 'react';
import './App.css';

import { move } from './state/actions';
import { Screen } from './components/Screen';

import { gameState } from './state/store';

export default class App extends Component {
  state;

  constructor() {
    super();
    this.state = gameState.getState();
    this.setInputListener();
  }

  handleKeyPress(event) {
    if (event.key === 'ArrowUp') {
      gameState.dispatch(move('Up'));
    } else if (event.key === 'ArrowDown') {
      gameState.dispatch(move('Down'));
    } else if (event.key === 'ArrowLeft') {
      gameState.dispatch(move('Left'));
    } else if (event.key === 'ArrowRight') {
      gameState.dispatch(move('Right'));
    }
  }
  setInputListener() {
    document.onkeydown = this.handleKeyPress;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <main>
          <Screen />
        </main>
      </div>
    );
  }
}
