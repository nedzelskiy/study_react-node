import * as React from 'react';

interface Props {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

class Button extends React.Component<Props> {
  componentWillUnmount(): void {
    console.log('I will be unmounted!');
  }

  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.title}</button>
    );
  }
}

export default Button;
