'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Нравится!!
      </button>
    );
  }
}

const domContainer = document.querySelector('#reactContent1');
ReactDOM.render(e(LikeButton), domContainer);
