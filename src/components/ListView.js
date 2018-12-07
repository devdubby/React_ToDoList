import React from 'react';

type Props = {
  list: Array,
  completeTodo: Function,
  modifyModeOnOff: Function,
  modifyTitleRef: Object,
  modifyContentRef: Object,
  modifyTodo: Function,
};

export default (props: Props) => (
  <div>
    {props.list.map((todo, index) => <div key={index}>{index + 1}. 제목:{todo.title} 내용:{todo.content}  
      <button type="button" onClick={props.completeTodo.bind(this, index)}>완료</button>  
      <button type="button" onClick={props.modifyModeOnOff.bind(this, index)}>수정하기</button>
      <br />
      {todo.isModifyMode && 
      <div>
        <input type="text" placeholder="수정 제목" ref={props.modifyTitleRef} /><br />
        <input type="text" placeholder="수정 내용" ref={props.modifyContentRef} /><br />
        <button type="button" onClick={props.modifyTodo.bind(this, index)}>수정</button>
      </div>}
    </div>)}
  </div>
);
