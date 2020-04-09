import React, { FunctionComponent, Component } from 'react';
import {
  render, RenderResult, fireEvent, waitForElement
} from '@testing-library/react';

import { ConnectedEpisodes } from '../../../pages/Episodes/Episodes';

const renderEpisodes = (): RenderResult => {

  const episodes = (PassedComponent: any) =>
    ({ ...props }: {}): any => <PassedComponent {...props} />;

  const Episodes = episodes(ConnectedEpisodes);

  return render(<Episodes />);
};

describe.skip('testing', () => {
  const { findByTestId } = renderEpisodes();
  console.log(findByTestId);

});
