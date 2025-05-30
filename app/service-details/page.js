'use client'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ServiceDetails() {
    const [activeItem, setActiveItem] = useState(1)
    const searchParams = useSearchParams()
    const [selectedService, setSelectedService] = useState('cloud-services')

    useEffect(() => {
        const service = searchParams.get('service')
        if (service) {
            setSelectedService(service)
        }
    }, [searchParams])

    const handleClick = (index) => {
        setActiveItem(index)
    }

    const serviceDetails = {
        'social-media-marketing': {
            title: 'Social Media Marketing',
            description: 'Our social media marketing services help businesses build their online presence and engage with their target audience effectively. We create and manage compelling social media campaigns that drive brand awareness and customer engagement.',
            longDescription: 'We develop comprehensive social media strategies tailored to your business goals, including content creation, community management, paid advertising, and performance analytics. Our team ensures your brand maintains a strong and consistent presence across all major social platforms.',
            benefits: [
                'Strategic Social Media Planning',
                'Content Creation & Management',
                'Community Engagement',
                'Performance Analytics & Reporting'
            ],
            image: '/assets/img/service/details-1.jpg',
            videoImage: '/assets/img/service/details-video.jpg'
        },
        'app-development': {
            title: 'App Development',
            description: 'Our app development services deliver innovative and user-friendly mobile applications that help businesses connect with their customers and streamline operations. We create both iOS and Android applications using the latest technologies.',
            longDescription: 'From concept to deployment, our development team ensures your app meets the highest standards of quality and performance. We focus on creating intuitive user experiences and robust functionality that aligns with your business objectives.',
            benefits: [
                'Native & Cross-Platform Development',
                'UI/UX Design',
                'Quality Assurance',
                'App Store Optimization'
            ],
            image: '/assets/img/service/details-2.jpg',
            videoImage: '/assets/img/service/details-video.jpg'
        },
        'seo-services': {
            title: 'SEO Services',
            description: 'Our SEO services help businesses improve their online visibility and drive organic traffic to their websites. We implement proven strategies to enhance search engine rankings and increase qualified leads.',
            longDescription: 'We conduct comprehensive SEO audits, develop targeted keyword strategies, and optimize your website content to improve search engine rankings. Our data-driven approach ensures measurable results and sustainable growth.',
            benefits: [
                'Technical SEO Optimization',
                'Content Strategy',
                'Keyword Research',
                'Performance Tracking'
            ],
            image: '/assets/img/service/details-3.jpg',
            videoImage: '/assets/img/service/details-video.jpg'
        },
        'cloud-services': {
            title: 'Cloud Services',
            description: 'Our cloud services provide scalable and flexible solutions that enable businesses to optimize their IT infrastructure while reducing costs. We offer comprehensive cloud migration, management, and optimization services.',
            longDescription: 'With our cloud solutions, you can enhance your business agility, improve collaboration, and ensure data security. Our team of experts helps you leverage the power of cloud computing to drive innovation and growth.',
            benefits: [
                'Cloud Migration',
                'Infrastructure Management',
                'Security & Compliance',
                '24/7 Cloud Support'
            ],
            image: '/assets/img/service/details-1.jpg',
            videoImage: '/assets/img/service/details-video.jpg'
        },
        'database-security': {
            title: 'Database Security',
            description: 'Our database security services protect your critical business data from unauthorized access and potential threats. We implement robust security measures to ensure your data remains safe and compliant with industry standards.',
            longDescription: 'We provide comprehensive database security solutions including access control, encryption, monitoring, and backup strategies. Our team ensures your data is protected while maintaining optimal performance and accessibility.',
            benefits: [
                'Data Encryption',
                'Access Control',
                'Security Monitoring',
                'Compliance Management'
            ],
            image: '/assets/img/service/details-2.jpg',
            videoImage: '/assets/img/service/details-video.jpg'
        }
    }

    const currentService = serviceDetails[selectedService] || serviceDetails['cloud-services']

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle={`${currentService.title} Details`}>
                <section className="service-details-section fix section-padding">
                    <div className="container">
                        <div className="service-details-wrapper">
                            <div className="row g-4">
                                <div className="col-12 col-lg-4 order-2 order-md-1">
                                    <div className="main-sidebar">
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>All Services</h3>
                                            </div>
                                            <div className="widget-categories">
                                                <ul>
                                                    <li className={selectedService === 'social-media-marketing' ? 'active' : ''}>
                                                        <Link href="/service-details?service=social-media-marketing">Social Media Marketing</Link>
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </li>
                                                    <li className={selectedService === 'app-development' ? 'active' : ''}>
                                                        <Link href="/service-details?service=app-development">App Development</Link>
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </li>
                                                    <li className={selectedService === 'seo-services' ? 'active' : ''}>
                                                        <Link href="/service-details?service=seo-services">SEO Services</Link>
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </li>
                                                    <li className={selectedService === 'cloud-services' ? 'active' : ''}>
                                                        <Link href="/service-details?service=cloud-services">Cloud Services</Link>
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </li>
                                                    <li className={selectedService === 'database-security' ? 'active' : ''}>
                                                        <Link href="/service-details?service=database-security">Database Security</Link>
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>Opening Hours</h3>
                                            </div>
                                            <div className="opening-category">
                                                <ul>
                                                    <li><i className="fa-regular fa-clock" />Mon - Sat: 10.00 AM - 4.00 PM</li>
                                                    <li><i className="fa-regular fa-clock" />Sun:  09.00 AM - 4.00 PM</li>
                                                    <li><i className="fa-regular fa-clock" />Friday: Closed</li>
                                                    <li><i className="fa-regular fa-clock" />Emergency: 24 hours</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("assets/img/service/post.jpg")' }}>
                                            <div className="contact-text">
                                                <div className="icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <h4>Need Help? Call Here</h4>
                                                <h5>
                                                    <Link href="/tel:+2085550112">+208-555-0112</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8 order-1 order-md-2">
                                    <div className="service-details-items">
                                        <div className="details-image">
                                            <img src={currentService.image} alt={currentService.title} />
                                        </div>
                                        <div className="details-content">
                                            <h3>{currentService.title}</h3>
                                            <p className="mt-3">
                                                {currentService.description}
                                            </p>
                                            <p className="mt-3">
                                                {currentService.longDescription}
                                            </p>
                                            <div className="details-video-items">
                                                <div className="video-thumb">
                                                    <img src={currentService.videoImage} alt="video thumbnail" />
                                                    <VideoPopup style={1} />
                                                </div>
                                                <div className="content">
                                                    <h4>Benefits With Our {currentService.title}</h4>
                                                    <p>Transform your business with our comprehensive solutions</p>
                                                    <ul className="list">
                                                        {currentService.benefits.map((benefit, index) => (
                                                            <li key={index}>
                                                                <i className="fa-regular fa-circle-check" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <h3>Most Common Questions</h3>
                                            <p className="mt-3">
                                                Get answers to frequently asked questions about our {currentService.title.toLowerCase()} and how we can help your business grow.
                                            </p>
                                        </div>
                                        <div className="faq-content style-3">
                                            <div className="faq-accordion">
                                                <div className="accordion" id="accordion">
                                                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(1)}>
                                                            <button className={activeItem == 1 ? "accordion-button" : "accordion-button collapsed"}>
                                                                What are the key features of your {currentService.title.toLowerCase()}?
                                                            </button>
                                                        </h5>
                                                        <div id="faq1" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                                                            <div className="accordion-body">
                                                                Our {currentService.title.toLowerCase()} include {currentService.benefits.join(', ')}. We provide comprehensive solutions tailored to your specific business needs.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(2)}>
                                                            <button className={activeItem == 2 ? "accordion-button" : "accordion-button collapsed"}>
                                                                How can I get started with your {currentService.title.toLowerCase()}?
                                                            </button>
                                                        </h5>
                                                        <div id="faq2" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                Getting started is easy! Contact our team for a consultation, and we'll help you understand how our {currentService.title.toLowerCase()} can benefit your business.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                                        <h5 className="accordion-header" onClick={() => handleClick(3)}>
                                                            <button className={activeItem == 3 ? "accordion-button" : "accordion-button collapsed"}>
                                                                What kind of support do you provide?
                                                            </button>
                                                        </h5>
                                                        <div id="faq3" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                            <div className="accordion-body">
                                                                We provide 24/7 technical support, regular maintenance, and proactive monitoring to ensure your systems run smoothly and efficiently.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}