import React from 'react';
import { withStyles, TextField, Button } from '@material-ui/core';

type Props = {
  titleRef: Object,
  contentRef: Object,
  addList: Function,
};

function ListController(props : Props) {
  return (
    <>
      <h1 style={{ color: '#1de9b6' }}>ToDo</h1>
      <TextField
        label="제목"
        margin="normal"
        variant="outlined"
        inputRef={props.titleRef}
      /> <br />
      <TextField
        label="내용"
        margin="normal"
        variant="outlined"
        inputRef={props.contentRef}
      /> <br />
      <Button variant="contained" color="primary" onClick={props.addList}>
        등록
      </Button>
      <br />
    </>
  );
}

export default withStyles()(ListController);
