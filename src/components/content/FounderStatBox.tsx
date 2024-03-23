import * as React from 'react';
import { Link } from 'gatsby';
import StatBox from '@widgets/StatBox';

const caption = (
  <>
    founded <a href="https://samiroy.com">Samiroy</a> in 2017
    <br />
    and <Link to="/woohoo">WooHoo</Link> in 2014
  </>
);

const FounderStatBox = () => <StatBox value="2017" caption={caption} />;

export default React.memo(FounderStatBox);
