import React from 'react';
import StyleEntry from './styleEntry.jsx';
import StyleEntryContainer from '../../../../containers/productContainers/styleEntryContainer.js';

const StyleSelector = ({currentStyle, styles}) => (
  <div className="item3">
    <span className="selected-font"><b>Style > </b> {currentStyle.name} </span>
    <ul className="remove-bullet">
      {styles.map((style) => (
        <StyleEntryContainer style={style} />
      ))}
    </ul>
  </div>
);

export default StyleSelector;
