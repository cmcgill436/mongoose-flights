const React = require("react");

class Edit extends React.Component {
  render() {
    const flight = this.props.flights;
    console.log(flight, "this is flight");
    const destination = this.props.flights.destination;
    console.log(destination[0]);
    return (
      <form action={`/flights/${flight._id}?_method=PUT`} method="POST">
        Airport: <label name="airport">Airport:</label>
        <select name="airport" defaultValue="SAN">
          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>
        </select>
        Arrival Date:{" "}
        <input type="Date" name="arrival" defaultValue={flight.arrival} />
        <input type="submit" value="Submit Changes" />
      </form>
    );
  }
}

module.exports = Edit;
