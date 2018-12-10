import React, { Component } from 'react';
import { withStyles, TextField, Button } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

type Props = {
  list: Array,
  completeTodo: Function,
  modifyModeOnOff: Function,
  modifyTitleRef: Object,
  modifyContentRef: Object,
  modifyTodo: Function,
};

class ListView extends Component<Props> {
  render() {
    return (
      <div>
        {this.props.list.map((todo, index) => <div key={index}> 
        <TextField
          id="outlined-read-only-input"
          label="제목"
          value={todo.title}
          InputProps={{
            readOnly: true,
          }}
          margin="normal"
          variant="outlined"
        /> 
        <TextField
          id="outlined-read-only-input"
          label="내용"
          value={todo.content}
          InputProps={{
            readOnly: true,
          }}
          margin="normal"
          variant="outlined"
        />
        <Button style={{ margin: '25px 0px 0px 10px' }} variant="contained" color="primary" onClick={this.props.completeTodo.bind(this, index)}>
          완료
        </Button>
        <Button style={{ margin: '25px 0px 0px 10px' }} variant="contained" color="primary" onClick={this.props.modifyModeOnOff.bind(this, index)}>
          수정하기
        </Button>
        <br />
        {todo.isModifyMode && 
        <div>
          <TextField
          label="수정 제목"
          margin="normal"
          variant="outlined"
          inputRef={this.props.modifyTitleRef}
          /> <br />
          <TextField
          label="수정 내용"
          margin="normal"
          variant="outlined"
          inputRef={this.props.modifyContentRef}
          /> <br />
          <Button variant="contained" color="primary" onClick={this.props.modifyTodo.bind(this, index)}>
            수정하기
          </Button>
        </div>}
      </div>)}
    </div>
    );
  }
}

export default withStyles(styles)(ListView);