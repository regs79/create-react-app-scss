import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Hero from 'components/Hero'
import Sliders from 'components/Sliders'
import Card from 'components/Card'
import FeatureCard from 'components/FeatureCard'
import LeadTitle from 'components/LeadTitle'
import times from 'lodash/times'
import MediaQuery from 'components/MediaQuery'
import SaveTo from 'components/SaveTo'

import styles from './Explore.scss'

class Home extends React.Component {
  render() {
    return (
      <div className="container mt-3">
        <section className="mb-5 section-padding-20">
          <LeadTitle lead={`กระทู้ไฮไลท์`} sublead={`4 กระทู้ติดอันดับทั้งหมด`}/>
          <MediaQuery down="sm">
            <div className="row">
              <div className="col-sm-12 col-md-6 pl-2 pr-2">
                <Card showTag headline={`AUD 145 / สัปดาห์`} title={`ห้องว่างใกล้เมือง สำหรับผู้หญิงเท่านั้น`} subtitle={`~1.4k from Melbourne CBD`} />
              </div>
            </div>
          </MediaQuery>
          <MediaQuery only="md">
            <div className="row">
              {times(3, () => (
                <div className="col pl-2 pr-2">
                  <Card showTag headline={`AUD 145 / สัปดาห์`} title={`ห้องว่างใกล้เมือง สำหรับผู้หญิงเท่านั้น`} subtitle={`~1.4k from Melbourne CBD`} />
                </div>))}
            </div>
          </MediaQuery>
          <MediaQuery up="lg">
            <div className="row">
              {times(4, () => (
                <div className="col pl-2 pr-2">
                  <Card showTag headline={`AUD 145 / สัปดาห์`} title={`ห้องว่างใกล้เมือง สำหรับผู้หญิงเท่านั้น`} subtitle={`~1.4k from Melbourne CBD`} />
                </div>))}
            </div>
          </MediaQuery>
        </section>
        <div>
          <LeadTitle lead={`กระทู้ทั้งหมด`} sublead={`1.3k กระทู้ พูดคุย แชร์ประสบการณ์ ทั่วไป`}/>
          <div className="row">
            <div className="col-12 col-md-4">
              Sidebar
            </div>
            <div className="col-12 col-md-8">
              <ul className="list-unstyled">
                {
                  times(10, () => (
                    <li className="">
                      <section className="my-4 section-padding-12">
                      <div className="row">
                        <div className="col-3 col-md-1">
                          <img src={faker.internet.avatar()} alt="..." className="img-thumbnail rounded-circle" />
                        </div>
                        <div className="col nopadding align-self-center">
                          <div className="row">
                            <div className="col-12">
                              Tawan
                            </div>
                            <div className="col-12">
                              13 minutes ago
                            </div>
                            <SaveTo className={styles.saveto} />
                          </div>
                        </div>
                        <div className="col-12 mt-2">
                          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                        <div className="col-12">
                          Like - Comment
                        </div>
                      </div>
                    </section>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

export default Home
