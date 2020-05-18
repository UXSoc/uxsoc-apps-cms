import React from 'react'
import Position from '../Position'
import './style.css'

const Department = ({ department }) => (
  <div className="dept-panel">
    <div className="department-container">
      <header className="department-main-header">{department.title}</header>
      <p>{department.description}</p>
      <div className="department-secondary-container">
        <header className="department-secondary-header">{department.type}</header>
      </div>
      {
        department.positions.map((position, index) => <Position title={position.title} description={position.description} key={index} />)
      }
      {/* <div className="department-secondary-container">
        <header className="department-secondary-header">DEPARTMENT PROJECTS AND INITIATIVES</header>
      </div>
      <div className="department-info-container">
        <div class="department-info-card">
          <header className="department-information-header">UX University</header>
          <p>A 3-week design course and case competition created to
          equip participants with the right skills, tools, and mindset to solve
          pressing issues in the community through user experience design.
                No experience needed - only the will and passion to learn!</p>
        </div>
        <div className="department-info-card">
          <header className="department-information-header">UX & Chill</header>
          <p>As part of our goal to enrichen the organization’s mentorship culture,
          UXDC will be hosting monthly workshops that caters to fuel our members’
          interest and knowledge about UX design, and to teach them the design thinking
                process from the ground up.</p>
        </div>
        <div className="department-info-card">
          <header className="department-information-header">Monthly Workshops</header>
          <p>UXSoc’s annual flagship event that aims to promote UX, its use, and impact to
          various demographics by allowing people from the design industry to share their
                knowledge and expertise. This year, we’re holding a 1-day design conference and workshop!</p>
        </div>
        <div className="department-info-card">
          <header className="department-information-header">UXDC Manual and Resource Library</header>
          <p>A design and consultancy manual will be shared with the officers in order to
          serve as a guide and reference for future projects. A design resource library
                will also be shared, in case our members want to read up and learn at their own pace!</p>
        </div>
      </div> */}
    </div>
  </div>
)

export default Department;