import blogData from '@/components/data/blog-data';
import Link from 'next/link';

const Blog = () => {
    return (
        <>
        <div className="blog__three section-padding">
            <div className="container">
                <div className="row al-end mb-35">
                    <div className="col-xl-12">
                        <div className="blog__three-title t-center">
                            <span className="subtitle-three">Blog & News</span>
                            <h2>Latest News & Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row dark_image">
                    {blogData.slice(0, 3)?.map((data, id) => (
                        <div className="col-lg-4 col-md-6" key={id}>
                            <div className="blog__three-item">
                                <div className="blog__three-item-image">
                                    <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="blog" /></Link>
                                </div>
                                <div className="blog__three-item-content">
                                    <h5>{data.date}<span>Apr</span></h5>
                                    <div className="blog__three-item-content-author">
                                        <img src={data.avatar.src} alt="avatar" />
                                        <div className="blog__three-item-content-author-info">
                                            <h6>{data.name}</h6>
                                            <span>{data.position}</span>
                                        </div>
                                    </div>
                                    <h6><Link href={`/blog/${data.id}`}>{data.title}</Link></h6>
                                    <Link className="btn-three" href={`/blog/${data.id}`}>Read More<i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>			
            </div>
        </div>       
        </>
    );
};

export default Blog;