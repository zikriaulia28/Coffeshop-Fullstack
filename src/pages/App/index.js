import logo from '../../assets/logo.svg';
import '../../styles/app.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import withNavigate from '../../utils/wrapper/withNavigate'
import { getUsers } from '../../utils/https/placeholder'

class App extends Component {
  // state merupakan variabel lokal dari class {object}
  // state properti dari app
  // jika state berubah component diperbaharui dom nya (rerender)
  // untuk mengubah state gunakan method setState
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      address: "Jakarta",
      age: this.props.age,
      data: [],
    };
    this.controller = new AbortController;
  }

  // componentDidMount() {
  // bisa jalankan fetch
  // fetchUsers(this.controller)
  //   .then((res) => {
  //     if (!res.ok) throw res.status
  //     return res.json();
  //   })
  //   .then(data => {
  //     this.setState({
  //       data,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err.message)
  //   });
  //   getUsers(this.controller, ({ data }) =>
  //     this.setState({
  //       data,
  //     })), (err => console.log(err))
  // }

  async componentDidMount() {
    try {
      const response = await getUsers(this.controller);
      if (response && response.data) {
        this.setState({ data: response.data });
      }
    } catch (error) {
      console.error(error);
    }
  }


  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState);
  // }

  componentWillUnmount() {
    // this.controller.abort();
  }

  handleNavigate(to) {
    this.props.navigate(to)
  }

  changeCounter = () => {
    this.setState({
      counter: 2,
    });
  }
  render() {
    // console.log(this.state.counter);
    // if (this.state.data.length === 0) {
    //   return (
    //     <div>
    //       <p>Loading</p>
    //     </div>
    //   );
    // }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <a
            className="App-link"
            href={this.props.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* navigasi langsung */}
          <Link to="/home" >Home</Link>
          <div>
            <p>Counter: {this.state.counter}</p>
            <button onClick={this.changeCounter} >Change Counter</button>
          </div>
          <div>
            {/* navigasi menggunakan logic */}
            <button onClick={() => this.handleNavigate("/home")} >View CV</button>
          </div>
        </header>
      </div>
    )
  }
}

const AppWithNavigate = withNavigate(App);
export default AppWithNavigate;
