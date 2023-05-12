import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const category = {id: 'PROJECT'}

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="time-line-container">
      <h1 className="my-journey-heading">
        MY JOURNEY OF <br />
        <span className="ccbp-heading">CCBP 4.0</span>
      </h1>
      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{primary: '#0967d2', secondary: '#ffffff'}}
        fontSizes={{title: '8rem'}}
        scrollable={{scrollbar: true}}
        slideShow
        slideItemDuration={1000}
      >
        {timelineItemsList.map(eachItem =>
          eachItem.categoryId === category.id ? (
            <ProjectTimelineCard key={eachItem.id} timeLineItem={eachItem} />
          ) : (
            <CourseTimelineCard key={eachItem.id} timeLineItem={eachItem} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
