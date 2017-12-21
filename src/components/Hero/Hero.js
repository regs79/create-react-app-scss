// import React from 'react'
// import PropTypes from 'prop-types'
// import cn from 'classnames'
// import styles from './Hero.scss'
// import Button from 'components/Button'
import heroImage from 'assets/images/mel11.jpg'
//
// class Hero extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div className={cn(styles.container, 'clear')}>
//         <div className={styles['hero-section']} style={{
//           background: `linear-gradient(
//             rgba(0, 0, 0, 0.3),
//             rgba(0, 0, 0, 0.3)
//           ),
//           url(${heroImage})`
//         }}>
//           <div className="container">
//             <div className={styles['hero-section-text']}>
//               <div className={styles['content']}>
//                 <span className={styles['hero-title']}>
//                   <p>More than 2.5m listings</p>
//                   <p>Think Thaimates this</p>
//                   <p>Christmas</p>
//                 </span>
//                 <h3 className={styles['hero-subtitle']}>
//                   <p>ศูนย์รวมคนไทยในประเทศออสเตรเลีย</p>
//                   <p>หางาน หาเพื่อน หาบ้านพัก ซื้อ-ขาย</p>
//                 </h3>
//                 <Button secondary>
//                   FREE POST
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// Hero.propTypes = {
// };
//
// export default Hero


import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Button from 'components/Button'
import styles from './Hero.scss'

export const Hero = (props) => {
  return (
    <div className={cn('jumbotron jumbotron-fluid', styles['hero-section'])} style={{
        background: `linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url(${heroImage})`
      }}>
      <div className="container">
        <div className={cn('row align-items-start', styles['hero-section-text'])}>
          <div className={cn('col-sm-12 col-md-6 col-lg-5', styles['content'])}>
            <span className={styles['hero-title']}>
              <p>More than 2.5m listings</p>
              <p>Think Thaimates this</p>
              <p>Christmas</p>
            </span>
            <h3 className={styles['hero-subtitle']}>
              <p>ศูนย์รวมคนไทยในประเทศออสเตรเลีย</p>
              <p>หางาน หาเพื่อน หาบ้านพัก ซื้อ-ขาย</p>
            </h3>
            <Button full darkpink>
              FREE POST
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
};

export default Hero
