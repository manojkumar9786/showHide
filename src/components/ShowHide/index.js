// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: true, isLastName: true}

  onFirstName = () => {
    this.setState(prevState => ({
      isFirstName: !prevState.isFirstName,
    }))
  }

  onLastName = () => {
    this.setState(prevState => ({
      isLastName: !prevState.isLastName,
    }))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    // const firstNameClass = isFirstName ? 'd-block' : 'd-none'
    // const lastNameClass = isLastName ? 'd-block' : 'd-none'
    // const firstName = isFirstName ? <p>Joe</p>
    // const lastName = isLastName ? <p>Jonas</p>

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="btn-container">
          <button className="btn" type="button" onClick={this.onFirstName}>
            Show/Hide Firstname
          </button>
          <button className="btn" type="button" onClick={this.onLastName}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="name-container">
          {isFirstName && <p className="name">Joe</p>}
          {isLastName && <p className="name">Jonas</p>}
        </div>
      </div>
    )
  }
}

export default ShowHide
