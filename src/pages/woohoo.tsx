import * as React from 'react';
import Page from '@components/Page';
import Margin from '@widgets/Margin';
import NavBar from '@widgets/NavBar';
import WoohooHero from '@components/heroes/WoohooHero';

const styles = {
  body: {
    fontSize: '1.6em',
    textAlign: 'justify',
    fontWeight: 200,
    marginBottom: 32,
  } as React.CSSProperties,
};

const WoohooPage = () => (
  <Page title="WooHoo">
    <NavBar />
    <Margin height={64} />
    <WoohooHero />
    <Margin height={64} />
    <p style={styles.body}>
      WooHoo was a live fantasy sports experience created to play along with the ICC Cricket World Cup in 2015.
    </p>
    <Margin height={64} />
  </Page>
);

export default WoohooPage;
