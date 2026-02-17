import Link from 'next/link';
import Image from 'next/image';
import SkillBarItem from '../common/skill-bar';
import bg2 from '../../../public/assets/img/shape/shape-20.jpg';
import CounterSection from '../common/counter';
import Team from '../home/team';
import Consultation from '../common/consultation';

const AboutMain = () => {
  return (
    <>
      <div className='about__four section-padding pt-0' style={{ marginTop: '120px' }}>
        <div className='container'>
          <div className='row al-center'>
            <div className='col-lg-6 lg-mb-25'>
              <div className='about__four-left'>
                <div className='about__four-left-image dark_image'>
                  <div className='about__four-left-image-one'>
                    <Image
                      src='/assets/img/about/about-6.jpg'
                      alt='about'
                      width={1200}
                      height={800}
                      style={{ width: '90%', height: '510px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className='about__four-left-image-two'>
                    <Image
                      src='/assets/img/about/about-5.jpg'
                      alt='about'
                      width={1200}
                      height={800}
                      style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='about__four-right'>
                <div className='about__four-right-title'>
                  <span className='subtitle-one'>O nas</span>
                  <h2>Dlaczego warto z nami współpracować</h2>
                  <p>
                    Nasza droga rozpoczęła się od fascynacji czystą energią w czasach pierwszego
                    boomu na fotowoltaikę w Polsce. Dziś, łącząc pasję z inżynierską precyzją,
                    zmieniamy domy naszych klientów w wydajne i oszczędne elektrownie słoneczne.
                    Wybierając nas otrzymasz:
                  </p>
                </div>
                <div className='about__four-right-list'>
                  <span>
                    <i className='fa-sharp fa-solid fa-circle-check'></i>Doświadczenie budowane
                    latami:
                  </span>
                  <span>
                    <i className='fa-sharp fa-solid fa-circle-check'></i>Partnerstwa z liderami
                    rynku
                  </span>

                  <span>
                    <i className='fa-sharp fa-solid fa-circle-check'></i>Wiedza audytora
                    energetycznego:
                  </span>
                </div>
                {/* <Link className='btn-one' href='/about-us'>
                  Explore now
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='about__story' style={{ marginBottom: '100px' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='about__story-content'>
                <h2
                  className='about__story-title'
                  style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    fontSize: '48px',
                    fontWeight: '700',
                  }}
                >
                  Jak powstała Synergia Energia
                </h2>
                <p
                  className='about__story-subtitle'
                  style={{
                    textAlign: 'center',
                    fontSize: '20px',
                    marginBottom: '60px',
                    color: '#666',
                  }}
                >
                  <strong>
                    Historia firmy, która zmienia sposób ogrzewania i fotowoltaiki w Polsce
                  </strong>
                </p>
                <div
                  className='about__story-text'
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.8',
                    maxWidth: '1100px',
                    margin: '0 auto',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ marginBottom: '25px' }}>
                    Wszystko zaczęło się w momencie, kiedy w Polsce nastąpił prawdziwy{' '}
                    <strong>boom na fotowoltaikę</strong>. Zafascynowani nowymi możliwościami,
                    postanowiliśmy wkroczyć na rynek energii odnawialnej z pasją i determinacją.
                  </p>
                  <p style={{ marginBottom: '25px' }}>
                    Od samego początku naszym celem było nie tylko oferowanie nowoczesnych
                    rozwiązań, ale przede wszystkim{' '}
                    <strong>pomaganie klientom w świadomym korzystaniu z energii</strong>. Pierwsze
                    kroki były pełne wyzwań – zaczynaliśmy od rozszerzania usług i zdobywania
                    autoryzacji w największych firmach w Polsce, co pozwoliło nam zdobyć zaufanie
                    branży i klientów.
                  </p>
                  <p style={{ marginBottom: '25px' }}>
                    To był moment, kiedy <strong>Synergia Energia zaczęła naprawdę rosnąć</strong>.
                    Kolejnym etapem było wprowadzenie systemów pomp ciepła, a współpraca z liderami
                    rynku, takimi jak <strong>RED SNEKE</strong> – wiodący producent folii
                    grzejnych, pozwoliła nam zaoferować klientom produkty najwyższej jakości.
                  </p>
                  <p style={{ marginBottom: '25px' }}>
                    Następnie poszerzyliśmy naszą ofertę o maty i kable grzejne, odpowiadając na
                    coraz większe zainteresowanie ogrzewaniem podjazdów, tarasów i przestrzeni
                    zewnętrznych.
                  </p>
                  <p style={{ marginBottom: '25px' }}>
                    Dla mnie osobiście przełomowym momentem było ukończenie studiów na{' '}
                    <strong>audytora energetycznego</strong>. Wiedza zdobyta podczas nauki pozwoliła
                    mi dobierać rozwiązania idealnie dopasowane do potrzeb każdego domu, łącząc
                    kwestie techniczne z praktycznym zastosowaniem.
                  </p>
                  <p style={{ marginBottom: '25px' }}>
                    Dzięki temu każdy klient może liczyć na{' '}
                    <strong>indywidualne doradztwo i najwyższej jakości realizacje</strong>, a ja
                    zawsze stawiam jego dobro na pierwszym miejscu.
                  </p>
                  <p style={{ marginBottom: '25px' }}>
                    Dziś <strong>Synergia Energia to firma, która nieustannie się rozwija</strong>,
                    oferując nowoczesne rozwiązania fotowoltaiczne, pompy ciepła i systemy
                    ogrzewania – wszystko po to, aby domy naszych klientów były komfortowe,
                    oszczędne i ekologiczne.
                  </p>
                  <p
                    className='about__story-conclusion'
                    style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      textAlign: 'center',
                      marginTop: '40px',
                      fontStyle: 'italic',
                    }}
                  >
                    <strong>Nasza historia to historia pasji, wiedzy i zaufania</strong>, które
                    każdego dnia inspiruje nas do działania.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CounterSection addClass='page' /> */}
      {/* <div
        className='experience__area section-padding'
        style={{ backgroundImage: `url(${bg2.src})` }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 lg-mb-25'>
              <div className='experience__area-left'>
                <div className='experience__area-left-title'>
                  <span className='subtitle-one'>Our Experience</span>
                  <h2>Solar Team Experience area</h2>
                  <p>
                    Business, or everyday living, imagine a world where solar success is not just an
                    aspiration but a reality driven by the Rays of the sun. It's a vision where the
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
                      <h6>Solar Panel</h6>
                    </div>
                    <div className='skill__area-item-inner'>
                      <SkillBarItem countUp={85} />
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
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='experience__area-image dark_image'>
                <img src='assets/img/pages/experience.jpg' alt='experience' />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className='section-padding pb-0'>
        <Team />
      </div> */}
      {/* <Consultation addClass='page' /> */}
    </>
  );
};

export default AboutMain;
