import * as React from 'react';

const DigitOne = () => (
  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.704 0.0559998C0.304 0.0559998 0.208 0.136 0.208 0.551999V1.448C0.208 1.848 0.288 1.944 0.672 1.944H1.072C1.312 1.944 1.376 2.056 1.376 2.264V5.48C1.376 5.992 1.2 6.152 0.88 6.136C0.384 6.12 0.208 6.184 0.208 6.728V10.36C0.208 10.888 0.32 11 0.848 11H4.384C4.912 11 5.024 10.888 5.024 10.36V6.776C5.024 6.248 4.912 6.136 4.384 6.136H3.424C2.784 6.136 2.688 6.008 2.688 5.448V0.712C2.688 0.2 2.544 0.0559998 2.032 0.0559998H0.704Z"
      fill="var(--text-color)"
    />
  </svg>
);

export default React.memo(DigitOne);
