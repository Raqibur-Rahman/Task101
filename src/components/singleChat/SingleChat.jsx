const SingleChat = () => {
    return (
        <div className="p-1 m-1 mt-5 bg-white">

            <div className="flex justify-between">
                <div className="flex items-center">

                    <div>
                        <img className="w-9 h-9 p-1" src="https://cdn-icons-png.flaticon.com/512/1144/1144709.png" alt="" />
                    </div>
                    <div> <strong className="p-1">Client Name</strong></div>
                </div>


                <div>
                    <div className="flex items-center">
                        <div></div>
                        <div>
                            <img className="w-9 h-9 p-1" src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="" />
                        </div>
                        <div> <strong className="p-1">Sadik Istiak</strong></div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-7 h-7 p-1" src="https://cdn-icons-png.flaticon.com/512/8860/8860853.png" alt="" />
                    <p>Lorem ipsum dolor sit amet.....</p>
                </div>
                <div className="flex bg-gray-200">
                    <img className="w-7 h-7 p-1" src="https://cdn-icons-png.flaticon.com/512/2886/2886665.png" alt="" />
                    <p className="bold">1/2</p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <img className="w-7 h-7 p-1" src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="" />
                </div>

                <div>
                    <img className="w-7 h-7 p-1" src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png" alt="" />
                </div>

                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
                    12+
                </div>

                <div className="flex items-center">
                    <img className="w-7 h-7 p-1" src="https://cdn-icons-png.flaticon.com/512/566/566565.png" alt="" />
                    <p>15</p>
                </div>


                <div className="flex items-center">
                    <img className="w-7 h-7 p-1" src="https://cdn-icons-png.flaticon.com/512/54/54719.png" alt="" />
                    <p>25</p>
                </div>

                <div className="flex items-center">
                    <img className="w-7 h-7 p-1" src="https://cdn-icons-png.flaticon.com/512/2278/2278049.png" alt="" />
                    <p>12-23-2023</p>
                </div>




            </div>


        </div>
    );
};

export default SingleChat;