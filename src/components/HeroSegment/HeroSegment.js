import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './HeroSegment.scss'
import { Icon, Segment, Container, Header, Button } from 'semantic-ui-react'
import MainMenu from 'components/MainMenu'
import { Link } from 'react-router-dom'
import images from 'assets/images/mel4.jpg'

export const HeroSegment = ({ children }) => {
  return (
    <div className={cn(styles.container, styles.header)}>
      {children}
      <Segment
        inverted
        textAlign='center'
        vertical
        style={{
          minHeight: 300,
          padding: '1em 0em',
          backgroundImage: `url(${images})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Container text>
          <Header
            as='h1'
            content='ยินดีต้อนรับเข้าสู่ ไทยเมทส์ ออสเตรเลีย'
            inverted
            style={{ fontWeight: '300', marginBottom: 0, marginTop: '1.5em' }}
          />
          <Header
            as='h3'
            content='สังคมคนไทยในออสเตรเลีย แลกเปลี่ยนประสบการณ์ หางาน หาที่พัก ซื้อขาย ได้ง่ายขึ้น'
            inverted
            style={{ fontWeight: '300', padding: 0, margin: '1em 0' }}
          />
          <Link to='/explore'>
            <Button primary size='huge'>
              Explore Australia
              <Icon name='right arrow' />
            </Button>
          </Link>
        </Container>
      </Segment>
    </div>
  );
}

HeroSegment.propTypes = {
}

export default HeroSegment
