import React from "react";
import "./ServicesLocation.scss";


function ServicesLocation() {
    return (
        <section className="service__locations">
            <div className="full__container">
                <div className="site-heading">
                    <h2 className="site-heading--small text-center">
                        Join 29 million families who've turned
                    </h2>
                </div>
                <div className="card__location--container">
                    <article className="card__location">
                        <figure className="card__icon">
                            <img src="assets/images/location-icon-1.svg" />
                        </figure>
                        <div className="card__location--content">
                            <h3 className="card__location--name">Kolkata</h3>
                        </div>
                    </article>
                    <article className="card__location">
                        <figure className="card__icon">
                            <img src="assets/images/location-icon-1.svg" alt="Bangalore" />
                        </figure>
                        <div className="card__location--content">
                            <h3 className="card__location--name">Bangalore</h3>
                        </div>
                    </article>
                    <article className="card__location">
                        <figure className="card__icon">
                            <img src="assets/images/Hyderabad.svg" alt="Hyderabad" />
                        </figure>
                        <div className="card__location--content">
                            <h3 className="card__location--name">Hyderabad</h3>
                        </div>
                    </article>
                    <article className="card__location">
                        <figure className="card__icon">
                            <img src="assets/images/Coimbatore.svg" alt="Coimbatore" />
                        </figure>
                        <div className="card__location--content">
                            <h3 className="card__location--name">Coimbatore</h3>
                        </div>
                    </article>
                    <article className="card__location">
                        <figure className="card__icon">
                            <img src="assets/images/Mangalore.svg" alt="Mangalore" />
                        </figure>
                        <div className="card__location--content">
                            <h3 className="card__location--name">Mangalore</h3>
                        </div>
                    </article>
                    <article className="card__location">
                        <figure className="card__icon">
                            <img src="assets/images/Madurai.svg" alt="Madurai" />
                        </figure>
                        <div className="card__location--content">
                            <h3 className="card__location--name">Madurai</h3>
                        </div>
                    </article>
                    <article className="card__location">
                        <figure className="card__icon">
                            <img src="assets/images/Kannur.svg" alt="Kannur" />
                        </figure>
                        <div className="card__location--content">
                            <h3 className="card__location--name">Kannur</h3>
                        </div>
                    </article>

                </div>
            </div>

        </section>
    );
}

export default ServicesLocation;
