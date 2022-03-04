import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    // componentDidMount() {
    //     alert('Ya estoy inicializada')
    // }

    // componentDidUpdate(nextProps, nextState) {
    //     alert('He cambiado')
    // }

    upAge = () => {
        this.setState({ age: this.state.age + 1 })
    }

    render() {
        const { name } = this.props;
        
        return (
            <>
                {console.log(this)}
                <h1>Soy el componente Home</h1>
                <h3>Chao {name}</h3>
                <h1>Mi edad es: {this.state.age}</h1>
                <button onClick={this.upAge}>Subir edad</button>
            </>
        );
    }
}

export default Home;