import { data } from 'autoprefixer';
import React from 'react';



const teacher = () => {
    // call random user
    fetch("https://randomuser.me/api/?results=2")
        .then((results) => {
            return results.json();
        })
        .then((data) => {
           
        });
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Our Expert Workers</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-primary border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/thumb/men/1.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                <p className="text-gray-500">Modern Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-primary border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/thumb/men/0.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
                                <p className="text-gray-500">Teacher</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-primary border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/thumb/men/2.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                                <p className="text-gray-500">Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-primary border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/thumb/men/3.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                                <p className="text-gray-500">Teacher</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-primary border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/thumb/men/4.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
                                <p className="text-gray-500">Worker</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-primary border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/thumb/men/5.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
                                <p className="text-gray-500">Teacher</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-primary border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/thumb/men/6.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
                                <p className="text-gray-500">worker</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-primary border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                                <p className="text-gray-500">Teacher</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-primary border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://randomuser.me/api/portraits/thumb/men/8.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                                <p className="text-gray-500">Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default teacher;