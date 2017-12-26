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
                <Card
                  showTag
                  headline={`AUD 145 / สัปดาห์`}
                  title={`ห้องว่างใกล้เมือง สำหรับผู้หญิงเท่านั้น`}
                  subtitle={`~1.4k from Melbourne CBD`}
                  thumbnail={'https://source.unsplash.com/random/220x160'}
                />
              </div>
            </div>
          </MediaQuery>
          <MediaQuery only="md">
            <div className="row">
              {times(3, () => (
                <div className="col pl-2 pr-2">
                  <Card
                    showTag
                    headline={`AUD 145 / สัปดาห์`}
                    title={`ห้องว่างใกล้เมือง สำหรับผู้หญิงเท่านั้น`}
                    subtitle={`~1.4k from Melbourne CBD`}
                    thumbnail={'https://source.unsplash.com/random/220x160'}
                  />
                </div>))}
            </div>
          </MediaQuery>
          <MediaQuery up="lg">
            <div className="row">
              {times(4, () => (
                <div className="col pl-2 pr-2">
                  <Card
                    showTag
                    headline={`AUD 145 / สัปดาห์`}
                    title={`ห้องว่างใกล้เมือง สำหรับผู้หญิงเท่านั้น`}
                    subtitle={`~1.4k from Melbourne CBD`}
                    thumbnail={'https://source.unsplash.com/random/220x160'}
                  />
                </div>))}
            </div>
          </MediaQuery>
        </section>
        <div>
          <LeadTitle lead={`กระทู้ทั้งหมด`} sublead={`1.3k กระทู้ พูดคุย แชร์ประสบการณ์ ทั่วไป`}/>
          <div className="row">
            <div className="col-12 col-md-4">
              <ul className="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
            <div className="col-12 col-md-8">
              <ul className="list-unstyled">
                {
                  times(10, (key) => (
                    <li className="">
                      <section className={cn('section-padding-12', {
                        'my-4': key !== 0,
                      })}>
                      <div className="row no-gutters">
                        <div className="col-3 col-md-1">
                          <img src={faker.internet.avatar()} alt="..." className="img-thumbnail rounded-circle" width={60} height={60} />
                        </div>
                        <div className="col pl-4 align-self-center">
                          <div className="row">
                            <div className="nopadding col-12">
                              <a href="" className="text-primary font-weight-bold">
                                <span>Tawan</span>
                              </a>
                              <span className="ml-2 badge badge-warning">Gold Member</span>
                            </div>
                            <div className="nopadding col-12 text-muted">
                              <span className="badge badge-light">13 minutes ago</span>
                              <span className="ml-1 badge badge-light">Sydney, NSW</span>
                            </div>
                            <SaveTo className={styles.saveto} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mt-2">
                          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                        <div className="col-10">
                          Like - Comment - Share
                        </div>
                        <div className="col-12 col-md-2">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <img src={faker.internet.avatar()} alt="..." className="rounded-circle" width={24} height={24} />
                            </li>
                            <li className="list-inline-item">
                              <img src={faker.internet.avatar()} alt="..." className="rounded-circle" width={24} height={24} />
                            </li>
                            <li className="list-inline-item">
                              <img src={faker.internet.avatar()} alt="..." className="rounded-circle" width={24} height={24} />
                            </li>
                          </ul>
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
