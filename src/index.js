import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
//     constructor(props){
//         super(props);
//     this.state = {Lat: null, errorMessage: ''};
//  }
    state = {Lat: null, errorMessage: ''};
    componentDidMount() {
        
            window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ Lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
    
            );
    }
        renderContent(){
            
            if(this.state.errorMessage && !this.state.Lat){
                    return <div>Error:{this.state.errorMessage}</div>
            }
            if (!this.state.errorMessage && this.state.Lat){
                return <SeasonDisplay lat ={this.state.Lat}></SeasonDisplay>
            }
            return <div><Spinner message="please accept location request" /></div>;
        }
    render() {
        return (
            <div className="border red">
            {this.renderContent()}
            </div>
        )
}
}

 

ReactDOM.render(<App />, document.querySelector('#root'));