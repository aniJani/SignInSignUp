import React from 'react'
import Sidenav from './HomePageComponents/Sidenav'
import Header1 from './HomePageComponents/Header1'


function HomePage() {
  return (
    <div>
      <nav>
            <Sidenav />
        </nav>
        <div className=  'bg-sky-600 overflow-y-auto'>
            <Header1 />
        </div>
    </div>
  )
}

export default HomePage