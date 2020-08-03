import React from "react"

import SEO from "../components/seo"

const Awards: React.FC = () => (
  <>
    <SEO title="Awards" />
    <h1>Osiągnięcia</h1>
    <table>
      <thead>
        <tr>
          <th>Zawody</th>
          <th>Zawodnik</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Zawody</td>
          <td>Zawodnik</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
      </tbody>
    </table>
  </>
)

export default Awards
