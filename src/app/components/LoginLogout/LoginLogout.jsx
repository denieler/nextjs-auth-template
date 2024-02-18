import Image from 'next/image'
import { getSession } from '@auth0/nextjs-auth0'
import { twMerge as cx } from 'tailwind-merge'

const LoginLogout = async ({ className }) => {
  const session = await getSession()
  const isAuthenticated = Boolean(session?.user)

  return (
    <div className={className}>
      {isAuthenticated
      ? (
        <div className="group relative cursor-pointer">
          {session?.user?.picture && session?.user?.name && (
            <Image
              src={session?.user?.picture}
              width={40}
              height={40}
              alt={session?.user?.name}
              className="row-span-2 rounded-full"
            />
          )}

          <div
            className={cx(
              'absolute z-10',
              'right-0 -top-4',
              'w-56',
              'pt-16',
              'hidden group-hover:block'
              )
            }
            role="menu"
          >
            <div className="rounded-md border border-gray-100 bg-white shadow-lg">
              <div className="p-2">
                <a
                  href='/api/auth/logout'
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      )
      : (
        <a
          href='/api/auth/login'
          className={cx(
            'inline-block',
            'rounded border border-yellow-300',
            'bg-yellow-300 hover:bg-transparent',
            'px-12 py-3',
            'text-sm font-medium text-black hover:text-yellow-300',
            'focus:outline-none focus:ring',
            'active:text-indigo-500'
          )}
        >
          Sign In
        </a>
      )}
    </div>
  )
}

export default LoginLogout
