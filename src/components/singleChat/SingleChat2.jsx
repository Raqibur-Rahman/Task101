import { useState } from "react";
import Swal from "sweetalert2";

const SingleChat2 = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const form = document.getElementById('uploadForm');
    const sendFiles = async () => {
        const myFiles = document.getElementById('myFiles').files;

        const formData = new FormData();

        Object.keys(myFiles).forEach(key => {
            formData.append(myFiles.item(key).name, myFiles.item(key));
        })
        const response = await fetch('http://localhost:3000/upload', {
            method: "POST",
            body: formData
        })

        const json = await response.json();

        const h2 = document.querySelector('h2');
        h2.textContent = `Status:${json?.status}`

        const h3 = document.querySelector('h3');
        h3.textContent = json?.message

        console.log(json);

    }

    const handelFormSubmit = (event) => {
        event.preventDefault();
        console.log("Upload button clicked!")
        Swal.fire(
            'Thank you for your patience!',
            ' The number of attached files are showing in the UI. Kindly allow us sometime to complete the backend functionality. We still need to work on this.',
            'info'
        )
        sendFiles()
    }


    const handelAttachmentButton = (event) => {
        setModalVisible(true);

    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        setSelectedFiles(Array.from(files));
    };

    const closeModal = () => {
        setModalVisible(false);
    };



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

                    <input
                        type="file"
                        id="fileInput"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                    />



                    <button onClick={handelAttachmentButton}>
                        <img
                            className="w-7 h-7 p-1"
                            src="https://cdn-icons-png.flaticon.com/512/54/54719.png"
                            alt=""
                        />
                    </button>




                    <p>{selectedFiles.length}</p>
                    {/* Modal */}
                    {isModalVisible && (
                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                </div>

                                {/* Modal Content */}
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Upload Files</h3>
                                        <p className="mt-1 text-sm text-gray-500">Select one or more files to upload.</p>

                                        {/* File Input */}
                                        <div className="mt-4">
                                            <form id="uploadForm" encType="multipart/form-data">
                                                <label htmlFor="myFiles" className="sr-only">
                                                    Choose files
                                                </label>
                                                <input
                                                    type="file"
                                                    id="myFiles"
                                                    accept="*"
                                                    multiple
                                                    className="appearance-none bg-white border border-gray-300 p-2 rounded-md"
                                                    onChange={handleFileChange}
                                                />

                                                {/* Selected Files List */}
                                                {selectedFiles.length > 0 && (
                                                    <div className="mt-2 text-sm text-gray-700">
                                                        <p className="font-bold">Selected Files:</p>
                                                        <ul>
                                                            {selectedFiles.map((file, index) => (
                                                                <li key={index}>
                                                                    {file.name} ({file.type})
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Submit Button */}
                                                <button
                                                    onClick={handelFormSubmit}
                                                    type="button"
                                                    className="mt-4 w-full bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 focus:outline-none"
                                                >
                                                    Upload
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    {/* Close Button */}
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            onClick={closeModal}
                                            type="button"
                                            className="w-full bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 focus:outline-none"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>



                            </div>
                        </div>
                    )}

                </div>

                <div className="flex items-center">
                    <img className="w-7 h-7 p-1" src="https://cdn-icons-png.flaticon.com/512/2278/2278049.png" alt="" />
                    <p>12-23-2023</p>
                </div>

            </div>


        </div>
    );
};

export default SingleChat2;