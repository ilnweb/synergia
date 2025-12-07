import teamData from "@/components/data/team-data";
import Link from "next/link";

const TeamMain = () => {
    return (
        <>
            <div className="team__two section-padding-three">
                <div className="container">
                    <div className="row dark_image">
                        {teamData.map((data, id) => (
                            <div className="col-lg-4 col-md-6" key={id}>
                                <div className="team__two-item">
                                    <div className="team__two-item-image">
                                            <img src={data.image.src} alt="team-image" />
                                    </div>
                                    <div className="team__two-item-content">
                                        <div>
                                            <h6><Link href={`/team/${data.id}`}>{data.name}</Link></h6>
                                            <span>{data.position}</span>
                                        </div>
                                        <div className="team__two-item-content-icon">
                                            <span className="fa-sharp fa-regular fa-share-nodes"></span>
                                            <div className="team__two-item-content-social">
                                                <ul>
                                                    {data.social_link.map((social, id) => (
                                                        <li key={id}><Link href={social.link} target={social.target}>{social.icon}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
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