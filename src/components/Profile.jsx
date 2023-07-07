import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Your constructor logic here
    console.log("Constructor called");
    this.state = {
        data:null,
        loading:true,
    }
  }

  componentWillUnmount(){
    console.log("Unmounted");
  }

  async componentDidMount(){
    console.log("Mounted");

    const response = await fetch("https://api.github.com/users/skyRocket23");
    const json = await response.json();
    this.setState({
        data:json,
        loading:false,
    })
    console.log(json);
  }

  render() {
    console.log("Rendered")
    const {loading,data} = this.state;
    if(loading){
        return null;
    }
    return (
      <div>
        <h1>Name: {data.login}</h1>
        <h1>BIO: {data.bio}</h1>
      </div>
    );
  }
}

export default MyComponent;
