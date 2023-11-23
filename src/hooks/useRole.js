import useAuth from "./useAuth"
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
    const { user, loading } = useAuth();

    const { data: role, isLoading } = useQuery({
        queryKey: ['role'],
        enabled: !loading,
        queryFn: async () => await getRole(user?.email)
    })

    return [role, isLoading];
}

export default useRole;