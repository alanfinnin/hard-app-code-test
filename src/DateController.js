import React from 'react';
import DateTime from './DateTime.js';

class DateController extends React.Component {
	
	constructor(props){
		super(props);
		this.selections = []
	}
	
	handleSubmit = (event) => {
    event.preventDefault()
		if((this.inputNode.value).localeCompare("GMT") == 0){
			this.selections.push("Europe/London");
		}
		else if((this.inputNode.value).localeCompare("IST") == 0){
			this.selections.push("Europe/Dublin");
		}
		else if((this.inputNode.value).localeCompare("EST") == 0){
			this.selections.push("America/Panama");
		}
		else if((this.inputNode.value).localeCompare("CST") == 0){
			this.selections.push("America/Swift_Current");
		}
		else if((this.inputNode.value).localeCompare("PDT") == 0){
			this.selections.push("America/Los_Angeles");
		}
		else if((this.inputNode.value).localeCompare("EEST") == 0){
			this.selections.push("Europe/Kiev");
		}

		this.selections = (this.selections).sort()
		for(var i = 0; i < this.selections.length; i++){
			if(i != (this.selections.length)){
				if((this.selections[i]).localeCompare(this.selections[i+1]) == 0){
					this.selections.splice(i, 1);
				}
			}
		}
		this.forceUpdate()
		console.log((this.selections));
	}
	render() {
		var data = this.selections;
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<label>
					Timezone:
				<input
					type="text"
					name="timezone"
					ref={node => (this.inputNode = node)}
				/>
				</label>
				<button type="submit">Add</button>
			</form>
			<div>
				{data.map(function(d, i){
				 return (<li  key={i}>{d}<br></br><DateTime zone={d}></DateTime><br></br></li>)
			   })}
			</div>
		</div>
		);
	}
}

export default DateController;