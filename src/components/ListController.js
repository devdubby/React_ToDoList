import React, { Component } from 'react';

type Props = {
  titleRef: Object,
  contentRef: Object,
  addList: Function,
};

export default class ListController extends Component<Props> {
  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <input
          type="text"
          placeholder="제목"
          ref={this.props.titleRef}
        /> <br />
        <input
          type="text"
          placeholder="내용"
          ref={this.props.contentRef}
        /> <br />
        <button
          type="button"
          onClick={this.props.addList}
        >
          등록
        </button>
      </div>
    );
  }
}
