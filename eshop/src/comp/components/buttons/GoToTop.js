import React, { useEffect, useState } from 'react';
import './GoToTop.css'; // Lägg till en separat CSS-fil för stil

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // En funktion som uppdaterar synlighetsstatusen för knappen baserat på skrollpositionen
    const toggleVisibility = () => {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolled > 1200) {  // Justera detta värde efter behov
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // En funktion som skrollar användaren till toppen av sidan
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // En useEffect hook för att lägga till och ta bort eventlyssnaren
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && 
                <button onClick={scrollToTop} id="myBtn" title="Go to top">Till Topp</button>
            }
        </div>
    );
}

export default GoToTop;
