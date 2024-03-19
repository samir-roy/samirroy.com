import * as React from 'react';
import StatBox from '@components/widgets/StatBox';

const FounderStatBox = () => (
  <StatBox
    value="2017"
    caption={<h3 style={{ fontWeight: 600, margin: 0, textAlign: 'center' }}>Founded Samiroy LLC in 2017</h3>}
  />
);

export default React.memo(FounderStatBox);
