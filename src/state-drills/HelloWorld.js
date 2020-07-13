import React from 'react';

class HelloWorld extends React.Component {
        state = {
            who: "world"
        };

render(){
    return (
    <div>
    <button onClick={() => this.setState({ who: 'Friend' })}>Friend</button>
    <button onClick={() => this.setState({ who: 'World' })}>World</button>
    <button onClick={() => this.setState({ who: 'React' })}>React</button>
    <p>Hello, {this.state.who}!</p>
    </div>
    )
}
}


export default HelloWorld