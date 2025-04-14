import React from "react";
import "./Services.scss";
import CardSlider from "../CardSlider/CardSlider";


function Services() {
    return (
        <section class="services">
            <div class="full__container">
                <div class="site-heading">
                    <h2 class="site-heading--small text-center">
                        Most Booked Services
                    </h2>
                </div>

                <CardSlider />
            </div>

        </section>
    );
}

export default Services;
