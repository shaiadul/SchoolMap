import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="p-4  rounded-lg shadow md:px-6 md:py-8 bg-gray-200">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com" class="flex items-center mb-4 sm:mb-0">
                <Link to='home'><h1 className='text-center font-sans font-extrabold lg:text-3xl lg:ml-5'><span className='text-primary'>S</span>chool<span className='text-secondary'>M</span>ap</h1></Link>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" class="hover:underline">SchoolMap™</a>. All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;