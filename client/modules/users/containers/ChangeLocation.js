import ChangeLocation from '../components/ChangeLocation/ChangeLocation.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Countries from '../../../../lib/countries';

export const composer = ({}, onData) => {
  const countries = Countries;

  onData(null, { countries });

  return null;
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChangeLocation);