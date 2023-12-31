import Chats from "../../components/chats/Chats";


const Completed = () => {
    return (

        <div className="">
            <div className="bg-gray-200 h-screen  overflow-y-auto">
                <div className="flex font-bold justify-between p-1 m-1 mt-0 bg-gray-200  sticky top-0">

                    <div className="flex items-center">
                        <p className="p-1">Completed</p>
                    </div>
                    <p className="p-1 bg-gray-300 rounded">0</p>
                </div>
                <Chats></Chats>
            </div>
        </div>

    );
};

export default Completed;