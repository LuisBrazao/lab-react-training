import React from "react";

class LikeButton extends React.Component {
  state = {
    counter: 0,
  };

  handleIncrementClick = () => {
    this.setState({
      counter: this.state.counter + 1,  
    });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleIncrementClick}>{this.state.counter} Likes</button>
      </div>
    );
  }
}

export default LikeButton;
