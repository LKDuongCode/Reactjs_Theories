import React, { Component } from 'react'
interface Company{
    name:string;
    status:boolean;
}
export default class Ex3 extends Component<any,Company> {
    constructor(props:Company) {
        super(props);
        this.state = {
            name:'Rikkei Academy',
            status:true,
        }
    }

    handleClick = () =>{
      console.log('click');
      this.setState({
        status: !this.state.status,
      })
      if(this.state.status === true){
        this.setState({
          name:'Rikkei Soft'
        })
      }
      else{
        this.setState({
          name:'Rikkei Academy'
        })
      }
      console.log(this.state.status);
    }
  render() {
    
    return (
      <>
      <h2>home work 3:</h2>
      <p>Company : {this.state.name}
      </p>
      <button onClick={this.handleClick}>Change State</button>
      </>
    )
  }
}
