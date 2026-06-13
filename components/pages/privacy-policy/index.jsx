'use client';
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../common/breadcrumb';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../common/scroll/scroll-to-top';
import { COMPANY_NIP } from '@/constants';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        pageTitle='Polityka Prywatności | Synergia Energia'
        pageDescription='Polityka prywatności Synergia Energia - informacje o przetwarzaniu danych osobowych, RODO, cookies i ochronie prywatności użytkowników.'
        keywords='polityka prywatności, RODO, ochrona danych osobowych, cookies, Synergia Energia'
        canonicalUrl='https://www.synergiaenergia.pl/polityka-prywatnosci'
        ogImage='/assets/img/banner/banner-2.jpg'
      />
      <HeaderOne />
      <BreadCrumb
        title='Polityka Prywatności'
        innerTitle='Polityka Prywatności'
        backgroundImage='/assets/img/banner/banner-2.jpg'
      />
      <div className='privacy-policy section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='privacy-policy__content'>
                <h2>Polityka Prywatności Synergia Cezary Broniś</h2>
                <p className='mb-30'>
                  Niniejsza Polityka Prywatności określa zasady gromadzenia, przetwarzania i wykorzystywania
                  danych osobowych pozyskanych od Państwa przez firmę <strong>Synergia Cezary Broniś</strong>{' '}
                  za pośrednictwem strony internetowej <strong>synergiaenergia.pl</strong>.
                </p>

                <h3>1. Administrator Danych Osobowych</h3>
                <p className='mb-30'>
                  Administratorem Państwa danych osobowych jest:<br />
                  <strong>Synergia Cezary Broniś</strong><br />
                  ul. Jana Nowaka-Jeziorańskiego 121<br />
                  25-408 Kielce<br />
                  NIP: 6572170309<br />
                  Kontakt: tel. 698 454 913
                </p>

                <h3>2. Jakie dane przetwarzamy?</h3>
                <p className='mb-20'>
                  Przetwarzamy dane, które przekazują nam Państwo dobrowolnie w celu nawiązania kontaktu,
                  wykonania usługi lub realizacji zapytania ofertowego. Są to najczęściej:
                </p>
                <ul className='mb-30'>
                  <li>Imię i nazwisko</li>
                  <li>Adres e-mail</li>
                  <li>Numer telefonu</li>
                  <li>Adres inwestycji (jeśli dotyczy realizacji usług)</li>
                </ul>

                <h3>3. Cel i podstawa przetwarzania</h3>
                <p className='mb-20'>Dane osobowe przetwarzane są w celu:</p>
                <ul className='mb-30'>
                  <li>
                    <strong>Realizacji usług:</strong> Podstawa prawna: niezbędność do wykonania umowy
                    (art. 6 ust. 1 lit. b RODO).
                  </li>
                  <li>
                    <strong>Odpowiedzi na zapytania:</strong> Podstawa prawna: prawnie uzasadniony interes
                    administratora (art. 6 ust. 1 lit. f RODO), polegający na obsłudze komunikacji.
                  </li>
                  <li>
                    <strong>Wypełnienia obowiązków prawnych:</strong> (np. wystawienie faktury) Podstawa
                    prawna: przepis prawa (art. 6 ust. 1 lit. c RODO).
                  </li>
                </ul>

                <h3>4. Komu udostępniamy dane?</h3>
                <p className='mb-30'>
                  Państwa dane mogą być przekazywane podmiotom przetwarzającym dane w naszym imieniu, takim
                  jak: dostawcy usług IT, firmy hostingowe, biuro księgowe oraz firmy kurierskie (jeśli jest
                  to konieczne do realizacji usługi). Nie sprzedajemy ani nie udostępniamy danych osobowych
                  podmiotom trzecim w celach marketingowych.
                </p>

                <h3>5. Okres przechowywania danych</h3>
                <p className='mb-30'>
                  Dane osobowe będą przechowywane przez okres niezbędny do realizacji usług, a po tym czasie
                  przez okres wymagany przepisami prawa (np. przepisami podatkowymi dotyczącymi archiwizacji
                  dokumentów księgowych) lub do momentu przedawnienia ewentualnych roszczeń.
                </p>

                <h3>6. Państwa prawa</h3>
                <p className='mb-20'>
                  Przysługują Państwu następujące prawa w związku z przetwarzaniem danych:
                </p>
                <ul className='mb-30'>
                  <li>Prawo dostępu do treści swoich danych oraz ich poprawiania.</li>
                  <li>Prawo do usunięcia danych („prawo do bycia zapomnianym").</li>
                  <li>Prawo do ograniczenia przetwarzania.</li>
                  <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych.</li>
                  <li>Prawo do przenoszenia danych.</li>
                  <li>
                    Prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych
                    Osobowych).
                  </li>
                </ul>

                <h3>7. Pliki Cookies</h3>
                <p className='mb-30'>
                  Nasza strona może wykorzystywać pliki cookies w celu poprawnego działania serwisu oraz
                  analizy statystyk odwiedzin. Mogą Państwo w każdej chwili wyłączyć obsługę plików cookies
                  w ustawieniach swojej przeglądarki internetowej.
                </p>

                <h3>8. Kontakt</h3>
                <p className='mb-30'>
                  W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod numerem telefonu:{' '}
                  <a href='tel:+48698454913'><strong>698 454 913</strong></a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default PrivacyPolicy;
