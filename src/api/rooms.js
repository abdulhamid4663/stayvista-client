import axiosSecure from "."

// GET all rooms
export const getAllRooms = async () => {
    const { data } = await axiosSecure.get('/rooms');
    return data;
}

// GET a single room
export const getSingleRoom = async (id) => {
    const { data } = await axiosSecure.get(`/room/${id}`)
    return data;
}