import * as React from 'react';
import { Link } from 'gatsby';
import Page from '@components/Page';
import Margin from '@widgets/Margin';
import SamiroyHero from '@components/heroes/SamiroyHero';

const StyleSpheresPage = () => (
  <Page title="Style Spheres">
    <Margin height={96} />
    <SamiroyHero subtitle="Style Spheres" />
    <Margin height={96} />
    <h2>This page is under construction.</h2>
    <br />
    <Link to="/">Go home</Link>
  </Page>
);

export default StyleSpheresPage;
