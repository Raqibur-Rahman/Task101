import Chats from "../../components/chats/Chats";


const UnderReview = () => {
    return (

        <div className=""> 

            <div className="bg-gray-200">
                <div className="flex font-bold justify-between p-1 m-1">

                    <div className="flex items-center">
                        <p className="p-1">Under Review</p>
                    </div>
                    <p className="p-1 bg-gray-300 rounded">0</p>
                </div>
                <Chats></Chats>
            </div>
        </div>


    );
};

export default UnderReview;