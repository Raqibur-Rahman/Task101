import Chats from "../../components/chats/Chats";

const ToDo = () => {
    return (
        <div className="">
            <div className="bg-gray-200 h-screen  overflow-y-auto">
                <div className="flex font-bold justify-between p-1 m-1">

                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-l-box"></div>
                        <p className="p-1">To Do</p>
                    </div>
                    <p className="p-1 bg-gray-300 rounded">0</p>
                </div>
                <Chats></Chats>
            </div>


        </div>
    );
};

export default ToDo;