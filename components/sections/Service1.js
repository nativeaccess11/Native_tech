'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Service1() {
    return (
        <>
            <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}  id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">IT services</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                We Solve IT Problems <br /> With Technology
                            </h2>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Database Security
                                                </Link>
                                            </h4>
                                            <p>
                                            We provide robust database security solutions to protect your critical data from unauthorized access, breaches, and corruption...
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    IT Consultancy
                                                </Link>
                                            </h4>
                                            <p>
                                            Our IT consultancy services help businesses align technology with strategic goals... 
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Cyber Security
                                                </Link>
                                            </h4>
                                            <p>
                                            Protect your digital assets with our comprehensive cybersecurity services...    
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=app-development">
                                                    App Development
                                                </Link>
                                            </h4>
                                            <p>
                                            We develop custom mobile and web applications with cutting-edge features and seamless user experience...
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=website-development">
                                                    Website Development
                                                </Link>
                                            </h4>
                                            <p>
                                            We create responsive, modern websites that drive business growth with cutting-edge design and functionality...
                                            </p>
                                            <Link href="/service-details?service=website-development" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Cloud Services
                                                </Link>
                                            </h4>
                                            <p>
                                            Transform your business with scalable cloud solutions, ensuring flexibility, security, and cost-effectiveness...
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    IT Infrastructure
                                                </Link>
                                            </h4>
                                            <p>
                                            Comprehensive IT infrastructure management to ensure your systems run smoothly and efficiently...
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=digital-marketing">
                                                    Digital Marketing
                                                </Link>
                                            </h4>
                                            <p>
                                            Comprehensive digital marketing solutions to grow your brand and reach your target audience effectively...
                                            </p>
                                            <Link href="/service-details?service=digital-marketing" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=seo-services">
                                                    SEO Services
                                                </Link>
                                            </h4>
                                            <p>
                                            Boost your online visibility with our comprehensive SEO strategies and optimization techniques...
                                            </p>
                                            <Link href="/service-details?service=seo-services" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Social Media Marketing
                                                </Link>
                                            </h4>
                                            <p>
                                            Engage your audience and build brand presence through strategic social media campaigns...
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Content Marketing
                                                </Link>
                                            </h4>
                                            <p>
                                            Create compelling content that resonates with your audience and drives business growth...
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    PPC Advertising
                                                </Link>
                                            </h4>
                                            <p>
                                            Maximize ROI with targeted pay-per-click advertising campaigns across multiple platforms...
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=app-development">
                                                    App Development
                                                </Link>
                                            </h4>
                                            <p>
                                            We develop custom mobile and web applications with cutting-edge features and seamless user experience...
                                            </p>
                                            <Link href="/service-details?service=app-development" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=seo-services">
                                                    SEO Services
                                                </Link>
                                            </h4>
                                            <p>
                                            Boost your online visibility with our comprehensive SEO strategies and optimization techniques...
                                            </p>
                                            <Link href="/service-details?service=seo-services" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=digital-marketing">
                                                    Digital Marketing
                                                </Link>
                                            </h4>
                                            <p>
                                            Comprehensive digital marketing solutions to grow your brand and reach your target audience effectively...
                                            </p>
                                            <Link href="/service-details?service=digital-marketing" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=cloud-services">
                                                    Cloud Services
                                                </Link>
                                            </h4>
                                            <p>
                                            Transform your business with scalable cloud solutions, ensuring flexibility, security, and cost-effectiveness...
                                            </p>
                                            <Link href="/service-details?service=cloud-services" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=cyber-security">
                                                    Cyber Security
                                                </Link>
                                            </h4>
                                            <p>
                                            Protect your digital assets with our comprehensive cybersecurity services and advanced threat protection...
                                            </p>
                                            <Link href="/service-details?service=cyber-security" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=ui-ux-design">
                                                    UI/UX Design
                                                </Link>
                                            </h4>
                                            <p>
                                            Create engaging user experiences with our professional UI/UX design services...
                                            </p>
                                            <Link href="/service-details?service=ui-ux-design" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details?service=it-consulting">
                                                    IT Consulting
                                                </Link>
                                            </h4>
                                            <p>
                                            Expert IT consulting services to help your business leverage technology effectively...
                                            </p>
                                            <Link href="/service-details?service=it-consulting" className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                            <h6>
                                Need Any Kind Of IT Solution For Your Business.  <Link href="/service">View Services </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
