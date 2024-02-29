import { handleAuth, handleCallback } from '@auth0/nextjs-auth0'
import jwt from 'jsonwebtoken'

const afterCallback = async (req, session, state) => {
  const payload = {
    userId: session.user.sub,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  }

  session.user.accessToken = jwt.sign(payload, process.env.SUPABASE_JWT_SECRET)

  return session
}

export const GET = handleAuth({
  callback: handleCallback({ afterCallback })
})
