import React from 'react';

class Viewer extends React.Component {
  render() {
    if(this.props.selectedEmail) {
      return (
        <div>{this.props.selectedEmail.from}</div>
      )
    }
    else {
      return null;
    }
  }
}

export default Viewer;