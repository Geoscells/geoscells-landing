import {ImageResponse} from 'next/og';
import OpenGraphImage from '../../../assets/open-graph/OpenGraph-twitter.png';
import pjson from '@/../package.json';

export const contentType = 'image/png';

export const revalidate = false;

export const alt = 'Geoscells';

export const size = {
  width: 1200,
  height: 675
};

const OGImage = () => {
  const basePath = process.env.NODE_ENV === 'production' ? pjson.homepage : 'http://localhost:3000';

  // eslint-disable-next-line @next/next/no-img-element
  return new ImageResponse(<img src={`${basePath}${OpenGraphImage.src}`} alt="OG" />, {
    ...size
  });
};

export default OGImage;
