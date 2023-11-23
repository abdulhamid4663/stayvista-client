/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";


const HostRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isLoading] = useRole();

    if (loading || isLoading) return <Loader />;

    if (user && role === 'host') return children;

    return <Navigate to='/dashboard' />
};

export default HostRoute;