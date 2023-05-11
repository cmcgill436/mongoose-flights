const React = require("react");

class New extends React.Component {
  render() {
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    const defaultDeparture = oneYearFromNow.toISOString().substr(0, 16);

    return (
      <div>
        <h1>Book Your Next Flight</h1>
        <form action="/flights" method="POST">
          <label name="airport">Airport:</label>
          <select name="airport" defaultValue="SAN">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <br />
          Airline: <input type="text" name="airline" />
          <br />
          <br />
          Flight Number: <input type="number" name="flightNo" />
          <br />
          <br />
          Date:{" "}
          <input
            type="datetime-local"
            name="departs"
            defaultValue={defaultDeparture}
          />
          <br />
          <br />
          <input type="submit" value="Add Flight" />
        </form>
      </div>
    );
  }
}

module.exports = New;
