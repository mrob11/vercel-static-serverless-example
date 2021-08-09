import { withSession } from "../lib/session"

export default withSession(async function handler(req, res) {
  req.session.unset("user")
  await req.session.save()
  res.end()
})
