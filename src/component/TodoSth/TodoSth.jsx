import React, { Component } from 'react';

class TodoSth extends Component {

  componentDidMount(){
    fetch("https://b4dd-118-71-194-2.ap.ngrok.io/github", {
      "method": "POST",
      mode: 'no-cors',
      "headers": {
        "x-rapidapi-host": "b4dd-118-71-194-2.ap.ngrok.io",
        "x-rapidapi-key": "apikey",
        "content-type": "application/json",
        "accept": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      "body": JSON.stringify({
        // name: this.state.name,
        // notes: this.state.notes
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        Hello from TodoSth
      </div>
    );
  }
}

export default TodoSth;
