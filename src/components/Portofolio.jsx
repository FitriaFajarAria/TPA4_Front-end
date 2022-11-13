import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {FaSchool} from 'react-icons/fa'


const Portofolio = () => {
  return (
    <div className="experience">

      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007-2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}>
          <h3 className="vertical-timeline-element-title">SD Negeri Paya Rahat</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}>
          <h3 className="vertical-timeline-element-title">SMP Negeri 2 Bendahara</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaSchool />}>
          <h3 className="vertical-timeline-element-title">SMK Negeri 1 Bendahara</h3>
          <p>Teknik Komputer dan Jaringan</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020-Sekarang"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaSchool />}>
          <h3 className="vertical-timeline-element-title">Universitas Malikussaleh</h3>
          <p>Teknik Informatika</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  )
}

export default Portofolio