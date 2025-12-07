import blogData from '@/components/data/blog-data';
import Link from 'next/link';

const Blog = () => {
    const blogContent = {
        subtitle: 'From The Blog',
        title: 'Latest News & Blog',
        btn_text: 'See more blog',
        btn_url: '/blog'
    }
    return (
        <div className="blog__one section-padding">
            <div className="container">
                <div className="row al-end mb-35">
                    <div className="col-lg-8 lg-mb-25">
                        <div className="blog__one-title lg-t-center">
                            <span className="subtitle-one">{blogContent.subtitle}</span>
                            <h2>{blogContent.title}</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog__one-btn t-right lg-t-center">
                            <Link className="btn-one" href={blogContent.btn_url}>{blogContent.btn_text}</Link>
                        </div>
                    </div>
                </div>
                <div className="row dark_image">
                    {blogData.slice(0, 3)?.map((data, id) => (
                        <div className="col-xl-4 col-lg-6" key={id}>
                            <div className="blog__one-item">
                                <div className="blog__one-item-image">
                                    <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="blog" /></Link>
                                </div>
                                <div className="blog__one-item-content">
                                    <div className="blog__one-item-content-date">
                                        <h6>{data.date}</h6>
                                        <span>Apr</span>
                                    </div>
                                    <div className="blog__one-item-content-meta">
                                        <ul>
                                            <li><a href="#"><i className="far fa-user"></i>By-Admin</a></li>
                                            <li><a href="#"><i className="far fa-comment-dots"></i>Comments ({data.comment})</a></li>
                                        </ul>
                                    </div>
                                    <h6><Link href={`/blog/${data.id}`}>{data.title}</Link></h6>
                                    <Link className="simple-btn" href={`/blog/${data.id}`}>Read More<i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;