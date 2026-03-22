import { useEffect } from 'react';

export default function EasterEgg() {
  
  useEffect(() => {
    console.log("Hej! Vad roligt att se dig här!");
    console.log("Klicka på hemsidans namn för se effekt");
    console.log("Skriv 1337 för se vad som händer");

    let keys = "";
    
    const handleKeyDown = (e) => {
      keys += e.key;
      keys = keys.slice(-4); 
      if (keys === "1337") {
        alert("1337! Du hittade påskägget!");
        keys = ""; 
      }
    };

    document.addEventListener('keydown', handleKeyDown);


    return () => document.removeEventListener('keydown', handleKeyDown);

  }, []);

  return null; 
}