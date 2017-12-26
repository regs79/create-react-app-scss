import faker from 'faker'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import Icon from 'components/Icon'
import styles from './Drawer.scss'

const MENU = [
  {
    label: 'Home',
    link: '/',
    icon: 'ion-home',
  },
  {
    label: 'Explore',
    link: '/explore',
    icon: 'ion-compose',
  },
  {
    label: 'House',
    link: '/houses',
    icon: 'ion-images',
  },
  {
    label: 'Jobs',
    link: '/jobs',
    icon: 'ion-coffee',
  },
  {
    label: 'Market',
    link: '/market',
    icon: 'ion-bag',
  },
]

class Drawer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.root = document.getElementById('drawer-root');
    this.parent = document.getElementById('root');
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.root.appendChild(this.el);
    this.parent.className = styles.overlay
  }

  componentWillUnmount() {
    this.parent.classList.remove(styles.overlay);
    this.root.removeChild(this.el);
  }

  onClickClose() {
    this.props.handleOnClose()
  }

  render() {
    return ReactDOM.createPortal(
      this.renderDrawer(),
      this.el,
    );
  }

  renderDrawer() {
    return (
      <div className={styles.container}>
        <button className={cn('btn btn-link', styles.close)} onClick={this.onClickClose.bind(this)}>
          <Icon icon="ion-close-round" size={32} className={styles.closeIcon} />
        </button>
        <div className={styles.drawer}>
          <div className={cn('jumbotron p-2 mb-0 rounded-0', styles.user, styles.section)}>
            <div className="media">
              <img src={faker.internet.avatar()} alt="..." className="align-self-start mr-3 img-thumbnail rounded-circle" width="60" />
              <div className="media-body">
                <h5 className="mt-3">Hello, Tawan!</h5>
              </div>
            </div>
            <div className="mt-2">
              <button className="btn btn-primary btn-sm">Log out</button>
            </div>
          </div>
          <div className={styles.content}>
            <ul class="list-unstyled">
              {MENU.map((menu, key) => (
                <li>
                  <Link to={menu.link} className={styles.menuLink} onClick={this.onClickClose.bind(this)}>
                    <Icon icon={menu.icon} size={24} />
                    <span className="pl-3">{menu.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={cn('fixed-bottom', styles.footer, styles.section)}>
            <ul className="list-inline">
              <li className="list-inline-item pl-3">
                <a href="#">
                  <Icon icon="ion-social-facebook" size={32} />
                </a>
              </li>
              <li className="list-inline-item pl-3">
                <a href="#">
                  <Icon icon="ion-social-instagram" size={32} />
                </a>
              </li>
              <li className="list-inline-item pl-3">
                <a href="#">
                  <Icon icon="ion-social-youtube" size={32} />
                </a>
              </li>
              <li className="list-inline-item pl-1 small">
                <span style={{
                  position: 'relative',
                  bottom: '6px',
                }}>THAI</span>
              </li>
              <li className="list-inline-item pl-1 small">
                <span style={{
                  position: 'relative',
                  bottom: '6px',
                }}>ENGLISH</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Drawer.propTypes = {
};

Drawer.defaultProps = {
};

export default Drawer
