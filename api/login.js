import { withSession } from "../lib/session"

export default withSession(async function handler(req, res) {
  req.session.set("user", {
    id: 123,
  })
  await req.session.save()
  res.end()
})
