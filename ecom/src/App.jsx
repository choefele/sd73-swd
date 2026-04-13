import { Link, NavLink, Route, Routes } from 'react-router'

function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">React + Vite starter</h1>
      <p className="text-base-content/80">
        This repo is initialized with Vite, Vitest, React Router v7, Tailwind CSS,
        and DaisyUI.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          className="btn btn-primary"
          href="https://vite.dev/guide/"
          target="_blank"
          rel="noreferrer"
        >
          Vite Docs
        </a>
        <a
          className="btn btn-outline"
          href="https://reactrouter.com/"
          target="_blank"
          rel="noreferrer"
        >
          React Router Docs
        </a>
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="prose max-w-none">
      <h1>About</h1>
      <p>
        Routing is provided by the <code>react-router</code> package (not
        <code> react-router-dom</code>).
      </p>
    </div>
  )
}

function App() {
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
                `btn btn-sm ${isActive ? 'btn-primary' : 'btn-ghost'}`
              }
              to="/"
              end
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `btn btn-sm ${isActive ? 'btn-primary' : 'btn-ghost'}`
              }
              to="/about"
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
