// @flow

import React from 'react';
import type { Item } from './LegendItem';
import LegendItem from './LegendItem';

export type Section = {
  title: string,
  items: Array<Item>,
};

export default function LegendSection({ title, items }: Section) {
  return (
    <>
      <div className="LegendSection">
        <h3>{title}</h3>
        {items.map(item => (
          <LegendItem {...item} />
        ))}
      </div>
    </>
  );
}
