import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

class DateTime extends React.Component {
	constructor(props) {
		super(props);
		this.zone = props.zone;
		//console.log(moment().format("MM ddd, YYYY HH:mm:ss a"));
		this.CurrentDate = moment();
		this.state = {
			time: this.CurrentDate.tz(props.zone)
			//time: new Date().toLocaleString(props.zone,)
		};
		//this.time = this.CurrentDate.tz(props.zone);
	}
	componentDidMount() {
		this.intervalID = setInterval(
		  () => this.tick(),
		  1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	tick() {
		this.setState({
			time: this.CurrentDate.tz(this.zone)
		});
	}
	render() {
    return (
      <Moment date={this.time}></Moment>
    );
	
  }
}
export default DateTime;