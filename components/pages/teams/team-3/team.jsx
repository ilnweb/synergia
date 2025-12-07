import Link from "next/link";
import teamData from "@/components/data/team-data";

const TeamMain = () => {
    return (
        <>
        <div className="team__two section-padding-three">
            <div className="container">
                <div className="row dark_image">
                    {teamData.map((data, id) => (
                        <div className="col-lg-4 col-md-6" key={id}>
                            <div className="team__three-item">
                                <div className="team__three-item-image">
                                    <img src={data.image.src} alt="team-image" />
                                    <div className="team__three-item-image-social">
                                        <ul>
                                            {data.social_link.map((social, id) => (
                                                <li key={id}><Link href={social.link} target={social.target}>{social.icon}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="team__three-item-image-content">
                                        <span>{data.position}</span>
                                        <h6><Link href={`/team/${data.id}`}>{data.name}</Link></h6>
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