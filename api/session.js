import { withSession } from "../lib/session"

export default withSession(async function handler(req, res) {
  const user = req.session.get("user")
  if (!user) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  res.send({ user })
})
