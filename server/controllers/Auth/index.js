const authIndex = (req, res) => {
  const user = req.user
  res.json(user)
}

export default authIndex
