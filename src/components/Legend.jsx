// @flow

import React from 'react';
import Photo from './Photo';
import type { Section } from './LegendSection';
import LegendSection from './LegendSection';

export type LegendContent = {
  portrait: string,
  sections: Array<Section>,
};

export default function Legend({ portrait, sections }: LegendContent) {
  return (
    <div className="Legend">
      <Photo url={portrait} />
      <div id="Legend--items">
        {sections.map(section => (
          <LegendSection {...section} />
        ))}
      </div>
    </div>
  );
}
