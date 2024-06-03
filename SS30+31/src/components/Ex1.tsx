import React, { Component } from 'react'
interface User{
    name:string;
}
export default class Ex1 extends Component<any,User> {
    constructor(props:User) {
        super(props);
        this.state = {
            name:'Duong',
        }
    }
    componentWillMount(): void {
        this.setState({
            name:'Le Khanh Duong',
        })
    }
  render() {
    return (
      <>
        <h2>home work 1:</h2>
        <p>My name: {this.state.name}</p>
      </>
    )
  }
}
