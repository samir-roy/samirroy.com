import * as React from 'react';
import Margin from '@widgets/Margin';
import svgGraduation from '@svg/graduation.svg';

const Education = () => (
  <section>
    <h2>Education</h2>
    <p>
      While growing up in Delhi, wrote first program in{' '}
      <a href="https://en.wikipedia.org/wiki/Logo_(programming_language)">Logo</a> to control a turtle to draw a house,
      and was forever hooked! Won national coding competitions throughout high school and beat out participants from
      higher grades to represent India in international contests. Went on to graduate from the University of Virginia
      with a degree in Computer Science.
    </p>
    <Margin height={32} />
    <div className="boxed center col">
      <div className="center min-w-lg">
        <img alt="Graduation Icon" src={svgGraduation} style={{ height: 64, width: 64 }} />
      </div>
      <Margin height={16} />
      <div className="center" style={{ display: 'table', flexGrow: 1 }}>
        <h5 style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          Undergraduate&nbsp;thesis on
          <br />
          non&#8209;photorealistic rendering:
          <br />
          <a href="/samir-roy-stylespheres.pdf" target="_blank" rel="noreferrer">
            Style Spheres
          </a>
        </h5>
      </div>
    </div>
  </section>
);

export default React.memo(Education);
