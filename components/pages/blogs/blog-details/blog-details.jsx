import BlogSidebar from '../blog-sidebar/blog-sidebar';
import image1 from '../../../../public/assets/img/blog/details.jpg';
import { STRAPI_URL } from '@/services/blogService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './markdown-styles.css';

const BlogSingleMain = ({ singleData }) => {
  // Handle both Strapi v5 flat structure and legacy structure
  const blog = singleData.attributes || singleData;
  const category = blog.Title ? blog.Title.split(' ').slice(0, 2).join(' ') + '..' : 'Blog';

  return (
    <>
      <div className='blog__details dark__image section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 col-lg-8 lg-mb-50'>
              <div className='blog__details-left dark_image'>
                {/* Blog Header Image */}
                {/* <img
                  className='img__full'
                  src={blog.HeaderImage?.url ? `${STRAPI_URL}${blog.HeaderImage.url}` : image1.src}
                  alt='blog-details-image'
                /> */}

                {/* <div className='blog__details-left-meta'>
                  <div className='blog__details-left-meta-left'>
                    <div className='author'>
                      <div className='author-avatar'>
                        <img src={avatar1.src} alt='avatar' />
                      </div>
                      <div className='author-info'>
                        <span>Author</span>
                        <h6>Admin</h6>
                      </div>
                    </div>
                  </div>
                  <div className='blog__details-left-meta-content'>
                    <span>Date :</span>
                    <h6>
                      {blog.publishedAt
                        ? new Date(blog.publishedAt).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        : 'April 1, 2024'}
                    </h6>
                  </div>
                  <div className='blog__details-left-meta-content'>
                    <span>Category</span>
                    <h6>{category}</h6>
                  </div>
                </div> */}

                {/* <h3 className='mb-20 mt-40'>{blog.Title || 'Blog Title'}</h3> */}

                {/* Blog Content */}
                <div className='blog-content markdown-content'>
                  {blog.Text && (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.Text}</ReactMarkdown>
                  )}
                </div>

                {/* Middle Image */}
                {blog.MiddleImage?.url && (
                  <div className='row mt-35 mb-30'>
                    <div className='col-12'>
                      <img
                        className='img__full'
                        src={`${STRAPI_URL}${blog.MiddleImage.url}`}
                        alt='blog-image'
                      />
                    </div>
                  </div>
                )}

                {/* Quote Box */}
                {blog.QuoteText && (
                  <div className='blog__details-left-box' style={{ marginTop: '100px' }}>
                    <i className='fa-sharp fa-solid fa-ditto'></i>
                    <div>
                      <h5>{blog.QuoteText}</h5>
                      <span>Zespół Synergia</span>
                    </div>
                  </div>
                )}

                {/* Author Section */}
                {/* <div className='blog__details-left-author'>
                  <div className='blog__details-left-author-image'>
                    <img src={avatar1.src} alt='avatar' />
                  </div>
                  <div className='blog__details-left-author-content'>
                    <h6>Synergia Team</h6>
                    <p>
                      We are dedicated to providing the best solar energy solutions and insights to
                      help you make informed decisions about renewable energy.
                    </p>
                    <div className='social__icon'>
                      <Social />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className='col-xl-4 col-lg-4'>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleMain;
