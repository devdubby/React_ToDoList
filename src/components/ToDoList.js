import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import ListController from './ListController';
import ListView from './ListView';

export default class ToDoList extends Component {
  titleRef = React.createRef();

  contentRef = React.createRef();

  state = {
    title: '',
    content: '',
    todoList: [],
  }

  addTodo = () => {
    const titleValue = this.titleRef.current;
    const contentValue = this.contentRef.current;
    const newTodo = {
      title: titleValue.value,
      content: contentValue.value,
    };
    this.setState(state => ({
      todoList: [...state.todoList, newTodo],
    }));
  }

  completeTodo = (index) => {
    const newTodoList = [...this.state.todoList];
    newTodoList.splice(index, 1);

    // newTodoList[index] = {
    //   title: newTodoList[index].title,
    //   content: newTodoList[index].content,
    // };

    this.setState({
      todoList: newTodoList,
    });
  }

  render() {
    return (
      <div>
        <ListController addList={this.addTodo} titleRef={this.titleRef} contentRef={this.contentRef} />
        <ListView completeTodo={this.completeTodo} list={this.state.todoList} />
      </div>
    );
  }
}
