import { useState } from 'react'
import React, { Component } from 'react'
import TestUnMount from './components/TestUnMount';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';

interface Props{
}

interface State{
  name:string;
  age:number;
  count:number;
  isAtive:boolean;
}

export default class App extends Component <Props,State>{
  constructor(props:Props) {
    super(props);
    this.state = {
      //chứa dữ liệu
      name:'duong',
      age:20,
      count:0,
      isAtive: true
    }
  }
  //phuong thức thay đổi state-----------------------------
  // khi muốn thay đổi state đối với class cpn thì dùng this.setState()
  handleClick = ()=>{
    this.setState({count: this.state.count +  1})
  }
  //bước 2  - 1
  componentWillMount():void{
      console.log('willMount');
      /*chạy trước render => ở cpn có thể tính toán lại state và props.
       nhưng nên lưu ý thời gian mà chuyển sang render nhanh.
       
       */
  }
  // bước 2 - 3
  componentDidMount():void{
    // console.log('didMount');
    /*
    chạy sau khi cpn render lần đầu tiên 
    các thành phần của cpn được gắn vào Dom có thể thực hiện các tương tác với dom
    => nơi lí tưởng để Call API lấy data render ra cpn.
    */
  }

  //quyết định xem có chạy khi thay đổi hay không--------------------------------
  // bước 3 -1
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    return true; //mặc định là true, nếu false thì những pt sau ko chạy.
  }
  //bước 3 - 2
  componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
    console.log('phương thức cpnWillUp ');
    /*
    - Chạy trước re-render nên cũng có thể dùng để tính toán lại state hoặc props.
    */
  }
  //bước 3 - 4
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log('phương thức cpnDidUp ');
    // chạy sau khic cpn re-render, các phần từ của cpn được gắn vào dom.
    // => có thể dùng để tương tác với Dom.
    
  }

  //-----------------------


  //tạo phương thức remove khỏi dom
  handleRemove  = () => {
    this.setState({
      isAtive :! this.state.isAtive
    })
  }


  render() {
    // bài 5 giá trị khởi tạo cho state
    let statusValue:string = 'Open'
    //bước 2  - 2
    //bước 3  - 3
    console.log('Cpn bắt đầu re-render.');
    // không được setState ở đây, vì sao?
    //==> nếu làm thì render liên tục ==> vô hạn.
    return (
    <>
      {/* tạo class cpn.
        life cycle (vòng đời của 1 cpn => chỉ áp dụng với class cpn).

        -Trải qua 4 giai đoạn:
          1.Khởi tạo (initial)
            - Khởi tạo state.

          2.Thêm vào (mounting)
           - cung cấp các phương thức mặc định
            a.CpnwillMount
            b.CpnDidmount.
          - Sau khi khởi tạo xong thì chạy vào phương thức cpnWillmount()
            => cpn render => cpnDidmount().

          3.Thay đổi (update)
            - Xảy ra khi state hoặc props thay đổi thì chạy vào giai đoạn update.
            - Cung cấp các phương thức:
              + shouldComponentUpdate => phải return true | false.
                nếu không khai báo hàm thì mặc định là true.
              + componentWillUpdate =>

              + componentDidUpdate =>
          4.Gỡ bỏ (un-mounting)
              -xảy ra khi cpn bị xóa khỏi Dom.
              - cung cấp willUnmount

      -----------------------------------------------------------------------------------------------
    
      */}
      <p>count: {this.state.count}</p>
      <button onClick={this.handleClick}>Count</button>
      {this.state.isAtive ? <TestUnMount></TestUnMount> : ''}
      <button onClick={this.handleRemove}>remove</button>
      <h2>________________________________________________________________________________________________</h2>
      <Ex1></Ex1>
      <hr />
      <Ex2></Ex2>
      <hr />
      <Ex3></Ex3>
      <hr />
      <Ex4></Ex4>
      <hr />
    </>

    )
  }
}

