import { Link, NavLink, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <header className="navbar bg-base-100 shadow-sm">
        <div className="mx-auto flex w-full max-w-5xl px-4">
          <div className="flex-1">
            <Link className="btn btn-ghost text-xl" to="/">
              ecom
            </Link>
          </div>
          <nav className="flex items-center gap-2">
            <NavLink
              className={({ isActive }) =>
                `btn btn-sm ${isActive ? "btn-primary" : "btn-ghost"}`
              }
              to="/cart"
            >
              Cart
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
