import * as React from 'react';

const PoonjiCaption = () => (
  <p style={{ fontSize: '1.6em', textAlign: 'justify', fontWeight: 200 }}>
    Poonji is a no-code platform for creating algorithmic trading bots
    using visual tools to combine configurable building blocks.
  </p>
);

export default React.memo(PoonjiCaption);
