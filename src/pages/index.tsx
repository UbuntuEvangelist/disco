import * as React from 'react';
import { Link } from "gatsby"


import Layout from '../components/Layout';
import Image from "../components/image"
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { ItemsToSell } from '../components/ItemsToSell';
import { HomeCarousel } from '../components/HomeCarousel';

function IndexPage() {
  return (
    <Layout>
      <Seo title="Freelancing On Linux | School Of Freelancing" />
      <SectionWrapper className="bg-background">
        <HomeCarousel />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100">
        <ItemsToSell showOnly={3} />
      </SectionWrapper>
      <p />
    </Layout>
  );
}

export default IndexPage;
