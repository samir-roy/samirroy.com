import * as React from 'react';
import svgTitleDay from '@svg/samir-roy-color-day.svg';
import svgTitleNight from '@svg/samir-roy-color-night.svg';

const defaultStyle = {
  width: 316,
  height: 53,
  maxWidth: '100%',
} as React.CSSProperties;

const SamiroyTitle = ({ style = defaultStyle }: { style?: React.CSSProperties } = {}) => (
  <>
    <img
      alt="Samir Roy"
      src={svgTitleDay}
      style={style}
      className="day"
    />
    <img
      alt="Samir Roy"
      src={svgTitleNight}
      style={style}
      className="night"
    />
  </>
);

export default React.memo(SamiroyTitle);
