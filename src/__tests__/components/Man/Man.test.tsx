import React, { FunctionComponent, Component } from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { ConnectedMan } from '../../../components/Man/Man';
import { PeopleCard } from '../../../models/people-api-types';
import {
  ManAllProps, ManProps, MapDispatchToProps, MapStateToProps
} from '../../../components/Man/models/man-types';

const renderEpisodes = (ownProps: ManProps,
  reduxStoreProps: MapDispatchToProps & MapStateToProps): RenderResult => {

  const episodes = (reduxProps: MapDispatchToProps & MapStateToProps): Function =>
    (WrappedComponent: FunctionComponent<ManAllProps>): FunctionComponent<ManProps> =>
      (props: ManProps): JSX.Element => <WrappedComponent {...reduxProps} {...props} />;

  const Episodes: FunctionComponent<ManProps> = episodes(reduxStoreProps)(ConnectedMan);
  console.log(Episodes);

  return render(<Episodes {...ownProps} />);
};

describe('<Man />', () => {
  it('2', async () => {
    expect.assertions(1);
    const man = {
      img: '',
      name: 'Name',
      gender: 'male',
      height: 2,
      mass: 30,
      eye_color: 'blue'
    };

    const savePeopleCard = jest.fn();

    const reduxStoreProps = {
      people: [],
      savePeopleCard
    };

    const { getByText } = renderEpisodes({ man, index: 3 }, reduxStoreProps);
    const button = await getByText('Remove');
    fireEvent.click(button);
    console.log(button);
    expect(savePeopleCard).toHaveBeenCalledTimes(1);

    // expect(5).toBe(5);
  });

});
