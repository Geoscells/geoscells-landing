import style from './page.module.scss';
import Welcome from '@/app/[lng]/_sections/Welcome';
import Mission from './_sections/Mission';
import WeDo from './_sections/WeDo';
import About from './_sections/About';
import Team from './_sections/Team';
import Principles from './_sections/Principles';
import ContactUs from './_sections/ContactUs';
import ActiveResearch from './_sections/ActiveResearch';
import Investors from './_sections/Investors';
import LngInterface from '@/LngInterface';
import {FC} from 'react';

interface HomeProps {
  params: LngInterface;
}

const Home: FC<HomeProps> = async ({params: {lng}}) => {
  return (
    <main className={style.container}>
      <Welcome lng={lng} />
      <Mission lng={lng} />
      <WeDo lng={lng} />
      <ActiveResearch lng={lng} />
      <About lng={lng} />
      <Team lng={lng} />
      <Principles lng={lng} />
      <ContactUs lng={lng} />
      <Investors lng={lng} />
    </main>
  );
};

export default Home;
