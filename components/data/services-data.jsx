import image1 from '../../public/assets/img/service/service-6.jpg';
import image2 from '../../public/assets/img/service/service-4.jpg';
import image3 from '../../public/assets/img/service/service-3.jpg';
import image4 from '../../public/assets/img/service/service-1.jpg';
import image5 from '../../public/assets/img/service/service-5.jpg';
import image6 from '../../public/assets/img/service/service-2.jpg';

const servicesData = [
  {
    id: 'fotowoltaika',
    icon: <i className='flaticon-solar-panel-3'></i>,
    title: 'Fotowoltaika',
    des: 'Projektujemy i montujemy instalacje fotowoltaiczne dopasowane do zużycia energii w Twoim domu. Produkujesz własny prąd i realnie obniżasz rachunki.',
    image: image1,
  },
  {
    id: 'folie-grzewcze',
    icon: <i className='flaticon-maintenance'></i>,
    title: 'Folie i maty grzewcze',
    des: 'Ogrzewanie podczerwienią, które daje równomierne ciepło w całym pomieszczeniu bez grzejników. Dobrze sprawdza się w połączeniu z fotowoltaiką i nie wymaga obsługi.',
    image: image2,
  },
  {
    id: 'pompy-ciepla',
    icon: <i className='flaticon-solar-panel-4'></i>,
    title: 'Pompy ciepła',
    des: 'Dobieramy pompy ciepła do konkretnego budynku i sposobu jego użytkowania. To wygodne ogrzewanie domu i ciepła woda przy niższych kosztach niż tradycyjne źródła ciepła.',
    image: image3,
  },
  {
    id: 'wiaty-solarne',
    icon: <i className='flaticon-solar-energy'></i>,
    title: 'Wiaty solarne',
    des: 'Wiaty fotowoltaiczne chronią samochód i jednocześnie produkują prąd na potrzeby domu. To dobre rozwiązanie, gdy brakuje miejsca na panele na dachu.',
    image: image4,
  },
  {
    id: 'audyty-energetyczne',
    icon: <i className='flaticon-energy'></i>,
    title: 'Audyty i świadectwa',
    des: 'Sprawdzamy, ile energii faktycznie potrzebuje Twój dom i gdzie można ją oszczędzić. Na tej podstawie doradzamy konkretne rozwiązania grzewcze i energetyczne.',
    image: image5,
  },
];

export default servicesData;
