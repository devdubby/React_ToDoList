import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import ListController from './ListController';
import ListView from './ListView';

export default class ToDoList extends Component {
  titleRef = React.createRef();

  contentRef = React.createRef();

  modifyTitleRef = React.createRef();

  modifyContentRef = React.createRef();

  state = {
    todoList: [],
  }

  componentDidMount() {
    const originTodoList = JSON.parse(localStorage.getItem('todolist'));
    this.setState({
      todoList: originTodoList,
    });
  }

  addTodo = () => {
    const titleValue = this.titleRef.current;
    const contentValue = this.contentRef.current;
    const isModifyMode = true;
    const newTodo = {
      title: titleValue.value,
      content: contentValue.value,
      isModifyMode: !isModifyMode,
    };
    this.setState((state) => {
      const newTodoList = [...state.todoList, newTodo];
      localStorage.setItem('todolist', JSON.stringify(newTodoList));
      return {
        todoList: newTodoList,
      };
    });
  }

  completeTodo = (index) => {
    this.setState((state) => {
      const newTodoList = [...state.todoList];
      newTodoList.splice(index, 1);
      localStorage.setItem('todolist', JSON.stringify(newTodoList));
      return {
        todoList: newTodoList,
      };
    });
  }

  modifyModeOnOff = (index) => {
    this.setState((state) => {
      const newTodoList = [...state.todoList];
      newTodoList.map((todo) => {
        todo.isModifyMode = false;
      });
      newTodoList[index].isModifyMode = !newTodoList[index].isModifyMode;
      console.log(newTodoList[index].isModifyMode);
      return {
        todoList: newTodoList,
      };
    });
  }

  modifyTodo = (index) => {
    const modifyTitleValue = this.modifyTitleRef.current;
    const modifyContentValue = this.modifyContentRef.current;
    this.setState((state) => {
      const modifiedTodoList = [...state.todoList];
      modifiedTodoList[index].isModifyMode = true;
      modifiedTodoList[index].title = modifyTitleValue.value;
      modifiedTodoList[index].content = modifyContentValue.value;
      localStorage.setItem('todolist', JSON.stringify(modifiedTodoList));
      return {
        todoList: modifiedTodoList,
      };
    });
  }

  render() {
    return (
      <div>
        <ListController
          addList={this.addTodo}
          titleRef={this.titleRef}
          contentRef={this.contentRef}
        />
        <ListView
          completeTodo={this.completeTodo}
          list={this.state.todoList}
          modifyModeOnOff={this.modifyModeOnOff}
          modifyTitleRef={this.modifyTitleRef}
          modifyContentRef={this.modifyContentRef}
          modifyTodo={this.modifyTodo}
        />
      </div>
    );
  }
}
