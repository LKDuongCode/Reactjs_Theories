import React, { Component } from 'react'
interface Props{
    content:string;
}
export default class Ex2 extends Component<any,Props> {
    constructor(props:Props) {
        super(props);
        this.state = {
            content:'Component đã được mount !',
        }
    }
    componentWillMount(): void {
        console.log('Component đã được mount !');
    }
  render() {
    return (
      <>
        <h2>home work 2: </h2>
        <p>{this.state.content}</p>
      </>
    )
  }
}
