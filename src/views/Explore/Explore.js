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
import WindowEvent from 'components/WindowEvent'
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
          <div className="row mt-3">
            <div className="col-12 col-md-3 mb-3">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Sydney, NSW
                  <span className="badge badge-primary badge-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Melbourne, VIC
                  <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Queenlands, NT
                  <span className="badge badge-primary badge-pill">1</span>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-7">
              <div className="row">
                <div className="col-12">
                  Filter
                </div>
                <div className="col-12">
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
                                    <span>{faker.name.findName()}</span>
                                  </a>
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
                            <div className="col-12 mt-2 pointer" title="Double click to open this post">
                              <p className="noselect" onDoubleClick={() => { alert('onDoubleClick')}}>{faker.lorem.sentences()}</p>
                            </div>
                            <div className="col-10">
                              Like - Comment - Share
                            </div>
                            {/* <div className="col-12 col-md-2">
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
                            </div> */}
                          </div>
                        </section>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <small>Ads</small>
              <div className="card mb-3">
                <img className="card-img-top" src={'https://source.unsplash.com/random/120x90'} alt="Card image cap" />
                <div className="card-body p-1">
                  <p className="card-text small text-center">
                    <a href="">{faker.lorem.sentence()}</a>
                  </p>
                </div>
              </div>
              <div className="card mb-3">
                <img className="card-img-top" src={'https://source.unsplash.com/random/120x90'} alt="Card image cap" />
                <div className="card-body p-1">
                  <p className="card-text small text-center">
                    <a href="">{faker.lorem.sentence()}</a>
                  </p>
                </div>
              </div>
              <div className="card mb-3">
                <img className="card-img-top" src={'https://source.unsplash.com/random/120x90'} alt="Card image cap" />
                <div className="card-body p-1">
                  <p className="card-text small text-center">
                    <a href="">{faker.lorem.sentence()}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

export default WindowEvent(Home)
