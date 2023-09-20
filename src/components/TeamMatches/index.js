import {Component} from 'react'

const teamMatchUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  componentDidMount() {
    this.getLateshTeamMatches()
  }

  getLateshTeamMatches = async () => {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>Hello India</h1>
      </div>
    )
  }
}

export default TeamMatches
