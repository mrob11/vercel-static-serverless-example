import { withIronSession } from "next-iron-session"
export const withSession = handler =>
  withIronSession(handler, {
    password:
      "super_secret_password_that_you_should_totally_store_in_environment",
    cookieName: "example",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  })
