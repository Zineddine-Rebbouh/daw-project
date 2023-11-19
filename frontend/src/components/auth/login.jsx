import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'lucide-react';


const login = () => {

    const containerStyle = {
        fontFamily: 'system-ui'
    };

    return (
        // <div className='relative w-full h-screen p-20 flex flex-col justify-center'>
        //     <div className='h-[45rem] bg-red-400 p-10' style={ containerStyle }>
        //         <h1 className="text-4xl font-bold flex items-center gap-4">
        //             <FaArrowRight size={ 25 } />
        //             <span>Welcome</span>
        //         </h1>
        //         <form action="/login" method="post">
        //             <div className="relative flex items-center">
        //                 <i className='absolute text-[#999] pl-2'><FaUser /></i>
        //                 <input className='bg-gray-300 pl-8 h-[35px]' id="username" type="text" name="username" placeholder='Username' />
        //             </div>
        //             <div className="relative flex items-center">
        //                 <i className='absolute text-[#999] pl-2'><FaUnlock /></i>
        //                 <input className='bg-gray-300 pl-8 h-[35px]' id="password" type="password" name="password" placeholder='Password' /><br /><br />
        //             </div>
        //             <button type="submit">Sign in</button>
        //         </form>
        //     </div>
        // </div>
        <div class="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2 relative flex items-center">
                            <i className='absolute text-[#999] pl-2'><FaUser /></i>
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-8 text-xl" placeholder='Email' />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div class="mt-2 relative flex items-center">
                            <i className='absolute text-[#999] pl-2'><FaUnlock /></i>
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-8" placeholder='Passoword' />
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>

                    </div>

                </form>


            </div>

        </div>


    );
};


export default login


