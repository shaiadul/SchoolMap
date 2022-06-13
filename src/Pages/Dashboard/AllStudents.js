import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import StudentTr from './StudentTr';
import search from "../../images/search-svgrepo-com.svg"
import refresh from "../../images/refresh-svgrepo-com.svg"


const AllStudents = () => {

    // get value
    const [students, setStudents] = useState([])
    const [value, setValue] = useState(" ")

    const sortOption = ["name", "email", "phone", "status", "roll"]
    // get students data
    useEffect(() => {
        loadStudentData();
    }, [])
    const loadStudentData = async () => {
        return await axios.get("http://localhost:5000/user").then((res) => setStudents(res.data)).catch((err) => console.log(err))
    }
    // handleReset
    const handleReset = () => {
        loadStudentData();
    }
    // handleSearch
    const handleSearch = async (e) => {
        e.preventDefault();
        return await axios.get(`http://localhost:5000/user?q=${value}`).then((res) => {
            setStudents(res.data);
            setValue("");
        }).catch((err) => console.log(err))
    }

    return (
        <div className='px-2 pb-40 bg-gray-300'>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">


                {/* form for search by student name */}
                <form onSubmit={handleSearch} className="flex p-4">
                    <div class="relative mt-1">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        </div>
                        <div className='flex'>
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                id="table-search"
                                class="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-0"
                                placeholder="Search By Student Name" />
                            <button
                                type='submit'
                                className='btn btn-dark rounded-none border-0 rounded-r-lg'>
                                <img className='w-8' src={search} alt="" />
                            </button>
                            <button
                                className='rounded-full mx-4'
                                onClick={() => handleReset()}>
                                <img className='w-8 h-8 ' src={refresh} alt="" />
                            </button>
                        </div>
                    </div>

                </form>


                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-center'>
                            <th scope="col" class="p-4">
                                S.N
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Roll
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Group
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    {/* table information */}
                    <tbody>
                        {
                            students.map((student, index) =>
                                <StudentTr
                                    key={student.id}
                                    student={student}
                                    index={index}
                                ></StudentTr>
                            )}
                    </tbody>
                </table>
                {/* dropdown */}
                
            </div>

        </div>
    );
};

export default AllStudents;