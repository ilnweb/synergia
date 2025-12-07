import team1 from "../../public/assets/img/team/team-1.jpg";
import team2 from "../../public/assets/img/team/team-2.jpg";
import team3 from "../../public/assets/img/team/team-3.jpg";
import team4 from "../../public/assets/img/team/team-4.jpg";
import team5 from "../../public/assets/img/team/team-5.jpg";
import team6 from "../../public/assets/img/team/team-6.jpg";

const teamData = [
    {
        id: 'derya-kurtulus',
        image: team1,
        name: 'Derya Kurtulus',
        position: 'Heating Expert',
        mail: 'derya@gmail.com',
        phone: '+125 (564) 656 156',
        category: 'founder',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'steve-rhodes',
        image: team2,
        name: 'Steve Rhodes',
        position: 'Senior Manager',
        mail: 'rhodes@gmail.com',
        phone: '+125 (261) 564 232',
        category: 'writer',
        social_link: [
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'lisa-thompson',
        image: team3,
        name: 'Lisa Thompson',
        position: 'Senior Engineer',
        mail: 'lisa@gmail.com',
        phone: '+125 (564) 226 781',
        category: 'founder',
        social_link: [
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
        ],
    },
    {
        id: 'david-martinez',
        image: team4,
        name: 'David Martinez',
        position: 'Senior Technician',
        mail: 'martinez@gmail.com',
        phone: '+125 (231) 562 156',
        category: 'writer',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
        ],
    },
    {
        id: 'cansu-tuman',
        image: team5,
        name: 'Cansu Tuman',
        position: 'Project Manager',
        mail: 'cansu@gmail.com',
        phone: '+125 (456) 121 894',
        category: 'manager',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'devon-lane',
        image: team6,
        name: 'Devon Lane',
        position: 'Technician',
        mail: 'devon@gmail.com',
        phone: '+125 (544) 897 488',
        category: 'designer',
        social_link: [
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
        ],
    },
];

export default teamData;