import * as React from 'react';
import { SamiroyAnimatedLogo } from '@samiroy/sprites';
import SamirRoyTitle from '@components/sprites/SamirRoyTitle';
import Margin from '@widgets/Margin';

type Props = {
  /** subtitle to show below the samiroy title */
  subtitle?: string;
};

const SamiroyHero = ({ subtitle = '' }: Props) => (
  <div className="col center">
    <div className="w-xl">
      <SamiroyAnimatedLogo />
    </div>
    <Margin height={80} />
    <div style={{ marginBottom: 16, display: 'inline-flex' }}>
      <SamirRoyTitle />
    </div>
    <h1 style={{ margin: 0, marginTop: 16 }}>{subtitle}</h1>
  </div>
);

export default React.memo(SamiroyHero);
