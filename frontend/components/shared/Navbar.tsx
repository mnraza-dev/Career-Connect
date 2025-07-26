import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';

const Navbar = () => {
    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto p-4">
                <nav className="bg-gray-800 p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link href="/" className="text-white text-lg font-bold">Career Connect</Link>
                        <div>
                            <Link href="/jobs" className="text-gray-300 hover:text-white px-3">Jobs</Link>
                            <Link href="/companies" className="text-gray-300 hover:text-white px-3">Companies</Link>
                            <Button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white">Login</Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );

}

export default Navbar