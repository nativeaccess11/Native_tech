'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-2",
        clickable: true,
    },
}

export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-section section-padding fix">
                <div className="container">
                    <div className="testimonial-wrapper">
                        <div className="swiper testimonial-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched. They delivered our project on time and exceeded our expectations in every way. I highly recommend their services to anyone looking for professional IT solutions.
                                            </p>
                                            <div className="author-details">
                                                <h5>Kathryn Murphy</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                The level of expertise and professionalism demonstrated by this team is outstanding. They not only met our technical requirements but also provided valuable insights that improved our overall solution. Their responsive support and clear communication made the entire process smooth and efficient.
                                            </p>
                                            <div className="author-details">
                                                <h5>Kathryn Murphy</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                I'm extremely impressed with the quality of service and technical knowledge of this team. They helped us transform our digital infrastructure and the results have been remarkable. Their innovative approach and problem-solving skills are truly commendable.
                                            </p>
                                            <div className="author-details">
                                                <h5>Kathryn Murphy</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                This team's dedication to delivering high-quality solutions is evident in their work. They took the time to understand our unique needs and provided a customized solution that perfectly fits our business requirements. Their ongoing support and maintenance services are exceptional.
                                            </p>
                                            <div className="author-details">
                                                <h5>Kathryn Murphy</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="swiper-dot-2">
                            <div className="dot-2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
