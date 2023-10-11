'use client'
import { useState } from 'react';

export default function Page() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [filename, setFilename] = useState("");
    
    
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        
    };

    const uploadFile = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append("filename",filename )
        formData.append('image', selectedFile);

        try {
            const res = await fetch('/api/admin/upload', {
                method: 'POST',
                body: formData
            });

            const response = await res.json()
            
            if (response.success) {
                alert("File uploaded successfully!");
                window.location.href = "/admin/dashboard"
                
            } else {
                console.log("File upload failed!");
                // console.log(response)
            }
        } catch (error) {
            console.log("There was an error uploading the file:", error);
        }
    };

    return (
        <div className="w-full my-10">
            <div class="flex flex-col items-start justify-center w-5/6 sm:4/6 md:w-2/6 mx-auto">
            <label for="dropzone-file"  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
                <input id="dropzone-file" type="file" class="hidden" onChange={handleFileChange} />
            </label>
            <div className="my-4 flex space-x-2">
            <label htmlFor="filename">File Name:</label>
            <input id='filename' className='outline-1 outline-color-1 ring-1 rounded-sm ring-black' type="text" onChange={(e)=>setFilename(e.target.value)} value={filename} />
            
            </div>
            <button onClick={uploadFile} className='p-2 bg-color-1 rounded-md text-white'>Upload</button>
            </div> 
        </div>
    );
}

