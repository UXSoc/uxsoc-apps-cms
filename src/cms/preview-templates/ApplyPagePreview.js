import React from "react"
import { ApplyPageTemplate } from "../../templates/apply-page"

const ApplyPagePreview = ({ entry, getAsset }) => {
    return (
        <ApplyPageTemplate
            link={entry.getIn(["data", "link"])}
        />
    )
}

export default ApplyPagePreview
