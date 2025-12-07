import Link from "next/link";
import SkillBarItem from "../../common/skill-bar";
import FormArea from "../../contacts/form";

const TeamSingleMain = ({teamDetails}) => {
    
    return (
        <div className="team__details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 lg-mb-30">
                        <div className="team__details-left">
                            <div className="team__details-left-thumb dark_image">
                                <img src={teamDetails.image.src} alt="image" />
                            </div>
                            <div className="team__details-left-info">
                                <span>{teamDetails?.position}</span>
                                <h4>{teamDetails?.name}</h4>
                                <div className="team__details-left-info-contact">
                                    <div className="team__details-left-info-contact-item">
                                        <i className="far fa-envelope"></i>
                                        <div className="team__details-left-info-contact-item-info">
                                            <span>Quick Email</span>
                                            <h6><Link href={`mailto:${teamDetails?.mail}`}>{teamDetails?.mail}</Link></h6>
                                        </div>
                                    </div>
                                    <div className="team__details-left-info-contact-item">
                                        <i className="fal fa-phone-alt"></i>
                                        <div className="team__details-left-info-contact-item-info">
                                            <span>Tell With US</span>
                                            <h6><Link href={`tel:${teamDetails?.phone}`}>{teamDetails?.phone}</Link></h6>
                                        </div>
                                    </div>
                                    <div className="team__details-left-info-contact-item">
                                        <i className="far fa-map-marker-alt"></i>
                                        <div className="team__details-left-info-contact-item-info">
                                            <span>Office Location</span>
                                            <h6><Link href="https://www.google.com/maps" target="_blank">PV3M+X68, United Kingdom</Link></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="social__icon">
                                    <ul>
                                        {teamDetails?.social_link.map((social, id) => (
                                            <li key={id}><Link href={social.link} target={social.target}>{social.icon}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="team__details-right ml-20 xl-ml-0">
                            <div className="team__details-right-experience">
                                <h3>Career Guidelines</h3>
                                <p>This involves assessing one's skills, interests, values, and personality traits to identify suitable career paths. Self-assessment can be done through career tests, online resources, or working with a career counselor.</p>
                                <p>Employers look for candidates with specific skills and abilities. Individuals should focus on developing the skills and competencies needed for their desired career through education, training, and work experience.</p>
                                <p>Different careers require different levels of education and training. Individuals should research the educational requirements for their desired career and develop a plan to acquire the necessary education and credentials. Continuing education and professional development.</p>
                            </div>
                            <div className="team__details-right-skill">
                                <h3>Professional Skills</h3>
                                <p>These are the skills required to operate specific tools, software, or equipment in a particular field. For example, a web developer needs to have technical skills in programming languages like HTML, CSS, and JavaScript.</p>
                                <div className="skill__area">
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <h6>Business Consulting</h6>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={78} />
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <h6>Human Resource</h6>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={65} />
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <h6>Web Application</h6>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={85} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact__form-area mt-40">
                                <FormArea />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSingleMain;