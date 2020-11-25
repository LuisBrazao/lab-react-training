import React from "react";

class LikeButton extends React.Component {
  colors = ['purple','blue','green','yellow','orange','red'];
  state = {
    counter: 0,
    color: "blue"
  };
  getRandomColor(){
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
  handleIncrementClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      color: this.getRandomColor()
    });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleIncrementClick} style={{backgroundColor: this.state.color}}>{this.state.counter} Likes</button>
      </div>
    );
  }
}

export default LikeButton;
