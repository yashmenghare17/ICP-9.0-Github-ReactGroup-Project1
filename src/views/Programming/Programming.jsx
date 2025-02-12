import React from "react";
import Header from "../../components/Header/Header.jsx";
import "./Programming.css"; 

function Programming() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-bl from-blue-950 to-purple-700">
            <Header />
            <footer className="bg-indigo-950 text-white text-center p-4 mt-auto">
                <p>&copy; 2025 Chain Pulse. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Programming;

