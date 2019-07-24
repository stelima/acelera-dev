import React from 'react';
import Title from './components/title';
import Text from './components/text';
import Content from './components/content';

import './App.css';

class App extends React.Component {

  state = {
    text: 'Numero de clicks 0',
    title: 'Meu titulo',
    numberOfClicks: [0]
  }

  handleClickButton() {
    const lastIndex = this.state.numberOfClicks.length - 1;
    const lastValue = this.state.numberOfClicks[lastIndex];
    this.setState({
      numberOfClicks: this.state.numberOfClicks.concat
      (lastValue + 1)
    });
  }

  render() {
    return (
      <div>
        <p>
          {this.state.numberOfClicks.map((click) => {
            return <p>{`Número de clicks ${click}`}</p>
          })}
        </p>
        <Text text={this.state.title} />
        <Text text={this.state.text} />
        <div>
          <button onClick={() => this.handleClickButton()} >Mudar State</button>
        </div>
        <Title></Title>
        <Content></Content>
      </div>
    );
  }
}

export default App;
