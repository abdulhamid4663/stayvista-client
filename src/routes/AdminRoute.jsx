/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isLoading] = useRole();

    if (loading || isLoading) return <Loader />;

    if (user && role === 'admin') return children;

    return <Navigate to='/dashboard' />
};

export default AdminRoute;