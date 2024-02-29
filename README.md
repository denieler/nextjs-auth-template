# Next.JS Template with Authentication and Supabase DB

## How to start

1. Clone the repository
2. Copy `.env.example` to `.env.local`
3. Specify app name in `NEXT_PUBLIC_APP_NAME` variable in `.env.local`
4. Go to [auth0.com](https://auth0.com) and create a new application, fill up `AUTH0_*` variables
5. In [auth0.com](https://auth0.com) configure `Allowed Callback URLs` and `Allowed Logout URLs` to `http://localhost:3000` (or your domain)
6. Generate random `AUTH_SECRET` via command `npx auth secret` and fill up env variable in `.env.local`, more info [here](https://authjs.dev/reference/core/errors#missingsecret)
