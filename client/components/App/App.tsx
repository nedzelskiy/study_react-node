import * as React from 'react';
import Button from '../Button/Button';

interface Props {
  isTitle?: boolean;
  title?: string;
}

interface State {
  counter: number;
}

// https://habr.com/ru/post/358090/
class App extends React.Component<Props, State> {
  static defaultProps = {
    isTitle: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  onClickHandler() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  componentDidMount() {
    console.log('I mounted!');
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    return true;
  }

  renderButton() {
    if (this.state.counter < 3) {
      return (
        <Button
          title="Click on me!"
          onClick={this.onClickHandler}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <div className="app">
        {this.state.counter}
        <br />
        {this.renderButton()}
      </div>
    );
  }
}

export default App;
