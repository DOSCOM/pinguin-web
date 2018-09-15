import React from 'react';
import { Button } from 'reactstrap'

import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FavouriteDistro from '@/components/FavouriteDistro';

export default () => {
  return (
    <Layout>
      <Hero title="Pinguin Dinus Repository" link="pinguin.dinus.ac.id">
        <hr className="my-2" />
        <p className="lead">
          <span>Download</span>
          <Button color="primary ml-2">Distro Favoritmu</Button>
          <span className="ml-2">atau</span>
          <Button color="primary ml-2">Lihat Semua ISO</Button>
        </p>
      </Hero>
      <FavouriteDistro></FavouriteDistro>
    </Layout>
  );
};
