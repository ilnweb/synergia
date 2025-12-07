"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import SwitchTab from "../common/dark-light";
import Link from "next/link";
import FormArea from "./form";

const ContactTwo = () => {
    return (
        <>
            <SEO pageTitle="Contact Two" />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title="Contact Two" innerTitle="Contact Two" />
            <div className="contact__two section-padding">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-xl-6 col-lg-5 lg-mb-25">
                            <div className="contact__two-area mr-50 xl-mr-0">
                                <span className="subtitle-one">Contact us</span>
                                <h2>Do you have any question?</h2>
                                <p>For your car we will do everything  advice, repairs and maintenance. We are the some preferred choice by many car owners because</p>
                                <FormArea />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-md-6 mb-25">
                                    <div className="contact__one-item">
                                        <i className="flaticon-telephone-call"></i>
                                        <span>Phone :</span>
                                        <h6><Link href="tel:+123(254)65858">+123(254)658 58</Link></h6>
                                    </div>
                                </div>
                                <div className="col-md-6 md-mb-25">
                                    <div className="contact__one-item">
                                        <i className="flaticon-mail"></i>
                                        <span>Email Address :</span>
                                        <h6><Link href="mailto:help@gmail.com">help@gmail.com</Link></h6>
                                    </div>
                                </div>
                                <div className="col-md-6 md-mb-25">
                                    <div className="contact__one-item">
                                        <i className="flaticon-location-1"></i>
                                        <span>Location :</span>
                                        <h6><Link href="https://google.com/maps">New Jersey 45463</Link></h6>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact__one-item">
                                        <i className="flaticon-wall-clock"></i>
                                        <span>Opening Hours :</span>
                                        <h6>Mon-Fri 09 am-05 PM</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__two-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976383964463!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1652012644726!5m2!1sen!2sbd" loading="lazy"></iframe>
            </div>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ContactTwo;