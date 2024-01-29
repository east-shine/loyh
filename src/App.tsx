import React from 'react'
import Layout from './components/Layout/Layout'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Feature from './components/Feature'
import Partner from './components/Partner'

function App() {
  return (
    <>
      <Layout>
        <About />
        <Feature />
        <Roadmap />
        <Partner />
      </Layout>
    </>
  )
}

export default App
