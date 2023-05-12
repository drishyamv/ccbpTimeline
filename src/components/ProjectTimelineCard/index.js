import {AiFillCalendar} from 'react-icons/ai'
// import {Link} from 'react-router-dom'

import './index.css'

const ProjectTimelineCard = props => {
  const {timeLineItem} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = timeLineItem

  return (
    <div className="project-card">
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="project-heading-card">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="calender-card">
          <AiFillCalendar className="calender-icon" />
          <p className="duration-para">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} target="_self" className="view-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
