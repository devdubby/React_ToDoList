import React, { Component } from 'react';
import { withStyles, TextField, Button } from '@material-ui/core';

const styles = theme => ({
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
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

type Props = {
  titleRef: Object,
  contentRef: Object,
  addList: Function,
};

class ListController extends Component<Props> {
  render() {
    return (
      <div>
        <h1 style={{ color: '#1de9b6' }}>ToDo</h1>
        <TextField
          label="제목"
          margin="normal"
          variant="outlined"
          inputRef={this.props.titleRef}
        /> <br />
        <TextField
          label="내용"
          margin="normal"
          variant="outlined"
          inputRef={this.props.contentRef}
        /> <br />
        <Button variant="contained" color="primary" onClick={this.props.addList}>
          등록
        </Button>
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(ListController);
