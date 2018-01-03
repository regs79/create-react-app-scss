/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import times from 'lodash/times'
import { Container, Button } from 'reactstrap'
import { Switch, Route, Link } from 'react-router-dom'

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
       <div>
         {this.renderSliders()}
         <div className="container">
           <div className="row mt-4">
             {times(10, (key) => {
               return (
                 <div className="col-6 col-lg-3 mb-4" key={key}>
                   {this.renderHomeProducts()}
                 </div>
               )
             })}
           </div>
         </div>
       </div>
    );
  }

  renderHomeProducts() {
    return (
      <div className="card">
        <img className="card-img-top" src="https://www.blindscity.com.au/wp-content/uploads/2017/09/Venetians.png" alt="Card image cap" />
        <div className="card-body text-center">
          <h6 className="card-title">Venetian Blinds</h6>
          <a href="/" className="btn btn-primary btn-sm">SHOP NOW</a>
        </div>
      </div>
    )
  }

  renderSliders() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.blindscity.com.au/wp-content/uploads/2017/12/nEWyEAR_banner-2.png" alt="First slide" />
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://www.blindscity.com.au/wp-content/uploads/2017/02/zipmoney-banner-interest-free.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.blindscity.com.au/wp-content/uploads/2017/12/BOXING-DAY-BANNER.png" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }

}

Home.propTypes = {
}

Home.defaultProps = {
}

export default Home
