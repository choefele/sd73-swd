export default function HomePage() {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">React + Vite starter</h1>
          <p className="text-base-content/80">
            This repo is initialized with Vite, Vitest, React Router v7,
            Tailwind CSS, and DaisyUI.
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
      </div>
    </div>
  );
}
