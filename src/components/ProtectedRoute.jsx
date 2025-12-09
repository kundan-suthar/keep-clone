import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppStore } from "../store/useStore";

const ProtectedRoute = () => {
    const { isAuthenticated } = useAppStore();
    const location = useLocation();

    if (isAuthenticated === null) {
        // Optionally return a loading spinner here if you want to show something while checking auth
        return null;
    }

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/auth" state={{ from: location }} replace />
    );
};

export default ProtectedRoute;
