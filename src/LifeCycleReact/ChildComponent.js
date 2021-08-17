import React, { Component } from "react";

export default class ChildComponent extends Component {

  static getDerivedStateFromProps(newProps, currentState){
    console.log('getDerivedStateFromProps_Child');
    return null;
  }

  shouldComponentUpdate(newProps, newState){
    console.log('shouldComponentUpdate_Child')
    if(newProps.number !== this.props.number){
      return true;
    }
    return false;
  }

  render() {
    console.log("Render Child Component...");
    return (
      <div className= "d-flex justify-content-between">
        <div className="card" style={{ width: "30%" }}>
          <img
            src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            b5
          </div>
        </div>
        <div className="card" style={{ width: "30%" }}>
          <img
            src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            b5
          </div>
        </div>
        <div className="card" style={{ width: "30%" }}>
          <img
            src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            b5
          </div>
        </div>
      </div>
    );
  }
  
  componentWillUnmount(){
      console.log('componentWillUnmount')
  }
}
