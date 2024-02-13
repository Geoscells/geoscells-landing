import Mission from '@/app/[lng]/_sections/Mission';
import WeDo from '@/app/[lng]/_sections/WeDo';
import About from '@/app/[lng]/_sections/About';
// import ActiveResearch from '@/app/[lng]/_sections/ActiveResearch';
import Team from '@/app/[lng]/_sections/Team';
import Principles from '@/app/[lng]/_sections/Principles';
import ContactUs from '@/app/[lng]/_sections/ContactUs';

interface Option {
  i18nKey: string;
  link: string;
}

const options: Option[] = [
  {
    i18nKey: 'headerNavigation.mission',
    link: `#${Mission.id}`
  },
  {
    i18nKey: 'headerNavigation.ourFunctions',
    link: `#${WeDo.id}`
  },
  {
    i18nKey: 'headerNavigation.aboutUs',
    link: `#${About.id}`
  },
  // {
  //   i18nKey: 'headerNavigation.projects',
  //   link: `#${ActiveResearch.id}`
  // },
  {
    i18nKey: 'headerNavigation.founders',
    link: `#${Team.id}`
  },
  {
    i18nKey: 'headerNavigation.principles',
    link: `#${Principles.id}`
  },
  {
    i18nKey: 'headerNavigation.contacts',
    link: `#${ContactUs.id}`
  }
];

export default options;
