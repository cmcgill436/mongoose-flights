const React = require("react");

class Index extends React.component {
  render() {
    const { flight } = this.props;
    return (
      <div>
        <h1>Flights Index Page</h1>
        <h2></h2>
      </div>
    );
  }
}

module.exports = Index;
