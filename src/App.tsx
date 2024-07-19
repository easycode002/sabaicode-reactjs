import { BrowserRouter,Routes,Route } from "react-router-dom";
import LayoutPage from "./components/organisms/layouts-non-login/LayoutPage";
import SkeletonPage from "./pages/SkeletonPage/SkeletonPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* for layout non-login */}
        <Route path="/" element={<LayoutPage />}>
          {/* page skeleton */}
          <Route path="skeleton" element={<SkeletonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 