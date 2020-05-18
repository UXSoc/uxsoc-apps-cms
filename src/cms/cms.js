import React from "react"
import CMS, { init } from "netlify-cms-app"
import CSSInjector from "../components/CSSInjector"
// import WysiwygComponent from "../components/wysiwyg/WysiwygComponent"
// import WysiwygPreviewComponent from "../components/wysiwyg/WysiwygPreviewComponent"
import HomePagePreview from "./preview-templates/HomePagePreview"
import ApplyPagePreview from "./preview-templates/ApplyPagePreview"

// Manually initialize CMS
// if (process.env.GATSBY_IS_CMS === 'true') {
//     init()
// }

init()

// CMS.registerWidget("wysiwyg", WysiwygComponent, [WysiwygPreviewComponent])

CMS.registerPreviewTemplate("home", props => (
  <CSSInjector>
    <HomePagePreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate("apply", props => (
  <CSSInjector>
    <ApplyPagePreview {...props} />
  </CSSInjector>
))


