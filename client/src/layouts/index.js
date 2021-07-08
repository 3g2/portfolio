import React from "react"
import Header from "../components/Header/Index.js"

export default function Index({ children }) {
  return (
    <div style={{ margin: `0 auto`, padding: `0 1rem` }}>
      <Header />
      {children}
    </div>
  )
}
