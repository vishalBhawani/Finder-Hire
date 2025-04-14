import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Families from "../../components/Families/Families";
import Services from "../../components/Services/Services";
import Reviews from "../../components/Reviews/Reviews";
import ServicesLocation from "../../components/ServicesLocation/ServicesLocation";
import WhyUs from "../../components/WhyUs/WhyUs";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import CardSlider from "../../components/CardSlider/CardSlider";
const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Families />

            <Services />
            <Reviews />
            <ServicesLocation />
            <WhyUs />
            <Faq />
            <Footer />

        </>
    );
};

export default Home;
