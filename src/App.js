import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      id: "",
      dataa: ""

    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => this.setState({ title: data.title }));
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitId = () => {
    const post = {
      plzid: this.state.id,
    };

    fetch("http://localhost:3001/api/idplz", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          id: json.text,
        });
      });
  };
  onCall = () => {
    fetch("http://localhost:3001/api/callbody", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          dataa: json.body,
        });
      });
  };
  render() {
    return (
      <div>
        <div>
          {this.state.title ? <h1>{this.state.title}</h1> : <h1>loading...</h1>}
        </div>

        <div>
          <input onChange={this.handleChange} name="id" />
          <button onClick={this.submitId}>Submit</button>
          <h1>{this.state.id}</h1>
        </div>
        <div>
          <br /><br /><br /><br /><br />
          <h2>데이터가져오기</h2>
          <h3>{this.state.dataa}</h3>
          <button onClick={this.onCall}>가져오기</button>
        </div>
      </div>
    );
  }
}

export default App;