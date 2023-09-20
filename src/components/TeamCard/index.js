import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  console.log(teamDetails)

  const {id, name, teamImgUrl} = teamDetails

  return (
    <li className="list-cont">
      <Link to={`team-matchs/${id}`}>
        <img src={teamImgUrl} alt={name} className="logo-img" />
        <p className="heading">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
