import blogData from '@/components/data/blog-data';
import Link from 'next/link';

const BlogSidebar = () => {
  const blogPost = blogData.slice(0, 3);
  return (
    <div className='all__sidebar dark_image ml-25 xl-ml-0'>
      <div className='all__sidebar-item'>
        <h6>Recent Post</h6>
        <div className='all__sidebar-item-post'>
          {blogPost.map((data, id) => (
            <div className='post__item' key={id}>
              <div className='post__item-image'>
                <Link href={`/blog/${data.id}`}>
                  <img src={data.image.src} alt='' />
                </Link>
              </div>
              <div className='post__item-title'>
                <h6>
                  <Link href={`/blog/${data.id}`}>{data.title}</Link>
                </h6>
                <span>
                  <i className='far fa-calendar-alt'></i>Apr {data.date}, 2024
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
