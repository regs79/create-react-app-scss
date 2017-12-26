import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Home.scss'
import Hero from 'components/Hero'
import Sliders from 'components/Sliders'
import Card from 'components/Card'
import FeatureCard from 'components/FeatureCard'
import LeadTitle from 'components/LeadTitle'
import times from 'lodash/times'
import MediaQuery from 'components/MediaQuery'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="container">
          <section className="mb-5 section-padding-20">
            <LeadTitle lead={`กระทู้แนะนำ`} link={'/'} />
            <div className="row">
              <div className="col-md-6 col-sm-12 pl-2 pr-2">
                <FeatureCard isShowPoster headline={`5 สุดยอดสถานที่ท่องเที่ยวในเมลเบิร์น Melbourne ออสเตรเลีย`} subheadline={`ในช่วงเดือนเมษายน เป็นช่วงที่อากาศที่ดีมากๆ ไม่หนาวหรือร้อนจนเกินไป เหมาะสำหรับการเที่ยวพักผ่อนสุดๆ ไปเลยค่ะ เมืองเมลเบิร์นมีสถานที่น่าสนใจมากมาย`} />
              </div>
              <div className="col-md-6 col-sm-12">
                <div className={styles.row}>
                  <div className="col-6 pl-2 pr-2 mb-4">
                    <Card headline={`AUD 45`} title={`หม้อสุกี้บาร์บีคิวรุ่น Otto PG-155`} subtitle={`~1.4k from Melbourne CBD`} />
                  </div>
                  <div className="col-6 pl-2 pr-2 mb-4">
                    <Card headline={`AUD 45`} title={`หม้อสุกี้บาร์บีคิวรุ่น Otto PG-155`} subtitle={`~1.4k from Melbourne CBD`} />
                  </div>
                  <div className="col-6 pl-2 pr-2 mb-4">
                    <Card headline={`AUD 45`} title={`หม้อสุกี้บาร์บีคิวรุ่น Otto PG-155`} subtitle={`~1.4k from Melbourne CBD`} />
                  </div>
                  <div className="col-6 pl-2 pr-2 mb-4">
                    <Card headline={`AUD 45`} title={`หม้อสุกี้บาร์บีคิวรุ่น Otto PG-155`} subtitle={`~1.4k from Melbourne CBD`} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-5 section-padding-20">
            <LeadTitle lead={`แนะนำที่พักมาใหม่`} link={'/'} />
            <MediaQuery down="sm">
              <div className="row">
                <div className="col-sm-12 col-md-6 pl-2 pr-2">
                  <Card showTag headline={`AUD 145 / สัปดาห์`} title={`ห้องว่างใกล้เมือง สำหรับผู้หญิงเท่านั้น`} subtitle={`~1.4k from Melbourne CBD`} />
                </div>
              </div>
            </MediaQuery>
            <MediaQuery only="md">
              <Sliders slidesToShow={3}>
                {times(6, () => (
                  <div className="col pl-2 pr-2">
                    <Card showTag headline={`AUD 145 / สัปดาห์`} title={`ห้องว่างใกล้เมือง สำหรับผู้หญิงเท่านั้น`} subtitle={`~1.4k from Melbourne CBD`} />
                  </div>))}
              </Sliders>
            </MediaQuery>
            <MediaQuery up="lg">
              <Sliders slidesToShow={4}>
                {times(8, () => (
                  <div className="col pl-2 pr-2">
                    <Card showTag headline={`AUD 145 / สัปดาห์`} title={`ห้องว่างใกล้เมือง สำหรับผู้หญิงเท่านั้น`} subtitle={`~1.4k from Melbourne CBD`} />
                  </div>))}
              </Sliders>
            </MediaQuery>
          </section>
          <section className="mb-5 section-padding-20">
            <LeadTitle lead={`แนะนำงานมาใหม่`} link={'/'} />
            <MediaQuery down="sm">
              <div className="row">
                <div className="col-sm-12 col-md-6 pl-2 pr-2">
                  <Card showTag subheadline={`AUD 154 / ชม`} headline={`ต้องการพ่อครัวผัด 1 ตำแหน่ง`} title={faker.company.companyName()} subtitle={`~1.4k from Melbourne CBD`} />
                </div>
              </div>
            </MediaQuery>
            <MediaQuery only="md">
              <Sliders slidesToShow={3}>
                {times(6, () => (
                  <div className="col pl-2 pr-2">
                    <Card showTag subheadline={`AUD 154 / ชม`} headline={`ต้องการพ่อครัวผัด 1 ตำแหน่ง`} title={faker.company.companyName()} subtitle={`~1.4k from Melbourne CBD`} />
                  </div>))}
              </Sliders>
            </MediaQuery>
            <MediaQuery up="lg">
              <Sliders slidesToShow={4}>
                {times(8, () => (
                  <div className="col pl-2 pr-2">
                    <Card showTag subheadline={`AUD 154 / ชม`} headline={`ต้องการพ่อครัวผัด 1 ตำแหน่ง`} title={faker.company.companyName()} subtitle={`~1.4k from Melbourne CBD`} />
                  </div>))}
              </Sliders>
            </MediaQuery>
          </section>
          <section className="mb-5 section-padding-20">
            <LeadTitle lead={`ซื้อ-ขาย`} link={'/'} />
            <MediaQuery down="sm">
              <div className="row">
                <div className="col-sm-12 col-md-6 pl-2 pr-2">
                  <Card showTag headline={`AUD 45`} title={`หม้อสุกี้บาร์บีคิวรุ่น Otto PG-155`} subtitle={`~1.4k from Melbourne CBD`} />
                </div>
              </div>
            </MediaQuery>
            <MediaQuery only="md">
              <Sliders slidesToShow={3}>
                {times(6, () => (
                  <div className="col pl-2 pr-2">
                    <Card showTag headline={`AUD 45`} title={`หม้อสุกี้บาร์บีคิวรุ่น Otto PG-155`} subtitle={`~1.4k from Melbourne CBD`} />
                  </div>))}
              </Sliders>
            </MediaQuery>
            <MediaQuery up="lg">
              <Sliders slidesToShow={4}>
                {times(8, () => (
                  <div className="col-3 pl-2 pr-2">
                    <Card showTag headline={`AUD 45`} title={`หม้อสุกี้บาร์บีคิวรุ่น Otto PG-155`} subtitle={`~1.4k from Melbourne CBD`} />
                  </div>
                ))}
              </Sliders>
            </MediaQuery>
          </section>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

export default Home
