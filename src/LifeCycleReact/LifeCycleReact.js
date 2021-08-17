import React, { Component } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import ChildComponent from './ChildComponent'

export default class LifeCycleReact extends Component {

    state = {
        number: 1
    }
    // Được gọi khi component được sử dụng
    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps');
        return null;
    }

    // Được gọi khi setState hoặc props thay đổi
    shouldComponentUpdate(newProps, newState){
        // return true chạy tiếp các lifecycle còn lại, false thì dừng
        // lại, không chạy các lifecycle còn lại 
        return true;
    }

    render() {
        console.log('Render Parent component...')
        return (
            <div>
                <h2>Parent Component</h2>
                <span>Number: {this.state.number}</span>
                <button className = "btn btn-success" onClick = {() => {
                    this.setState({
                        number: this.state.number+1
                    })
                }}>+</button>
                <ChildComponent number = {this.state.number}/>
            </div>
        )
    }
    // Được gọi sau render và chỉ gọi 1 lần duy nhất khi ở trạng thái mounting
    componentDidMount(){
        console.log('componentDidMount')
    }

    // Lần đầu render không gọi, chỉ gọi khi setState hoặc thay đổi props
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate')
    }
}
