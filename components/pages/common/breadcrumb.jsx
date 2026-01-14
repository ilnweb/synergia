import Link from 'next/link';
import breadCrumbBg from '../../../public/assets/img/pages/breadcrumb.jpg';

const BreadCrumb = ({ title, innerTitle, backgroundImage }) => {
  const bgImage = backgroundImage || breadCrumbBg.src;

  return (
    <div
      className='breadcrumb__area'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Dark overlay for better text readability when using custom images */}
      {backgroundImage && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          }}
        />
      )}
      <div className='container' style={{ position: 'relative', zIndex: 2 }}>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='breadcrumb__area-content'>
              <h1>{title}</h1>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                  <i className='fa-regular fa-angle-right'></i>
                </li>
                <li>{innerTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
