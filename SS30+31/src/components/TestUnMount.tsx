
import React, { Component } from 'react'

export default class TestUnMount extends Component {
      //bước 4
  componentWillUnmount(): void {
    console.log('willUnmount');
    // chạy cuối cùng khi phần tử bị xóa khỏi dom,
    // => dùng để clear time-out , xóa khỏi bộ nhớ.
  }
  render() {
    return (
      <div>TestUnMount</div>
    )
  }
}
