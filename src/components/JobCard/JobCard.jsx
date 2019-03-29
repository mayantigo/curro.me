// @flow

import React from 'react';

export type JobContent = {
  from: Date,
  until: Date,
  company: string,
  title: string,
  description: string,
  hiddenContent: string,
};

export default function JobCard({ title, description, hiddenContent, from, until, company }: JobContent) {
  return (
    <div className="JobCard">
      <h3>{title}</h3>
      <p>{description}</p>
      {hiddenContent}
    </div>
  );
}
