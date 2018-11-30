import React, { Component } from 'react';
import { CssBaseline, Paper, Typography } from '@material-ui/core';
import ToDoList from '../../components/ToDoList';
import TopAppBar from '../TopAppBar/TopAppBar';
import logo from './logo.svg';
import './global.css';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <TopAppBar />
        <div className="App">
          <Paper className="App-paper">
            <ToDoList />
          </Paper>
        </div>
      </>
    );
  }
}

export default App;
