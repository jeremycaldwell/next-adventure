import Link from 'next/link';
import Layout from '@components/Layout';
import Header from '@components/Header';
import CharacterForm from '@components/CharacterForm';

export default function Custom() {
  return (
    <Layout>
      <Header title="Choose your own adventure... if you dare" />
      <br />
      <section>
        Want to add your own personality to the story? Fill out this form to be
        added to the database!
      </section>
      <CharacterForm />
      Nah? <br />
      <Link href="/">
        <a>Go home</a>
      </Link>
    </Layout>
  );
}
