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
                <h2>Polityka Prywatności</h2>
                <p className='mb-30'>
                  <strong>Data ostatniej aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}
                </p>

                <h3>1. Administrator Danych Osobowych</h3>
                <p className='mb-30'>
                  Administratorem danych osobowych jest Synergia Energia z siedzibą w Kielcach, ul. Jana
                  Nowaka-Jeziorańskiego 121, 25-408 Kielce, NIP: {COMPANY_NIP}.
                </p>

                <h3>2. Rodzaje Przetwarzanych Danych</h3>
                <p className='mb-20'>Przetwarzamy następujące kategorie danych osobowych:</p>
                <ul className='mb-30'>
                  <li>Dane identyfikacyjne (imię, nazwisko)</li>
                  <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
                  <li>Dane dotyczące korespondencji (treść wiadomości)</li>
                  <li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
                </ul>

                <h3>3. Cele i Podstawy Prawne Przetwarzania Danych</h3>
                <p className='mb-20'>Dane osobowe przetwarzamy w następujących celach:</p>
                <ul className='mb-30'>
                  <li>
                    <strong>Obsługa zapytań kontaktowych</strong> - na podstawie prawnie uzasadnionego
                    interesu administratora (art. 6 ust. 1 lit. f RODO)
                  </li>
                  <li>
                    <strong>Realizacja umów i świadczenie usług</strong> - na podstawie wykonania umowy
                    (art. 6 ust. 1 lit. b RODO)
                  </li>
                  <li>
                    <strong>Marketing bezpośredni</strong> - na podstawie prawnie uzasadnionego interesu
                    administratora (art. 6 ust. 1 lit. f RODO) lub zgody (art. 6 ust. 1 lit. a RODO)
                  </li>
                  <li>
                    <strong>Wypełnienie obowiązków prawnych</strong> - na podstawie obowiązku prawnego
                    (art. 6 ust. 1 lit. c RODO)
                  </li>
                </ul>

                <h3>4. Odbiorcy Danych</h3>
                <p className='mb-20'>Dane osobowe mogą być przekazywane następującym kategoriom odbiorców:</p>
                <ul className='mb-30'>
                  <li>Dostawcom usług IT i hostingu</li>
                  <li>Dostawcom usług marketingowych</li>
                  <li>Organom publicznym w zakresie wymaganym prawem</li>
                </ul>

                <h3>5. Okres Przechowywania Danych</h3>
                <p className='mb-30'>
                  Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których zostały
                  zebrane, a po tym czasie przez okres wymagany przepisami prawa lub do czasu wycofania
                  zgody (jeśli przetwarzanie odbywa się na podstawie zgody).
                </p>

                <h3>6. Prawa Osób, Których Dane Dotyczą</h3>
                <p className='mb-20'>Przysługują Państwu następujące prawa:</p>
                <ul className='mb-30'>
                  <li>Prawo dostępu do danych osobowych</li>
                  <li>Prawo do sprostowania danych</li>
                  <li>Prawo do usunięcia danych</li>
                  <li>Prawo do ograniczenia przetwarzania</li>
                  <li>Prawo do przenoszenia danych</li>
                  <li>Prawo do sprzeciwu wobec przetwarzania</li>
                  <li>Prawo do cofnięcia zgody w dowolnym momencie</li>
                  <li>Prawo do wniesienia skargi do organu nadzorczego (PUODO)</li>
                </ul>

                <h3>7. Pliki Cookies</h3>
                <p className='mb-20'>
                  Nasza strona internetowa wykorzystuje pliki cookies w celu:
                </p>
                <ul className='mb-30'>
                  <li>Zapewnienia prawidłowego funkcjonowania strony</li>
                  <li>Analizy ruchu na stronie (Google Analytics)</li>
                  <li>Dostosowania treści do preferencji użytkowników</li>
                </ul>
                <p className='mb-30'>
                  Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej
                  przeglądarce internetowej.
                </p>

                <h3>8. Bezpieczeństwo Danych</h3>
                <p className='mb-30'>
                  Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo
                  przetwarzanych danych osobowych, w tym ochronę przed nieuprawnionym dostępem, utratą czy
                  zniszczeniem danych.
                </p>

                <h3>9. Kontakt w Sprawach Ochrony Danych</h3>
                <p className='mb-30'>
                  W sprawach dotyczących ochrony danych osobowych można kontaktować się z nami pod adresem
                  e-mail: <a href='mailto:biuro@synergiaenergia.pl'>biuro@synergiaenergia.pl</a> lub
                  telefonicznie: <a href='tel:+48698454913'>+48 698 454 913</a>.
                </p>

                <h3>10. Zmiany Polityki Prywatności</h3>
                <p className='mb-30'>
                  Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O
                  wszelkich zmianach będziemy informować poprzez publikację zaktualizowanej wersji na tej
                  stronie.
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
