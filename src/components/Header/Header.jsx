import React from 'react';

function Header() {
    return (
        <header className=" bg-indigo-950 border-2 border-indigo-400 text-white p-5 shadow-2xl mt-6 mx-8 rounded-full">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Chain Pulse</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:text-gray-400 text-2xl mt-6">Color</a></li>
                        <li><a href="/technology" className="hover:text-gray-400 text-2xl">Programming</a></li>
                        <li><a href="/innovation" className="hover:text-gray-400 text-2xl">Font-Family</a></li>
                        <li><a href="/about" className="hover:text-gray-400 text-2xl">Images</a></li>
                       
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
