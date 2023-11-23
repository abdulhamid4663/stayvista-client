import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import { addRoom } from "../../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddRoom = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
    const navigate = useNavigate();

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    
    
    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guests = form.total_guest.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const imageFile = form.image.files[0];
        const host = {
            host: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        const imageData = await imageUpload(imageFile)

        const roomData = {
            location,
            category,
            title,
            to,
            from,
            price,
            guests,
            bedrooms,
            bathrooms,
            host,
            description,
            image: imageData?.data?.display_url
        }

        try {
            const data = await addRoom(roomData);
            console.log(data);
            toast.success('Room Added!');
            setUploadButtonText('Uploaded!');
            navigate('/dashboard/my-listings');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    const handleDates = ranges => {
        setDates(ranges.selection)
    }

    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

    return (
        <div>
            <AddRoomForm
                handleSubmit={handleSubmit}
                handleDates={handleDates}
                dates={dates}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
            />
        </div>
    );
};

export default AddRoom;