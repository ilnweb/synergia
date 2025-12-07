import teamData from '@/components/data/team-data';
import Link from 'next/link';

const Team = () => {
    return (
        <>
        <div className="team__one">
            <div className="container">
                <div className="row mb-35">
                    <div className="col-xl-12">
                        <div className="team__one-title t-center">
                            <span className="subtitle-one">We're the best</span>
                            <h2>Solar Design Engineer</h2>
                        </div>
                    </div>
                </div>
                <div className="row dark_image">
                    {teamData?.slice(0, 4).map((data, id) => (
                    <div className="col-lg-3 col-md-6 mb-35" key={id}>
                        <div className="team__one-item">
                            <div className="team__one-item-image">
                                <img src={data.image.src} alt="image" />
                                <div className="team__one-item-image-content">
                                    <div className="team__one-item-image-icon">
                                        <span><i className="fas fa-share-alt"></i></span>
                                        <div className="team__one-item-image-social">
                                            <ul>
                                                {data.social_link.map((social, id) => (
                                                    <li key={id}><Link href={social.link} target={social.target}>{social.icon}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <h6><Link href={`/team/${data.id}`}>{data.name}</Link></h6>
                                    <span>{data.position}</span>
                                </div>
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

export default Team;