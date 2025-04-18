import React, { useState, useRef, useEffect } from 'react';

const CardSlider = () => {
    const sliderRef = useRef(null);  // Reference to the slider
    const [isDown, setIsDown] = useState(false);  // Track if the mouse is down
    const [startX, setStartX] = useState(0);  // Track the initial mouse X position
    const [scrollLeft, setScrollLeft] = useState(0);  // Track the scroll position

    // Mouse down handler
    const handleMouseDown = (e) => {
        setIsDown(true);
        const slider = sliderRef.current;
        if (slider) {
            slider.classList.add('grabbing');
            setStartX(e.pageX - slider.offsetLeft);
            setScrollLeft(slider.scrollLeft);
        }
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
        setIsDown(false);
        const slider = sliderRef.current;
        if (slider) {
            slider.classList.remove('grabbing');
        }
    };

    // Mouse up handler
    const handleMouseUp = () => {
        setIsDown(false);
        const slider = sliderRef.current;
        if (slider) {
            slider.classList.remove('grabbing');
        }
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const slider = sliderRef.current;
        if (slider) {
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5; // Scroll speed multiplier
            slider.scrollLeft = scrollLeft - walk;
        }
    };

    // Set up event listeners
    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('mousedown', handleMouseDown);
            slider.addEventListener('mouseleave', handleMouseLeave);
            slider.addEventListener('mouseup', handleMouseUp);
            slider.addEventListener('mousemove', handleMouseMove);
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (slider) {
                slider.removeEventListener('mousedown', handleMouseDown);
                slider.removeEventListener('mouseleave', handleMouseLeave);
                slider.removeEventListener('mouseup', handleMouseUp);
                slider.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [isDown, startX, scrollLeft]);

    return (
        <div
            ref={sliderRef}
            className="services__container">
            <article class="card services__card">
                <figure class="card__figure">
                    <a href="#">
                        <img class="card__image card__image--front" src="assets/images/card-bg-1.jpg" alt="Front" />
                        <img class="card__image card__image--back" src="assets/images/card-bg-2.jpg" alt="Back" />
                        <span class="card__image card__image--overlay"></span>
                        <span class="card__cta">Book Now</span>
                    </a>
                </figure>
                <div class="card__content">
                    <h3 class="card__name">Bathroom Cleaning</h3>
                </div>
            </article>
            <article class="card services__card">
                <figure class="card__figure">
                    <a href="#">
                        <img class="card__image card__image--front" src="assets/images/card-bg-2.jpg" alt="Front" />
                        <img class="card__image card__image--back" src="assets/images/card-bg-1.jpg" alt="Back" />
                        <span class="card__image card__image--overlay"></span>
                        <span class="card__cta">Book Now</span>
                    </a>
                </figure>
                <div class="card__content">
                    <h3 class="card__name">Bathroom Cleaning</h3>
                </div>
            </article>
            <article class="card services__card">
                <figure class="card__figure">
                    <a href="#">
                        <img class="card__image card__image--front" src="assets/images/card-bg-3.jpg" alt="Front" />
                        <img class="card__image card__image--back" src="assets/images/card-bg-4.jpg" alt="Back" />
                        <span class="card__image card__image--overlay"></span>
                        <span class="card__cta">Book Now</span>
                    </a>
                </figure>
                <div class="card__content">
                    <h3 class="card__name">Bathroom Cleaning</h3>
                </div>
            </article>
            <article class="card services__card">
                <figure class="card__figure">
                    <a href="#">
                        <img class="card__image card__image--front" src="assets/images/card-bg-4.jpg" alt="Front" />
                        <img class="card__image card__image--back" src="assets/images/card-back-img-1.jpg"
                            alt="Back" />
                        <span class="card__image card__image--overlay"></span>
                        <span class="card__cta">Book Now</span>
                    </a>
                </figure>
                <div class="card__content">
                    <h3 class="card__name">Bathroom Cleaning</h3>
                </div>
            </article>
            <article class="card services__card">
                <figure class="card__figure">
                    <a href="#">
                        <img class="card__image card__image--front" src="assets/images/card-bg-1.jpg" alt="Front" />
                        <img class="card__image card__image--back" src="assets/images/card-back-img-1.jpg"
                            alt="Back" />
                        <span class="card__image card__image--overlay"></span>
                        <span class="card__cta">Book Now</span>
                    </a>
                </figure>
                <div class="card__content">
                    <h3 class="card__name">Bathroom Cleaning</h3>
                </div>
            </article>
        </div>
    );
};

export default CardSlider;
