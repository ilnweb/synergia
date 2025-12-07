import blogData from '@/components/data/blog-data';
import Link from 'next/link';

const Blog = () => {
    return (
        <div className="blog__two section-padding">
            <div className="container">
                <div className="row al-end mb-35">
                    <div className="col-xl-12">
                        <div className="blog__two-title t-center">
                            <span className="subtitle-two">FROM THE BLOG</span>
                            <h2>Latest News & Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row dark_image">
                    {blogData.slice(0, 3)?.map((data, id) => (
                        <div className="col-lg-4 col-md-6" key={id}>
                            <div className="blog__two-item">
                                <div className="blog__two-item-image">
                                    <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="image" /></Link>
                                </div>
                                <div className="blog__two-item-content">
                                    <div className="blog__two-item-content-meta">
                                        <ul>
                                            <li><span><i className="fa-regular fa-horizontal-rule"></i>By Admin</span></li>
                                            <li>Apr {data.date}, 2024</li>
                                        </ul>
                                    </div>
                                    <h6><Link href={`/blog/${data.id}`}>{data.title}</Link></h6>
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