import Link from 'next/link';
import teamData from '../../../data/team-data';

const TeamMain = () => {
    return (
        <>
            <div className="team__area section-padding-three">
                <div className="container">
                    <div className="row dark_image">
                        {teamData?.map((data, id) => (
                        <div className="col-lg-4 col-md-6 mb-35" key={id}>
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

export default TeamMain;