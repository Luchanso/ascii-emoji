import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.pre`
  margin: 10px auto;
  width: 500px;
`;

const Input = styled.input`
  margin: 100px 0 50px 0;
  width: 500px;
  height: 26px;
  font-size: 21px;
  padding: 5px;
  color: #333;
}
`;

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    import('./README.md')
      .then(readme => fetch(readme))
      .then(response => response.text())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <Content>
          <Input />
          <br />
          {data ? data : 'Loading...'}
        </Content>
      </div>
    );
  }
}

export default App;
