import Link from 'next/link';
import Layout from '@components/Layout';
import Header from '@components/Header';

export default function Home() {
  return (
    <Layout>
      <Header title="Choose your own adventure... if you dare" zoom />
      <br />
      <Link href="/s/start">
        <a>Join the adventure</a>
      </Link>
    </Layout>
  );
}
