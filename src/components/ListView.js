import React from 'react';
import { withStyles, TextField, Button } from '@material-ui/core';

type Props = {
  list: Array,
  completeTodo: Function,
  modifyModeOnOff: Function,
  modifyTitleRef: Object,
  modifyContentRef: Object,
  modifyTodo: Function,
};

function ListView(props : Props) {
  return (
    <>
      {props.list.map((todo, index) => (
        <div key={index}>
          <TextField
            id="outlined-read-only-input"
            label="제목"
            value={todo.title}
            InputProps={{ readOnly: true }}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="내용"
            value={todo.content}
            InputProps={{ readOnly: true }}
            margin="normal"
            variant="outlined"
          />
          <Button
            style={{ margin: '25px 0px 0px 10px' }}
            variant="contained"
            color="primary"
            onClick={props.completeTodo.bind(this, index)}>
            완료
          </Button>
          <Button
            style={{ margin: '25px 0px 0px 10px' }}
            variant="contained"
            color="primary"
            onClick={props.modifyModeOnOff.bind(this, index)}>
            수정하기
          </Button>
          <br />
          {todo.isModifyMode && 
          <div>
            <TextField
              label="수정 제목"
              margin="normal"
              variant="outlined"
              inputRef={props.modifyTitleRef}
            />
            <br />
            <TextField
              label="수정 내용"
              margin="normal"
              variant="outlined"
              inputRef={props.modifyContentRef}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={props.modifyTodo.bind(this, index)}>
              수정하기
            </Button>
          </div>}
        </div>
      ))}
    </>
  );
}

export default withStyles()(ListView);
