// @flow

import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import Curriculum from './components/Curriculum';
import Legend from './components/Legend';

const style = StyleSheet.create({
  App: {
    display: 'flex',
  },
  'App--legend': {
    width: '20%',
  },
  'App--content': {
    width: '80%',
  },
});

export default function App() {
  return (
    <div className={css(style.App)}>
      <div className={css(style['App--legend'])}>
        <Legend portrait="queplan" sections={[]} />
      </div>
      <div className={css(style['App--content'])}>
        <Curriculum />
      </div>
    </div>
  );
}
