import { Route, Routes } from "react-router";
import MainLayout from "./MainLayout";
import HomePage from "./HomePage";

function AboutPage() {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="prose max-w-none">
          <h1>About</h1>
          <p>
            Routing is provided by the <code>react-router</code> package (not
            <code> react-router-dom</code>).
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
