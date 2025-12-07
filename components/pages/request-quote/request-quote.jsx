
"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination} from 'swiper/modules';
import image1 from "../../../public/assets/img/team/team-1.jpg";
import image3 from "../../../public/assets/img/team/team-3.jpg";
import image2 from "../../../public/assets/img/team/team-2.jpg";

const RequestQuoteMain = () => {
    const slideControl = {
        spaceBetween: 25,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },		
        autoplay: {
            delay: 4000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
    };
    return (
    <div className="request__quote-page section-padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 xl-mb-30">
                <div className="request__quote-page-left">
                    <h3>Share your requirements...</h3>
                    <p>This is a good first step. We promise we will get back to you within one business day.</p>
                    <h4>Basic Information</h4>
                    <form action="#">
                        <div className="row">
                            <div className="col-md-6 mb-30">
                                <div className="request__quote-page-item">
                                    <input type="text" name="name" placeholder="Your Full Name" required="required" />
                                    <label className="request__quote-page-item-label">Full Name<span> *</span></label>
                                </div>
                            </div>
                            <div className="col-md-6 lg-mb-30">
                                <div className="request__quote-page-item">
                                    <input type="email" name="email" placeholder="Email Address" required="required" />
                                    <label className="request__quote-page-item-label">Email Address<span> *</span></label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-30">
                                <div className="request__quote-page-item">
                                    <input type="text" placeholder="Business/Company Name" required="required" />
                                    <label className="request__quote-page-item-label">Company/Organization<span> *</span></label>
                                </div>
                            </div>
                            <div className="col-md-6 lg-mb-30">
                                <div className="request__quote-page-item">
                                    <input type="text" placeholder="Phone Number" name="number" required="required" />
                                    <label className="request__quote-page-item-label">Phone Number<span> *</span></label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <h4>Requirement & Services</h4>
                            </div>
                            <div className="col-md-12 mb-30">
                                <div className="request__quote-page-item">
                                    <textarea name="message" placeholder="Describe your idea or project briefly"></textarea>
                                    <label className="request__quote-page-item-label">Message ( describe your requirements.... )<span> *</span></label>
                                </div>
                            </div>
                            <div className="col-md-12 mb-30">
                                <div className="request__quote-page-item">
                                    <input type="text" placeholder="Current Website URL (if any)" required="required" />
                                    <label className="request__quote-page-item-label">Website URL<span> *</span></label>
                                </div>
                            </div>
                            <div className="col-md-12 mb-30">
                                <p className="mb-20">What services can we provide you?<span> *</span></p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="request__quote-page-services">
                                            <label className="space"><input type="checkbox" /><span>Optimization (SEO)</span></label>
                                            <label className="space"><input type="checkbox" /><span>Web Design</span></label>
                                            <label className="space"><input type="checkbox" /><span>Web Hosting</span></label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="request__quote-page-services">
                                            <label className="space"><input type="checkbox" /><span>Content Writing</span></label>
                                            <label className="space"><input type="checkbox" /><span>Engine Marketing</span></label>
                                            <label className="space"><input type="checkbox" /><span>Social Media</span></label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="request__quote-page-services">
                                            <label className="space"><input type="checkbox" /><span>ADA Compliance</span></label>
                                            <label className="space"><input type="checkbox" /><span>Photography / Video</span></label>
                                            <label className="space"><input type="checkbox" /><span>Email Marketing</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>							
                            <div className="col-lg-12">
                                <h6 className="mb-10">Join our email list?</h6>
                                <label className="space"><input type="checkbox" /><span>Join our mailing list to get our blog updates. You can unsubscribe at any time. We respect your privacy and will never share your information.</span></label>
                                <button className="btn-one mt-30" type="submit">Submit Request</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
				<div className="col-xl-4">
					<div className="request__quote-page-right dark_image">
                        <Swiper modules={[EffectFade, Autoplay, Pagination]} {...slideControl}>
                            <SwiperSlide>
								<div className="request__quote-page-right-item">
									<div className="request__quote-page-right-item-icon">
										<i className="flaticon-straight-quotes"></i>
									</div>
									<p>A good design review should be well-organized and structured, with a clear introduction that explains the purpose of the review and sets the context for the evaluation. The reviewer should provide a detailed analysis of the product's design, including its layout, color scheme..</p>
									<div className="request__quote-page-right-item-bottom">
										<img src={image1.src} alt="quote-image" />
										<div className="request__quote-page-right-item-bottom-name">
											<h6>Boris Elbert</h6>
											<span>Microsave (Uk)</span>
										</div>
									</div>
								</div>
                            </SwiperSlide>
                            <SwiperSlide>
								<div className="request__quote-page-right-item">
									<div className="request__quote-page-right-item-icon">
										<i className="flaticon-straight-quotes"></i>
									</div>
									<p>In addition to analyzing the visual aspects of the design, a high-quality review should also evaluate the product's functionality, assessing how well it performs its intended tasks and how user-friendly it is. The reviewer should consider factors such as ease of use, intuitive navigation..</p>
									<div className="request__quote-page-right-item-bottom">
										<img src={image3.src} alt="quote-image" />
										<div className="request__quote-page-right-item-bottom-name">
											<h6>Derya Kurtulus</h6>
											<span>Max Pension (Canada)</span>
										</div>
									</div>
								</div>
                            </SwiperSlide>
                            <SwiperSlide>
								<div className="request__quote-page-right-item">
									<div className="request__quote-page-right-item-icon">
										<i className="flaticon-straight-quotes"></i>
									</div>
									<p>A good review should be structured in a clear and organized way, with an introduction that sets the context and explains the purpose of the review, a detailed analysis of the product's features and performance, and a conclusion that summarizes the key findings and provides..</p>
									<div className="request__quote-page-right-item-bottom">
										<img src={image2.src} alt="quote-image" />
										<div className="request__quote-page-right-item-bottom-name">
											<h6>Archer Graham</h6>
											<span>Venture (USA)</span>
										</div>
									</div>
								</div>		
                            </SwiperSlide>
						</Swiper>
						<div className="swiper-pagination"></div>
					</div>
				</div>
            </div>
        </div>
    </div>
    );
};

export default RequestQuoteMain;