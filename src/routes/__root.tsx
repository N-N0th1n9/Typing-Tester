

import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 justify-center">
        <Link to="/" className="[&.active]:text-white">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:text-white">
          About
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})