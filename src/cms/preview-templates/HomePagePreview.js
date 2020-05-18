import React from "react"
import { HomePageTemplate } from "../../templates/home-page"


const getHeroSection = ({ entry, getAsset }) => {
  return {
    title: entry.getIn(["data", "heroSection", "title"]),
    description: entry.getIn(["data", "heroSection", "description"]),
  }
}

const HomePagePreview = ({ entry, getAsset }) => {
  const tmpDepartments = entry.getIn(["data", "departmentsSection"])
  const departmentsSection = tmpDepartments ? tmpDepartments.toJS() : []

  return (
    <HomePageTemplate
      heroSection={getHeroSection({ entry, getAsset })}
      departmentsSection={departmentsSection}
    />
  )
}

export default HomePagePreview
