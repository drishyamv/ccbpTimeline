import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {timeLineItem} = props
  const {courseTitle, description, duration, tagsList} = timeLineItem

  const getTags = eachTag => {
    const {id, name} = eachTag

    return (
      <li className="tag-item" key={id}>
        <p className="tag-name">{name}</p>
      </li>
    )
  }

  return (
    <div className="course-card">
      <div className="course-item">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="timer-card">
          <AiFillClockCircle className="timer-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tag-card">
        {tagsList.map(eachItem => getTags(eachItem))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
