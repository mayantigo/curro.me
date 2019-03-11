// @flow

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

type PhotoType = {
  url: string,
};

const style = StyleSheet.create({
  Photo: {
    backgroundColor: 'blue',
  },
});

export default function Photo({ url }: PhotoType) {
  return <img className={css(style.Photo)} src={url} alt="Profile" />;
}
