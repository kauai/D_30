import type { NextPage } from 'next';
import Link from 'next/link';
import Seo from '../components/Seo';

const Home: NextPage = () => {
  return (
    <div>
      <Seo />
      <ul>
        <li>
          <Link href='/app'>
            <a>App</a>
          </Link>
        </li>
        <li>
          <Link href='/devpleno'>
            <a>Devpleno</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
