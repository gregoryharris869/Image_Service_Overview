import type { ReactNode } from "react"

const ReactWrapper = ({ children }:{children:ReactNode}) => {
  return (
    <div>
      <p>inside wrapper</p>
      {children}
    </div>
  )
}

export default ReactWrapper