import React from "react"
import Header from "../components/Header/Index.js"

export default function Index({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
