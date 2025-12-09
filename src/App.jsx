import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./pages/Public";
import AuthPage from "./pages/AuthPage";
import DashLayout from "./components/DashLayout";
import NotesList from "./pages/Notes";
import { setupInterceptors } from "./api/client";
import { useEffect } from "react";
import { useAppStore } from "./store/useStore";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { refreshAccessToken } = useAppStore();

  useEffect(() => {
    const cleanup = setupInterceptors();
    refreshAccessToken(); // Attempt to restore session on load
    return cleanup;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="auth" element={<AuthPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="dash" element={<DashLayout />}>
            <Route path="notes">
              <Route index element={<NotesList />} />
            </Route>
            <Route path="editLabels" element={<h1>edit labels</h1>} />
            <Route path="trash" element={<h1>trash</h1>} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
