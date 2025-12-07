import Link from 'next/link';
import breadCrumbBg from "../../../public/assets/img/pages/breadcrumb.jpg";

const BreadCrumb = ({title, innerTitle}) => {
    return (
        <div className="breadcrumb__area" style={{backgroundImage: `url(${breadCrumbBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb__area-content">
                            <h1>{title}</h1>
                            <ul>
                                <li><Link href="/">Home</Link><i className="fa-regular fa-angle-right"></i></li>
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