import React from 'react';


const StudentTr = ({ student, index, refetch }) => {

// ----------------------------
   
    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
            <td class="w-4 p-4">
                {index + 1}
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap uppercase">
                {student.name}
            </th>
            <td class="px-6 py-4">
                {student.roll}
            </td>
            <td class="px-6 py-4">
                {student.group}
            </td>
            <td class="px-6 py-4">
                {student.phone}
            </td>
            <td class="px-6 py-4">
                <button className='btn btn-xs btn-outline btn-primary'>{student.status}</button>
            </td>
            
        </tr>
    );
};

export default StudentTr;