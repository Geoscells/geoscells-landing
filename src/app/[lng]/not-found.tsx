import {FC} from 'react';
import {redirect} from 'next/navigation';

const NotFound: FC = () => {
  return redirect('/');
};

export default NotFound;
