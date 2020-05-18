import React from "react"
import Layout from "../components/layout"

const seo = {
  title: "Page Not Found",
  description: "Bell and Pedre is a Filipino skincare startup owned by the enterprising duo, Marlon Pedregosa and Dr. Robert Bell, Ph.D., that offers products that contain biocompatible ingredients that are deemed safe and effective by the Food and Drug Administration and are always “freshly made” and thus more potent.",
  keywords: "Skincare"
}

export default () => (
  <>
    <Layout seo={seo}>
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Page Not Found</h1>
      </main>
    </Layout>
  </>
)
