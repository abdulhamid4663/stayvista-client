import axiosSecure from "."

// GET all rooms
export const getAllRooms = async () => {
    const { data } = await axiosSecure.get('/rooms');
    return data;
}

// GET all rooms for host
export const getHostRooms = async email => {
    const { data } = await axiosSecure.get(`/rooms/${email}`)
    return data;
}

// GET a single room
export const getSingleRoom = async id => {
    const { data } = await axiosSecure.get(`/room/${id}`)
    return data;
}

// POST a room in database
export const addRoom = async roomData => {
    const {data} = await axiosSecure.post('/rooms', roomData);
    return data;
}