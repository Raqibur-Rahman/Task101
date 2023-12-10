import { useState, useCallback, useEffect } from "react";
import Swal from "sweetalert2";

const SingleChat = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [totalFiles, setTotalFiles] = useState(0);


    useEffect(() => {
        const fetchTotalFiles = async () => {
          try {
            const response = await fetch("https://task101server-production.up.railway.app/allfiles");
            const data = await response.json();
            setTotalFiles(data.length); // Assuming the API returns an array of files
          } catch (error) {
            console.error("Error fetching total files:", error);
          }
        };
    
        fetchTotalFiles();
      }, []); 

    const sendFiles = async () => {
        try {
            if (selectedFiles.length === 0) {
                // No files selected, show a warning message instead of success
                Swal.fire(
                    'No Files Selected',
                    'Please choose one or more files to upload.',
                    'warning'
                );
                return;
            }

            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append("files", file);
            });

            const response = await fetch("https://task101server-production.up.railway.app/upload", {
                method: "POST",
                body: formData,

            });

            const json = await response.json();


            Swal.fire({
                title: "File Upload <strong>Successful!</strong>",
                icon: "success",
                html: `
                  You can view 
                  <a id="viewLink" href="https://task101server-production.up.railway.app/allfiles" target="_blank"> <b>database api here</b> </a>
                `,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: `
                  View
                `,
                confirmButtonAriaLabel: "Thumbs up, great!",
                cancelButtonText: `
                  Close
                `,
                cancelButtonAriaLabel: "Thumbs down"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirect to the specified URL in a new tab when the "View" button is clicked
                    window.open(document.getElementById("viewLink").href, '_blank');
                }
            });


            console.log(json);
            setModalVisible(false);
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };


    const handleFileChange = useCallback((event) => {
        const files = event.target.files;
        setSelectedFiles(Array.from(files));
    }, []);

    const closeModal = () => {
        setModalVisible(false);
    };

    const handelFormSubmit = (event) => {
        event.preventDefault();
        // console.log("Upload button clicked!");
        sendFiles();
    };
    const handelAttachmentButton = () => {
        setModalVisible(true);

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








                    <p>{totalFiles}</p>
                    {/* Modal */}
                    {isModalVisible && (
                        <div className="fixed inset-0 z-10 overflow-y-auto ">
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

export default SingleChat;
