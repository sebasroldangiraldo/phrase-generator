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
    }

  };

  return (
    <div>
      <div>Home</div>
      <button onClick={handleClick}>Search</button>
      <p>{phrase}</p>
    </div>

  );
}