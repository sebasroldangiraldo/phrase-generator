'use client';

import { useState } from "react";

export default function Home() {

    const [phrase, setPhrase] = useState('');

    const handleClick = async () => {

        try {

            const response = await fetch('/api/get');
            const data = await response.json();

            setPhrase(data.phrase);

        } catch (error) {
            console.log(error);
        };
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">

            <h1 className="text-4xl font-bold text-yellow-400 mb-6">Phrase Generator Challenge</h1>

            <div className="flex items-center space-x-4">

                <div className="bg-gray-800 text-white p-2 rounded-lg shadow-xl w-full sm:w-96 flex justify-center">
                    <p className="text-base text-center font-light">{phrase || 'No phrase generated yet'}</p>
                </div>

                <button onClick={handleClick} className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600 transition">Play</button>

            </div>
            
        </div>
    );
}