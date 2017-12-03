const authentication = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        const tokenKey = token.split(' ');
        if (tokenKey.toString() === process.env.DEMO_AUTH_TOKEN) {
          // TODO
          // Implment real authentication system
          // Just for demo
          req.user = {
            success: true,
            username: 'Tim Tawan',
            token,
          }
          return next()
        }
    }
    // Redirect when failed
    return res.redirect('/');
}
export default authentication
