import Link from 'next/link';
import Social from '@/components/data/social';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import image1 from '../../../../public/assets/img/blog/details.jpg';
import avatar1 from '../../../../public/assets/img/avatar/avatar-1.jpg';
import avatar2 from '../../../../public/assets/img/avatar/avatar-2.jpg';
import avatar3 from '../../../../public/assets/img/avatar/avatar-3.jpg';

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
                <img
                  className='img__full'
                  src={
                    blog.HeaderImage?.url
                      ? `http://72.60.17.88:1337${blog.HeaderImage.url}`
                      : image1.src
                  }
                  alt='blog-details-image'
                />

                <div className='blog__details-left-meta'>
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
                </div>

                <h3 className='mb-20'>{blog.Title || 'Blog Title'}</h3>

                {/* Blog Content */}
                <div className='blog-content'>
                  {blog.Text ? (
                    blog.Text.split('\n\n').map((paragraph, index) => (
                      <p key={index} className='mb-20'>
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <>
                      <p>
                        Discover the latest innovations in solar technology that are driving a wave
                        of positive change across the globe. From photovoltaic advancements to smart
                        grid integration, we delve into the cutting-edge solutions that make solar
                        energy an increasingly viable and accessible option.
                      </p>
                      <p>
                        Our blog goes beyond the technical aspects, offering insights into the
                        economic and societal impact of widespread solar adoption. Explore success
                        stories, case studies, and real-world applications that showcase how solar
                        energy is not just an eco-friendly choice but a practical and economically
                        sound investment.
                      </p>
                    </>
                  )}
                </div>

                {/* Middle Image */}
                {blog.MiddleImage?.url && (
                  <div className='row mt-35 mb-30'>
                    <div className='col-12'>
                      <img
                        className='img__full'
                        src={`http://72.60.17.88:1337${blog.MiddleImage.url}`}
                        alt='blog-image'
                      />
                    </div>
                  </div>
                )}

                {/* Quote Box */}
                <div className='blog__details-left-box'>
                  <i className='fa-sharp fa-solid fa-ditto'></i>
                  <div>
                    <h5>
                      Solar energy is not just about powering homes; it's about empowering
                      communities and creating a sustainable future for generations to come.
                    </h5>
                    <span>Synergia Team</span>
                  </div>
                </div>

                {/* Author Section */}
                <div className='blog__details-left-author'>
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
                </div>
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
