/* eslint-disable */
import React from 'react'

import EditorTool from 'components/EditorTool'
// import PropTypes from 'prop-types'
// import cn from 'classnames'
// import styles from './EditorWrapper.scss'
let html = `
  <strong>ตัวอย่างการเขียนบทความให้เซิร์จเจอง่าย อยากเป็นนักเขียนออนไลน์ต้องรู้จัก</strong>
  <p>เราดีใจที่ได้เห็นนักเขียนดีๆ จดจ่อกับงานเขียน แต่น่าเสียดาย…ที่หลายคน</p>
  <p>ไม่ค่อยได้นึกถึงการทำ SEO (Search Engine Optimization)</p>
  <p>เพราะมันดูเหมือนเป็นเรื่องการตลาด แต่ถ้าเป็นนักเขียน Content </p>
  <p>หรือนักเขียนบทความ ที่ชิ้นงานต้องขึ้นบนเว็บไซต์ออนไลน์</p>
  <p>เพียงแค่ “อ่านดี” คงไม่พอ ต้องทั้ง “อ่านดี และหาเจอได้ง่าย”</p>
  <br />
  <p>ยกตัวอย่างมุมมองการเลือกคีย์เวิร์ด</p>
  <ul>
    <li>เขียนในสิ่งที่อยากนำเสนอ</li>
    <li>คิดในมุมผู้ใช้ คนที่สนใจบทความนี้ น่าจะสนใจอะไร</li>
    <li>ศึกษาค้นคว้าคีย์เวิร์ด (Advanced ขึ้นอีกนิด)</li>
  </ul>
  <p>คำแนะนำที่เราอยากให้คือ “ควรคิดเรื่องคีย์เวิร์ดไว้บ้าง ไม่ใช่ว่าไม่คิดเลย แล้วก็ไม่ใช่ว่าคิดมากซะจนผลงานออกมาไม่ดี (คิดมากเกินไป)”</p>
  <p>โดยสำหรับวิธีการค้นคว้าคีย์เวิร์ดและเทคนิคการเลือกหัวข้อ มีสอนอยู่ในคอร์ส Becoming A Great Digital Writer: </p>
  <p>เป็นนักเขียนคอนเทนต์ที่โดนเด่นบนดิจิทัล ของ Content Shifu Academy ด้วยนะคะ</p>
`

class EditorWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      html: html,
    }
  }

  updateHtml(html) {
    this.setState({
      html,
    })
  }

  render() {
    return (
      <div className="d-flex align-items-start flex-column">
        <EditorTool
          value={ this.state.html }
          onChange={ (html) => this.updateHtml(html) }
          debounce={ 500 }
        />
      </div>
    )
  }
}

EditorWrapper.propTypes = {
}

EditorWrapper.defaultProps = {
}

export default EditorWrapper
