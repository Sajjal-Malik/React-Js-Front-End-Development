import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
        <main>
            {props.childer}
        </main>
        <footer>
            <p>All Copywright Rights Reserved</p>
        </footer>
    </Fragment>
  )
}

export default Layout
