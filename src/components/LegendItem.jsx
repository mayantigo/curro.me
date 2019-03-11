// @flow

import React from 'react';

export type Item = {
  title: string,
};

export default function LegendItem({ title }: Item) {
  return <div className="LegendItem">{title}</div>;
}
