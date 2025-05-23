import React from "react";
import "./WhyUs.scss";


function WhyUs() {
    return (
        <section className="whyus">
            <div className="whyus__row">
                <div className="whyus__left desktopView">
                    <img src="assets/images/what-make-us.jpg" alt="What’s makes us Different" />
                </div>

                <div className="whyus__right">
                    <div className="whyus__heading">
                        <h2 className="site-heading--main">What makes us Different</h2>
                        <p className="site-des--main">
                            With years of industry experience, we bring in-depth knowledge and innovative solutions tailored
                            to your needs.
                        </p>
                    </div>
                    <div className="whyus__left mobileView">
                        <img src="assets/images/what-make-us.jpg" alt="What’s makes us Different" />
                    </div>
                    <div className="whyus__cards">
                        <ul className="whyus__list">
                            <li className="whyus__card">
                                <span className="whyus__card--icon">
                                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="62" height="62" rx="31" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M26.393 40.1053L26.767 41.502L28.1062 41.1482L27.74 39.7825C27.293 39.8803 26.8446 39.9905 26.393 40.1053ZM25.9197 42.25L28.7766 47.2314L26.573 47.7792L23.9069 43.1609L23.311 40.9371L25.4138 40.3629L25.9197 42.25ZM27.1767 42.4393L29.9871 47.3075C30.1562 47.5993 29.9995 47.9733 29.6612 48.054L26.4473 48.8532C26.213 48.9106 25.9755 48.7942 25.8731 48.5862L22.9448 43.482L22.3054 41.0968C20.7846 41.1093 19.4065 40.0928 19.0046 38.5875L18.1588 35.4295C17.6793 33.6324 18.764 31.7593 20.5565 31.2891C26.632 29.6969 29.32 29.222 33.4898 24.2763C33.288 22.4529 36.4988 21.7577 36.9768 23.5407L38.2043 28.1201C42.2501 27.6313 43.7741 33.328 40.0277 34.9267L41.2475 39.4798C41.7379 41.311 38.5286 42.2328 37.8566 40.5847C34.4286 39.3448 32.4747 38.8979 28.7348 39.5823C29.4456 42.2329 29.7109 41.7719 27.1783 42.4392L27.1767 42.4393ZM37.5245 39.3899L33.797 25.4805C30.8314 28.9986 28.454 30.1731 24.0605 31.4023L26.1307 39.1289C30.5643 37.9929 33.2816 37.8564 37.523 39.3896L37.5245 39.3899ZM25.153 39.3868L23.0843 31.6677L20.7892 32.2729C19.4825 32.6376 18.8385 33.9148 19.1442 35.1997L19.9822 38.3252C20.3205 39.5869 21.6241 40.341 22.8888 40.0028C23.6446 39.801 24.3988 39.5916 25.153 39.3868ZM35.1516 23.5422C34.8055 23.6354 34.4269 23.9224 34.5014 24.2034L38.7721 40.1425C38.9304 40.7337 40.4264 40.3302 40.2681 39.7405C38.845 34.4317 37.4778 29.0717 35.9926 23.7859C35.9134 23.5345 35.4681 23.4631 35.1499 23.5423L35.1516 23.5422ZM38.4679 29.1105L39.7606 33.9354C42.1614 32.7451 41.2923 28.9321 38.4679 29.1105ZM41.9115 26.5422L43.5177 23.7597C43.8513 23.1839 42.9761 22.678 42.6425 23.2538L41.0363 26.0363C40.7026 26.612 41.5779 27.1179 41.9115 26.5422ZM44.5248 30.5817L47.6285 29.7498C48.2726 29.5776 48.0103 28.5999 47.3678 28.7722L44.2641 29.604C43.6201 29.7763 43.8824 30.7539 44.5248 30.5817ZM43.5146 35.2854L46.297 36.8916C46.8728 37.2252 47.3787 36.35 46.8029 36.0163L44.0204 34.4102C43.4447 34.0765 42.9388 34.9518 43.5146 35.2854Z"
                                            fill="black" />
                                        <path
                                            d="M25.1654 23.9761V25.9827C25.1654 26.155 24.9622 26.2466 24.8331 26.1327L22.0721 23.6965C21.8894 23.5353 21.6541 23.4464 21.4105 23.4464H16.5485C14.6155 23.4464 13.0485 21.8794 13.0485 19.9464V16.6172C13.0485 14.6842 14.6155 13.1172 16.5485 13.1172H24.0491C25.9821 13.1172 27.5491 14.6842 27.5491 16.6172V21.5924C27.5491 22.6163 26.719 23.4464 25.6951 23.4464C25.4026 23.4464 25.1654 23.6835 25.1654 23.9761Z"
                                            stroke="#D20000" stroke-width="1.5" />
                                        <path d="M16.2263 19.6016H24.5691" stroke="#D20000" stroke-width="1.5"
                                            stroke-linecap="round" />
                                        <path d="M16.2263 17.2166H24.5691" stroke="#D20000" stroke-width="1.5"
                                            stroke-linecap="round" />
                                    </svg>

                                </span>
                                <h3 className="whyus__card--title">Best for Advertising</h3>
                                <p className="whyus__card--desc">
                                    With years of industry experience, we bring in-depth knowledge and innovative solutions
                                    tailored to your needs.
                                </p>
                            </li>
                            <li className="whyus__card">
                                <span className="whyus__card--icon">
                                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="62" height="62" rx="31" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M26.393 40.1053L26.767 41.502L28.1062 41.1482L27.74 39.7825C27.293 39.8803 26.8446 39.9905 26.393 40.1053ZM25.9197 42.25L28.7766 47.2314L26.573 47.7792L23.9069 43.1609L23.311 40.9371L25.4138 40.3629L25.9197 42.25ZM27.1767 42.4393L29.9871 47.3075C30.1562 47.5993 29.9995 47.9733 29.6612 48.054L26.4473 48.8532C26.213 48.9106 25.9755 48.7942 25.8731 48.5862L22.9448 43.482L22.3054 41.0968C20.7846 41.1093 19.4065 40.0928 19.0046 38.5875L18.1588 35.4295C17.6793 33.6324 18.764 31.7593 20.5565 31.2891C26.632 29.6969 29.32 29.222 33.4898 24.2763C33.288 22.4529 36.4988 21.7577 36.9768 23.5407L38.2043 28.1201C42.2501 27.6313 43.7741 33.328 40.0277 34.9267L41.2475 39.4798C41.7379 41.311 38.5286 42.2328 37.8566 40.5847C34.4286 39.3448 32.4747 38.8979 28.7348 39.5823C29.4456 42.2329 29.7109 41.7719 27.1783 42.4392L27.1767 42.4393ZM37.5245 39.3899L33.797 25.4805C30.8314 28.9986 28.454 30.1731 24.0605 31.4023L26.1307 39.1289C30.5643 37.9929 33.2816 37.8564 37.523 39.3896L37.5245 39.3899ZM25.153 39.3868L23.0843 31.6677L20.7892 32.2729C19.4825 32.6376 18.8385 33.9148 19.1442 35.1997L19.9822 38.3252C20.3205 39.5869 21.6241 40.341 22.8888 40.0028C23.6446 39.801 24.3988 39.5916 25.153 39.3868ZM35.1516 23.5422C34.8055 23.6354 34.4269 23.9224 34.5014 24.2034L38.7721 40.1425C38.9304 40.7337 40.4264 40.3302 40.2681 39.7405C38.845 34.4317 37.4778 29.0717 35.9926 23.7859C35.9134 23.5345 35.4681 23.4631 35.1499 23.5423L35.1516 23.5422ZM38.4679 29.1105L39.7606 33.9354C42.1614 32.7451 41.2923 28.9321 38.4679 29.1105ZM41.9115 26.5422L43.5177 23.7597C43.8513 23.1839 42.9761 22.678 42.6425 23.2538L41.0363 26.0363C40.7026 26.612 41.5779 27.1179 41.9115 26.5422ZM44.5248 30.5817L47.6285 29.7498C48.2726 29.5776 48.0103 28.5999 47.3678 28.7722L44.2641 29.604C43.6201 29.7763 43.8824 30.7539 44.5248 30.5817ZM43.5146 35.2854L46.297 36.8916C46.8728 37.2252 47.3787 36.35 46.8029 36.0163L44.0204 34.4102C43.4447 34.0765 42.9388 34.9518 43.5146 35.2854Z"
                                            fill="black" />
                                        <path
                                            d="M25.1654 23.9761V25.9827C25.1654 26.155 24.9622 26.2466 24.8331 26.1327L22.0721 23.6965C21.8894 23.5353 21.6541 23.4464 21.4105 23.4464H16.5485C14.6155 23.4464 13.0485 21.8794 13.0485 19.9464V16.6172C13.0485 14.6842 14.6155 13.1172 16.5485 13.1172H24.0491C25.9821 13.1172 27.5491 14.6842 27.5491 16.6172V21.5924C27.5491 22.6163 26.719 23.4464 25.6951 23.4464C25.4026 23.4464 25.1654 23.6835 25.1654 23.9761Z"
                                            stroke="#D20000" stroke-width="1.5" />
                                        <path d="M16.2263 19.6016H24.5691" stroke="#D20000" stroke-width="1.5"
                                            stroke-linecap="round" />
                                        <path d="M16.2263 17.2166H24.5691" stroke="#D20000" stroke-width="1.5"
                                            stroke-linecap="round" />
                                    </svg>

                                </span>
                                <h3 className="whyus__card--title">Best for Advertising</h3>
                                <p className="whyus__card--desc">
                                    With years of industry experience, we bring in-depth knowledge and innovative solutions
                                    tailored to your needs.
                                </p>
                            </li>
                            <li className="whyus__card">
                                <span className="whyus__card--icon">
                                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="62" height="62" rx="31" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M26.393 40.1053L26.767 41.502L28.1062 41.1482L27.74 39.7825C27.293 39.8803 26.8446 39.9905 26.393 40.1053ZM25.9197 42.25L28.7766 47.2314L26.573 47.7792L23.9069 43.1609L23.311 40.9371L25.4138 40.3629L25.9197 42.25ZM27.1767 42.4393L29.9871 47.3075C30.1562 47.5993 29.9995 47.9733 29.6612 48.054L26.4473 48.8532C26.213 48.9106 25.9755 48.7942 25.8731 48.5862L22.9448 43.482L22.3054 41.0968C20.7846 41.1093 19.4065 40.0928 19.0046 38.5875L18.1588 35.4295C17.6793 33.6324 18.764 31.7593 20.5565 31.2891C26.632 29.6969 29.32 29.222 33.4898 24.2763C33.288 22.4529 36.4988 21.7577 36.9768 23.5407L38.2043 28.1201C42.2501 27.6313 43.7741 33.328 40.0277 34.9267L41.2475 39.4798C41.7379 41.311 38.5286 42.2328 37.8566 40.5847C34.4286 39.3448 32.4747 38.8979 28.7348 39.5823C29.4456 42.2329 29.7109 41.7719 27.1783 42.4392L27.1767 42.4393ZM37.5245 39.3899L33.797 25.4805C30.8314 28.9986 28.454 30.1731 24.0605 31.4023L26.1307 39.1289C30.5643 37.9929 33.2816 37.8564 37.523 39.3896L37.5245 39.3899ZM25.153 39.3868L23.0843 31.6677L20.7892 32.2729C19.4825 32.6376 18.8385 33.9148 19.1442 35.1997L19.9822 38.3252C20.3205 39.5869 21.6241 40.341 22.8888 40.0028C23.6446 39.801 24.3988 39.5916 25.153 39.3868ZM35.1516 23.5422C34.8055 23.6354 34.4269 23.9224 34.5014 24.2034L38.7721 40.1425C38.9304 40.7337 40.4264 40.3302 40.2681 39.7405C38.845 34.4317 37.4778 29.0717 35.9926 23.7859C35.9134 23.5345 35.4681 23.4631 35.1499 23.5423L35.1516 23.5422ZM38.4679 29.1105L39.7606 33.9354C42.1614 32.7451 41.2923 28.9321 38.4679 29.1105ZM41.9115 26.5422L43.5177 23.7597C43.8513 23.1839 42.9761 22.678 42.6425 23.2538L41.0363 26.0363C40.7026 26.612 41.5779 27.1179 41.9115 26.5422ZM44.5248 30.5817L47.6285 29.7498C48.2726 29.5776 48.0103 28.5999 47.3678 28.7722L44.2641 29.604C43.6201 29.7763 43.8824 30.7539 44.5248 30.5817ZM43.5146 35.2854L46.297 36.8916C46.8728 37.2252 47.3787 36.35 46.8029 36.0163L44.0204 34.4102C43.4447 34.0765 42.9388 34.9518 43.5146 35.2854Z"
                                            fill="black" />
                                        <path
                                            d="M25.1654 23.9761V25.9827C25.1654 26.155 24.9622 26.2466 24.8331 26.1327L22.0721 23.6965C21.8894 23.5353 21.6541 23.4464 21.4105 23.4464H16.5485C14.6155 23.4464 13.0485 21.8794 13.0485 19.9464V16.6172C13.0485 14.6842 14.6155 13.1172 16.5485 13.1172H24.0491C25.9821 13.1172 27.5491 14.6842 27.5491 16.6172V21.5924C27.5491 22.6163 26.719 23.4464 25.6951 23.4464C25.4026 23.4464 25.1654 23.6835 25.1654 23.9761Z"
                                            stroke="#D20000" stroke-width="1.5" />
                                        <path d="M16.2263 19.6016H24.5691" stroke="#D20000" stroke-width="1.5"
                                            stroke-linecap="round" />
                                        <path d="M16.2263 17.2166H24.5691" stroke="#D20000" stroke-width="1.5"
                                            stroke-linecap="round" />
                                    </svg>

                                </span>
                                <h3 className="whyus__card--title">Best for Advertising</h3>
                                <p className="whyus__card--desc">
                                    With years of industry experience, we bring in-depth knowledge and innovative solutions
                                    tailored to your needs.
                                </p>
                            </li>
                            <li className="whyus__card">
                                <span className="whyus__card--icon">
                                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="62" height="62" rx="31" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M26.393 40.1053L26.767 41.502L28.1062 41.1482L27.74 39.7825C27.293 39.8803 26.8446 39.9905 26.393 40.1053ZM25.9197 42.25L28.7766 47.2314L26.573 47.7792L23.9069 43.1609L23.311 40.9371L25.4138 40.3629L25.9197 42.25ZM27.1767 42.4393L29.9871 47.3075C30.1562 47.5993 29.9995 47.9733 29.6612 48.054L26.4473 48.8532C26.213 48.9106 25.9755 48.7942 25.8731 48.5862L22.9448 43.482L22.3054 41.0968C20.7846 41.1093 19.4065 40.0928 19.0046 38.5875L18.1588 35.4295C17.6793 33.6324 18.764 31.7593 20.5565 31.2891C26.632 29.6969 29.32 29.222 33.4898 24.2763C33.288 22.4529 36.4988 21.7577 36.9768 23.5407L38.2043 28.1201C42.2501 27.6313 43.7741 33.328 40.0277 34.9267L41.2475 39.4798C41.7379 41.311 38.5286 42.2328 37.8566 40.5847C34.4286 39.3448 32.4747 38.8979 28.7348 39.5823C29.4456 42.2329 29.7109 41.7719 27.1783 42.4392L27.1767 42.4393ZM37.5245 39.3899L33.797 25.4805C30.8314 28.9986 28.454 30.1731 24.0605 31.4023L26.1307 39.1289C30.5643 37.9929 33.2816 37.8564 37.523 39.3896L37.5245 39.3899ZM25.153 39.3868L23.0843 31.6677L20.7892 32.2729C19.4825 32.6376 18.8385 33.9148 19.1442 35.1997L19.9822 38.3252C20.3205 39.5869 21.6241 40.341 22.8888 40.0028C23.6446 39.801 24.3988 39.5916 25.153 39.3868ZM35.1516 23.5422C34.8055 23.6354 34.4269 23.9224 34.5014 24.2034L38.7721 40.1425C38.9304 40.7337 40.4264 40.3302 40.2681 39.7405C38.845 34.4317 37.4778 29.0717 35.9926 23.7859C35.9134 23.5345 35.4681 23.4631 35.1499 23.5423L35.1516 23.5422ZM38.4679 29.1105L39.7606 33.9354C42.1614 32.7451 41.2923 28.9321 38.4679 29.1105ZM41.9115 26.5422L43.5177 23.7597C43.8513 23.1839 42.9761 22.678 42.6425 23.2538L41.0363 26.0363C40.7026 26.612 41.5779 27.1179 41.9115 26.5422ZM44.5248 30.5817L47.6285 29.7498C48.2726 29.5776 48.0103 28.5999 47.3678 28.7722L44.2641 29.604C43.6201 29.7763 43.8824 30.7539 44.5248 30.5817ZM43.5146 35.2854L46.297 36.8916C46.8728 37.2252 47.3787 36.35 46.8029 36.0163L44.0204 34.4102C43.4447 34.0765 42.9388 34.9518 43.5146 35.2854Z"
                                            fill="black" />
                                        <path
                                            d="M25.1654 23.9761V25.9827C25.1654 26.155 24.9622 26.2466 24.8331 26.1327L22.0721 23.6965C21.8894 23.5353 21.6541 23.4464 21.4105 23.4464H16.5485C14.6155 23.4464 13.0485 21.8794 13.0485 19.9464V16.6172C13.0485 14.6842 14.6155 13.1172 16.5485 13.1172H24.0491C25.9821 13.1172 27.5491 14.6842 27.5491 16.6172V21.5924C27.5491 22.6163 26.719 23.4464 25.6951 23.4464C25.4026 23.4464 25.1654 23.6835 25.1654 23.9761Z"
                                            stroke="#D20000" stroke-width="1.5" />
                                        <path d="M16.2263 19.6016H24.5691" stroke="#D20000" stroke-width="1.5"
                                            stroke-linecap="round" />
                                        <path d="M16.2263 17.2166H24.5691" stroke="#D20000" stroke-width="1.5"
                                            stroke-linecap="round" />
                                    </svg>

                                </span>
                                <h3 className="whyus__card--title">Best for Advertising</h3>
                                <p className="whyus__card--desc">
                                    With years of industry experience, we bring in-depth knowledge and innovative solutions
                                    tailored to your needs.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
