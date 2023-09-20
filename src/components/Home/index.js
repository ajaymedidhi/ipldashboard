import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeam: []}

  componentDidMount() {
    this.getIplTeam()
  }

  getIplTeam = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImgUrl: eachItem.team_image_url,
    }))
    this.setState({iplTeam: formattedData})
  }

  render() {
    const {iplTeam} = this.state

    return (
      <div className="home-container">
        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="item-container">
          {iplTeam.map(item => (
            <TeamCard teamDetails={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
