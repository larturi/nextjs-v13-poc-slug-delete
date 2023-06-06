import type { GetStaticProps, NextPage } from 'next';

interface LandingTypes {
   slug: string;
}

const Home: NextPage<LandingTypes> = ({ slug }) => {
   return (
      <div style={{ paddingLeft: '3rem' }}>
         <h1>Smarthome</h1>
         <hr />
         <h3>Slug: {slug}</h3>
      </div>
   );
};

export const getStaticPaths = async () => {
   const paths = [{ params: { slug: 'smarthome' } }];
   return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
   return {
      props: {
         slug: 'smarthome',
      },
      revalidate: 60,
   };
};

export default Home;
