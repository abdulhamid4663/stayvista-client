import axiosSecure from ".";

export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: 'guest',
        status: "Verified"
    };

    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

    return data;
}

export const getToken = async email => {
    const { data } = await axiosSecure.post(`/jwt`, email);
    console.log("Token Received from server ---->", data);

    return data;
}

export const clearCookie = async () => {
    const { data } = await axiosSecure.get(`/logout`);
    return data;
}

export const getRole = async email => {
    const { data } = await axiosSecure.get(`/user/${email}`);
    return data.role;
}