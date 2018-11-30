import React from 'react';

type Props = {
  list: Array,
  completeTodo: Function,
};

export default (props: Props) => (
  <div>
    {props.list.map((todo, index) => <div key={index}>{index + 1}. 제목:{todo.title} 내용:{todo.content}  <button type="button" onClick={props.completeTodo.bind(this, index)}>완료</button></div>)}
  </div>
);
