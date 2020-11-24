import React from "react"

class ClickablePicture extends React.Component {
  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getImageName = () => this.state.open ? this.props.img : this.props.imgClicked

  render() {
    const imageName = this.getImageName();
    return (
      <div>
        <img style={{maxWidth: '50px'}} src={imageName} onClick={this.toggleImage} />
      </div>
    );
  }
}

export default ClickablePicture