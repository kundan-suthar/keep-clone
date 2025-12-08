import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./pages/Public";
import AuthPage from "./pages/AuthPage";
import DashLayout from "./components/DashLayout";
import NotesList from "./pages/Notes";
import { setupInterceptors } from "./api/client";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    setupInterceptors();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="dash" element={<DashLayout />}>
          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>
          <Route path="editLabels" element={<h1>edit labels</h1>} />
          <Route path="trash" element={<h1>trash</h1>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
