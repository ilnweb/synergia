import portfolioData from '@/components/data/portfolio-data';
import Link from 'next/link';

const TextSlide = ({addIcon, addClass}) => {
    return (
        <>
        <div className={`text__slider ${addClass}`}>
            <div className="text-slide">
                <div className="sliders scroll">
                    <ul>
                        {portfolioData?.slice(0, 3).map((data, id) => (
                            <li key={id}><Link href={`/portfolio/${data.id}`}>{data.title.split(' ').slice(0, 2).join(' ')} <span><img src={addIcon.src} alt="icon" /></span></Link></li>
                        ))}
                    </ul>
                </div>
                <div className="sliders scroll">
                    <ul>
                        {portfolioData?.slice(0, 3).map((data, id) => (
                            <li key={id}><Link href={`/portfolio/${data.id}`}>{data.title.split(' ').slice(0, 2).join(' ')} <span><img src={addIcon.src} alt="icon" /></span></Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>            
        </>
    );
};

export default TextSlide;