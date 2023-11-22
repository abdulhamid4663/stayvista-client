import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";


const RoomDetails = () => {
    const room = useLoaderData();
    console.log(room);

    return (
        <>
            <Container>
                <div className="max-w-screen-lg mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6">
                        <Header roomData={room} />
                    </div>
                    {/* Room Info */}
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-8 gap-6 mt-6">
                        <RoomInfo roomData={room} />

                        <div className="md:col-span-3 order-first md:order-last">
                            <RoomReservation room={room} />
                        </div> 
                    </div>
                </div>
            </Container>
        </>
    );
};

export default RoomDetails;