import React, { useState } from 'react';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import Pagination from '../blog/pagination';
import blogData from '../../../data/blog-data';
import Link from 'next/link';


const BlogStandardMain = () => {
    const blogItemShow = 2;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(blogData.length / blogItemShow);
    const startIndex = currentPage * blogItemShow;
    const endIndex = startIndex + blogItemShow;
    const currentBlogItems = blogData.slice(startIndex, endIndex);
    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div className="blog__standard dark_image section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 lg-mb-50">
                        <div className="blog__standard-left">
                            {currentBlogItems?.map((data, id) => (
                                <div className="blog__standard-item" key={id}>
                                    <div className="blog__standard-item-image">
                                        <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="image" /></Link>
                                    </div>
                                    <div className="blog__standard-item-content">
                                        <div className="blog__standard-item-content-meta">
                                            <ul>
                                                <li><Link href="#"><i className="fal fa-user"></i>Admin</Link></li>
                                                <li><Link href="#"><i className="fal fa-calendar-alt"></i>{data.date}, April 2024</Link></li>
                                                <li><Link href="#"><i className="fal fa-comment-dots"></i>{data.comment} Comment</Link></li>
                                            </ul>
                                        </div>
                                        <h5><Link href={`/blog/${data.id}`}>{data.title}</Link></h5>
                                        <p>Utilizing solar panels to capture photovoltaic energy converts sunlight directly into electricity without releasing pollutants into the atmosphere.</p>                        
                                        <Link className="btn-one" href={`/blog/${data.id}`}>Read Details</Link>
                                    </div> 
                                </div>
                            ))}
                        </div>
                    <Pagination
                        currentPage={currentPage}
                        handlePrevPage={handlePrevPage}
                        totalPages={totalPages}
                        handleNextPage={handleNextPage}
                        setCurrentPage={setCurrentPage}
                    />
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStandardMain;