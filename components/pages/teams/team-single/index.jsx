'use client';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../../common/breadcrumb';
import TeamSingleMain from './team-single';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../../common/scroll/scroll-to-top';
import SwitchTab from '../../common/dark-light';

const TeamSingle = ({ teamDetails }) => {
  return (
    <>
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb title={teamDetails?.name} innerTitle={teamDetails?.name} />
      <TeamSingleMain teamDetails={teamDetails} />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default TeamSingle;
