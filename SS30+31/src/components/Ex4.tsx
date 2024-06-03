import React, { Component } from 'react'
interface Props {
    slogan:string;
}
export default class Ex4 extends Component<any,Props> {
    //tạo một state
    constructor(props:Props) {
        super(props);
        this.state = {
            slogan:'Học code để đi làm!',
        };
    }

    //sưk kiện click
    handleClick = () => {
        console.log('click');
        this.setState({
            slogan:'Học code sẽ thành công. Cố lên!',
        })
    }
    //sự kiện chặn
    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<Props>, nextContext: any): boolean {
        return false;
    }
  render() {
    return (
      <>
        <h2>home work 4</h2>
        <p>Slogan: {this.state.slogan}</p>
        <button onClick={this.handleClick}>Change State</button>
      </>
    )
  }
}
