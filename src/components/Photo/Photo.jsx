// @flow

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

type PhotoType = {
  url: string,
};

export default function Photo({ url }: PhotoType) {
  return (
    <img
      className={css(
        StyleSheet.create({
          Photo: {
            backgroundColor: 'blue',
          },
        }).Photo,
      )}
      src={url}
      alt="Profile"
    />
  );
}
