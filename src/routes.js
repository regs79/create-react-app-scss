import Async from 'utils/Async'

const Home = Async({
  resolve: () => new Promise(resolve =>
    require.ensure(
      [],
      (require) => {
        resolve(require('containers/Home'));
      },
      'Home'
    )
  )
})


const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
]

export default routes
