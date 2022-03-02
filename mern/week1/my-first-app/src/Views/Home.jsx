import React, { Component } from 'react';


class Home extends Component {
    render() {
        const { name } = this.props;
        return (
            <>
                {console.log(this)}
                <h1>Soy el componente Home</h1>
                <h3>Chao {name}</h3>
            </>
        );
    }
}

export default Home;