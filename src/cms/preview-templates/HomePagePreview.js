import React from "react"
import { HomePageTemplate } from "../../templates/home-page"


const getHeroSection = ({ entry, getAsset }) => {
  return {
    title: entry.getIn(["data", "heroSection", "title"]),
    description: entry.getIn(["data", "heroSection", "description"]),
  }
}

// const getDepartmentsSection = ({ entry, getAsset }) => {
//   const tmpDepartments = entry.getIn(["data", "departmentsSection"])
//   const departmentsSection = tmpDepartments ? tmpDepartments.toJS() : []
//   return departmentsSection;
// }

const HomePagePreview = ({ entry, getAsset }) => {

  return (
    <HomePageTemplate
      heroSection={getHeroSection({ entry, getAsset })}
      backgroundColor={entry.getIn(["data", "backgroundColor"])}
      primaryColor={entry.getIn(["data", "primaryColor"])}
      secondaryColor={entry.getIn(["data", "secondaryColor"])}
      secondaryColor={entry.getIn(["data", "secondaryColor"])}
    // departmentsSection={getDepartmentsSection({ entry, getAsset })}
    />
  )
}

export default HomePagePreview
