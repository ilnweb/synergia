import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import SkillBarItem from '../common/skill-bar';
import CircleBar from '../common/circle-bar';
import shape1 from '../../../public/assets/img/shape/shape-11.png';
import shape2 from '../../../public/assets/img/shape/shape-11-dark.png';
import shape3 from '../../../public/assets/img/shape/shape-12.png';
import image1 from '../../../public/assets/img/about/about-1.jpg';
import image2 from '../../../public/assets/img/about/about-2.jpg';

const About = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const openVideoModal = () => {
    setOpenVideo(true);
  };
  return (
    <>
      <div className='about__one section-padding pt-0'>
        <img className='about__one-shape dark-n' src={shape1.src} alt='shape' />
        <img className='about__one-shape light-n' src={shape2.src} alt='shape' />
        <div className='container'>
          <div className='row al-center'>
            <div className='col-xl-6 col-lg-5 lg-mb-25'>
              <div className='about__one-left'>
                <div className='about__one-left-image dark_image'>
                  <img src={image1.src} alt='about-image' />
                  <img className='about__one-left-image-shape' src={shape3.src} alt='shape' />
                  <div className='about__one-left-image-two'>
                    <img src={image2.src} alt='about-image' />
                  </div>
                  <div className='about__one-left-image-content'>
                    <CircleBar progressBar={87} />
                    <h6>Project Success Rate</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-7'>
              <div className='about__one-right'>
                <div className='about__one-right-title'>
                  <span className='subtitle-one'>Kim jesteśmy</span>
                  <h2>
                    Jak powstała Synergia Energia – historia firmy, która zmienia sposób ogrzewania
                    i fotowoltaiki w Polsce
                  </h2>
                  <p>
                    Wszystko zaczęło się w momencie, kiedy w Polsce nastąpił prawdziwy boom na
                    fotowoltaikę. Zafascynowani nowymi możliwościami, postanowiliśmy wkroczyć na
                    rynek energii odnawialnej z pasją i determinacją. Od samego początku naszym
                    celem było nie tylko oferowanie nowoczesnych rozwiązań, ale przede wszystkim
                    pomaganie klientom w świadomym korzystaniu z energii.
                  </p>
                  <p>
                    Pierwsze kroki były pełne wyzwań – zaczynaliśmy od rozszerzania usług i
                    zdobywania autoryzacji w największych firmach w Polsce, co pozwoliło nam zdobyć
                    zaufanie branży i klientów. To był moment, kiedy Synergia Energia zaczęła
                    naprawdę rosnąć.
                  </p>
                  <p>
                    Kolejnym etapem było wprowadzenie systemów pomp ciepła, a współpraca z liderami
                    rynku, takimi jak RED SNEKE – wiodący producent folii grzejnych, pozwoliła nam
                    zaoferować klientom produkty najwyższej jakości. Następnie poszerzyliśmy naszą
                    ofertę o maty i kable grzejne, odpowiadając na coraz większe zainteresowanie
                    ogrzewaniem podjazdów, tarasów i przestrzeni zewnętrznych.
                  </p>
                  <p>
                    Dla mnie osobiście przełomowym momentem było ukończenie studiów na audytora
                    energetycznego. Wiedza zdobyta podczas nauki pozwoliła mi dobierać rozwiązania
                    idealnie dopasowane do potrzeb każdego domu, łącząc kwestie techniczne z
                    praktycznym zastosowaniem. Dzięki temu każdy klient może liczyć na indywidualne
                    doradztwo i najwyższej jakości realizacje, a ja zawsze stawiam jego dobro na
                    pierwszym miejscu.
                  </p>
                  <p>
                    Dziś Synergia Energia to firma, która nieustannie się rozwija, oferując
                    nowoczesne rozwiązania fotowoltaiczne, pompy ciepła i systemy ogrzewania –
                    wszystko po to, aby domy naszych klientów były komfortowe, oszczędne i
                    ekologiczne. Nasza historia to historia pasji, wiedzy i zaufania, które każdego
                    dnia inspiruje nas do działania.
                  </p>
                </div>
                <div className='about__one-right-skill'>
                  <div className='skill__area-item'>
                    <div className='skill__area-item-content'>
                      <h6>Hybrid Energy</h6>
                    </div>
                    <div className='skill__area-item-inner'>
                      <SkillBarItem countUp={76} />
                    </div>
                  </div>
                  <div className='skill__area-item'>
                    <div className='skill__area-item-content'>
                      <h6>Wind Turbines</h6>
                    </div>
                    <div className='skill__area-item-inner'>
                      <SkillBarItem countUp={60} />
                    </div>
                  </div>
                </div>
                <div className='about__one-right-bottom'>
                  <div className='about__one-right-bottom-btn'>
                    <Link className='btn-one' href='/about'>
                      Unlock Power
                    </Link>
                  </div>
                  <div className='about__one-right-bottom-video'>
                    <div className='about__one-right-bottom-video-icon video video-pulse'>
                      <span onClick={openVideoModal}>
                        <i className='fas fa-play'></i>
                      </span>
                    </div>
                    <span>Watch Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        className='video-modal'
        channel='youtube'
        autoplay
        isOpen={openVideo}
        videoId='SZEflIVnhH8'
        onClose={() => setOpenVideo(false)}
      />
    </>
  );
};

export default About;
