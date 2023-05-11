const React = require("react");
const moment = require("moment");

class Show extends React.Component {
  render() {
    const flight = this.props.flights;
    const destination = flight.destination;
    console.log(flight, "IM HERE");
    return (
      <div>
        <h1>Your Flight Itenerary</h1>
        <p>Airport: {flight.airport}</p>
        <p>Airline: {flight.airline}</p>
        <p>Flight #: {flight.flightNo}</p>
        <p>
          Departure time:{" "}
          {moment(flight.departs).format("ddd, MM/DD/YYYY, hh:mm a")}
        </p>
        <a href={`/flights/${flight._id}/edit`}>Edit Flight</a>
        <br />
        <h2>Destination:</h2>
        {destination.map((d) => {
          return (
            <div>
              {d.airport}
              {d.arrival ? d.arrival.toISOString() : ""}
            </div>
          );
        })}
        <form
          action={`/flights/${flight._id}/destination?_method=PUT`}
          method="POST"
        >
          <label name="airport">Airport:</label>
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <br />
          Arrival Date:
          <input type="datetime-local" name="arrival" />
          <br />
          <input type="submit" value="Add Destination" />
        </form>
        <br />
        <br />
        <a href="/flights">Back</a>
      </div>
    );
  }
}

module.exports = Show;
