import { asyncComponent } from 'shared/Async';

const Home = asyncComponent({
  resolve: () => new Promise(resolve =>
    // Webpack's code splitting API w/naming
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/Home'));
      },
      'Home'
    )
  )
})

const About = asyncComponent({
  resolve: () => new Promise(resolve =>
    // Webpack's code splitting API w/naming
    require.ensure(
      [],
      (require) => {
        resolve(require('views/About'));
      },
      'About'
    )
  )
})

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/about',
    component: About,
  }
]

export default routes
