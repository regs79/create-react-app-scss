import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button } from 'reactstrap'
import { Switch, Route, Link } from 'react-router-dom'
import WindowEvent from 'components/WindowEvent'
import cn from 'classnames'
import Card from 'components/Card'
import Hero from 'components/Hero'
import Menu from 'components/Menu'
import styles from './Home.scss'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.handleSayHello = this.handleSayHello.bind(this)
  }

  handleSayHello() {
    this.props.sayHello(2)
  }

  render() {
    const { scrollTop } = this.props
    return (
       <div>
         <Menu />
         <div className={cn('container', styles.homeBody, { [styles.fixed]: scrollTop > 60 })}>
           <div className={styles.articles}>
             <div className="row clear">
               <div className="col-12 col-6-l no-padding-right">
                 <Card />
               </div>
               <div className="col-12 col-6-l no-padding-right">
                 <Card />
               </div>
               <div className="col-12 col-6-l no-padding-right">
                 <Card />
               </div>
               <div className="col-12 col-6-l no-padding-right">
                 <Card />
               </div>
               <div className="col-12 col-6-l no-padding-right">
                 <Card />
               </div>
               <div className="col-12 col-6-l no-padding-right">
                 <Card />
               </div>
               <div className="col-12 col-6-l no-padding-right">
                 <Card />
               </div>
             </div>
           </div>
         </div>
       </div>
    );
  }

}

Home.propTypes = {
  hello: PropTypes.string,
  handleSayHello: PropTypes.func,
}

Home.defaultProps = {
  hello: null,
  handleSayHello: null,
}

export default WindowEvent(Home)
