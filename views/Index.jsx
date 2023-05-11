const React = require("react");
const moment = require("moment");

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div>
        <h1>MongooseFlights </h1>
        <a href="/flights/new">Book a Flight!</a>

        <ul>
          {flights.map((flight, x) => {
            // console.log(flight);

            return (
              <li key={x}>
                <a href={`/flights/${flight._id}`}>
                  {flight.airline}
                  {"      "}
                  {moment(flight.departs).format("ddd MM/DD/YYYY, hh:mm a")}
                </a>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
