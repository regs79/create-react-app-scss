import React from 'react'
// import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Navbar.scss'

export const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav className="bg-light">
        <div className="container">
          <p className="p-2 text-center">FREE DELIVERY AUSTRALIA WIDE ON ALL CUSTOM MADE BLINDS</p>
        </div>
      </nav>
      <nav>
        <div className="container">
          <div className="d-flex justify-content-between bd-highlight mb-3">
            <div className="p-2 bd-highlight d-flex align-items-center">
              <h4>1300 055 888</h4>
            </div>
            <div className="p-2 bd-highlight d-flex align-items-center">
              <img src="https://www.blindscity.com.au/wp-content/uploads/2017/11/blindscityCHRISTMASS_logo-web.png" alt="LOGO" className={cn('img-fluid', styles.logo)} />
            </div>
            <div className="p-2 bd-highlight d-flex align-items-center">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="/" className="btn btn-link">
                    My Account
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/" className="btn btn-primary">
                    Cart <span className="badge badge-danger">1</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className={styles.navbar}>
        <div className="container d-flex justify-content-between p-2">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">DIY PRODUCTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">FULLY INSTALLED </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">GALLERY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">BLOG</a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">GUIDE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
}

export default Navbar
