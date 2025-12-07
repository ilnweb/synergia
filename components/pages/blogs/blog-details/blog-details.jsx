import Link from 'next/link';
import Social from '@/components/data/social';
import blogData from '@/components/data/blog-data';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import image1 from '../../../../public/assets/img/blog/details.jpg';
import avatar1 from '../../../../public/assets/img/avatar/avatar-1.jpg';
import avatar2 from '../../../../public/assets/img/avatar/avatar-2.jpg';
import avatar3 from '../../../../public/assets/img/avatar/avatar-3.jpg';

const BlogSingleMain = ({singleData}) => {
    const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '..';

    return (
        <>
            <div className="blog__details dark__image section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 lg-mb-50">
                            <div className="blog__details-left dark_image">
                                <img className="img__full" src={singleData.image.src} alt="blog-details-image" />
                                <div className="blog__details-left-meta">
                                    <div className="blog__details-left-meta-left">
                                        <div className="author">
                                            <div className="author-avatar">
                                                <img src={singleData.avatar.src} alt="avatar" />
                                            </div>
                                            <div className="author-info">
                                                <span>{singleData.position}</span>
                                                <h6>{singleData.name}</h6>
                                            </div>
                                        </div>                                
                                    </div>
                                    <div className="blog__details-left-meta-content">
                                        <span>Date :</span>
                                        <h6>April {singleData.date}, 2024</h6>
                                    </div>
                                    <div className="blog__details-left-meta-content">
                                        <span>Category</span>
                                        <h6>{category}</h6>
                                    </div>
                                </div>
                                <h3 className="mb-20">{singleData.title}</h3>
                                <p>Discover the latest innovations in solar technology that are driving a wave of positive change across the globe. From photovoltaic advancements to smart grid integration, we delve into the cutting-edge solutions that make solar energy an increasingly viable and accessible option. Learn how solar power not only reduces our dependence on traditional energy sources but also,</p>                  
                                <p>Our blog goes beyond the technical aspects, offering insights into the economic and societal impact of widespread solar adoption. Explore success stories, case studies, and real-world applications that showcase how solar energy is not just an eco-friendly choice but a practical and economically sound investment.</p>
                                <div className="blog__details-left-box">
                                <i className="fa-sharp fa-solid fa-ditto"></i>
                                    <div>
                                        <h5>Design is a comprehensive approach to creating digital products that are both visually</h5>                                
                                        <span>Kristin Watson</span>
                                    </div>
                                </div>
                                <h4 className="mb-20">Sunrise Choices Solar Voices</h4>
                                <p>Embark on a journey through the sunrise of possibilities as we delve into sustainable practices, energy-efficient technologies, and the myriad choices available to individuals and businesses seeking a greener path. From residential solar installations to large-scale solar farms, our blog sheds light on the diverse ways solar energy is making its mark on the world.</p>
                                <div className="row mt-35 mb-30">
                                    <div className="col-12">                                        
                                        <img className="img__full" src={image1.src} alt="blog-image" />
                                    </div>
                                </div>
                                <p>Discover the voices advocating for solar solutions – from industry experts and environmental enthusiasts to the communities benefitting from solar initiatives. We share stories that inspire change, emphasizing the importance of collective voices in shaping a sustainable future.</p>
                                <p>Join us on a journey through the sunrise of possibilities as we explore the various choices available in the realm of solar energy. From residential solar solutions to innovative technologies,</p>
                                <div className="blog__details-left-tag">
                                    <h6>Related Tags :</h6>
                                    <div className="all__sidebar-item-tag">
                                        <ul>
                                            {blogData.slice(0, 3).map((data, id) => {
                                                const words = data.title.split(' ');
                                                const firstWord = words[0];
                                                const newTitle = words.find(word => word.length > 3) || firstWord;
                                                return (
                                                    <li key={id}>
                                                        <Link href={`/blog/${data.id}`}>{newTitle}</Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__details-left-author">
                                    <div className="blog__details-left-author-image">
                                        <img src={avatar1.src} alt="avatar" />
                                    </div>
                                    <div className="blog__details-left-author-content">
                                        <h6>Joshua Harvey</h6>
                                        <p>Starting a product design from scratch is an iterative process that may involve multiple cycles of design,</p>
                                        <div className="social__icon">
                                           <Social />
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__details-left-comment mt-60">
                                    <h5 className="mb-30">Comments (2)</h5>
                                    <div className="blog__details-left-comment-item">
                                        <div className="blog__details-left-comment-item-comment">
                                            <div className="blog__details-left-comment-item-comment-image">
                                                <img src={avatar2.src} alt="avatar-image" />									
                                            </div>									
                                            <div className="blog__details-left-comment-item-comment-content">
                                                <h6>Guy Hawkins<Link href="#"><i className="far fa-reply-all"></i>Reply</Link></h6>
                                                <span>20 April, 2024  At 9:PM</span>
                                                <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog__details-left-comment-item ml-65 sm-ml-0">
                                        <div className="blog__details-left-comment-item-comment">
                                            <div className="blog__details-left-comment-item-comment-image">
                                                <img src={avatar3.src} alt="avatar-image" />
                                            </div>									
                                            <div className="blog__details-left-comment-item-comment-content">
                                                <h6>Kristin Watson<Link href="#"><i className="far fa-reply-all"></i>Reply</Link></h6>
                                                <span>22 April, 2024  At 7:PM</span>
                                                <p>Pellentesque a placerat orci. Suspendisse rutrum lacus ipsum, eu vulputate augue blandit mollis.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__details-left-contact mt-60">
                                    <h5>Post Comment</h5>
                                    <p className="mb-30">Your email address will not be published. Required fields are marked</p>
                                    <div className="blog__details-left-contact-form">
                                        <form action="#">	
                                            <div className="row">
                                                <div className="col-sm-6 mb-30"> 
                                                    <div className="blog__details-left-contact-form-item contact-item">                                                
                                                        <input type="text" name="name" placeholder="Full Name" required="required" />
                                                    </div>										
                                                </div>
                                                <div className="col-sm-6 sm-mb-30">
                                                    <div className="blog__details-left-contact-form-item contact-item">                                                
                                                        <input type="text" name="email" placeholder="Email Address" required="required" />											
                                                    </div>									
                                                </div>
                                                <div className="col-sm-12 mb-30"> 
                                                    <div className="blog__details-left-contact-form-item contact-item">                                                
                                                        <input type="text" placeholder="Subject" required="required" />
                                                    </div>										
                                                </div>
                                                <div className="col-sm-12 mb-30"> 
                                                    <div className="blog__details-left-contact-form-item contact-item">                                                
                                                        <textarea name="message" placeholder="Type your comments...."></textarea>
                                                    </div>										
                                                </div>
                                                <div className="col-lg-12">										
                                                    <div className="blog__details-left-contact-form-item">
                                                        <button className="btn-one" type="submit">Submit Comment</button>
                                                    </div>										
                                                </div>
                                            </div>							
                                        </form>	
                                    </div>						
                                </div>                        
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>          
        </>
    );
};

export default BlogSingleMain;