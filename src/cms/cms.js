import React from 'react'
import CMS, { init } from 'decap-cms-app'
import CSSInjector from '../components/CSSInjector'
import HomePagePreview from './preview-templates/HomePagePreview'
import ApplyPagePreview from './preview-templates/ApplyPagePreview'

// Manually initialize CMS
// if (process.env.GATSBY_IS_CMS === 'true') {
//     init()
// }
window.___loader = { enqueue: () => {}, hovering: () => {} }

init()

CMS.registerPreviewTemplate('index', props => (
  <CSSInjector>
    <HomePagePreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('apply', props => (
  <CSSInjector>
    <ApplyPagePreview {...props} />
  </CSSInjector>
))
