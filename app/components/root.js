import React from 'react'
import CitiesList from './CitiesList.jsx'
import LandmarksList from './LandmarksList.jsx'

const Root = () => {
  return (
    <div>
      <nav>Welcome!</nav>
      <main>
        <CitiesList />
        <LandmarksList />
      </main>
    </div>
  )
}

export default Root
