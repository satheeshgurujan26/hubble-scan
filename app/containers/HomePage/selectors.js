/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const selectBlocks = () => createSelector(
  selectHome,
  (homeState) => homeState.get('blocks')
);

const selectInfoData = () => createSelector(
  selectHome,
  (homeState) => homeState.get('infoData')
);

const selectBlockInfo = () => createSelector(
  selectHome,
  (homeState) => homeState.get('blockInfo')
);

export {
  selectHome,
  selectBlocks,
  selectInfoData,
  selectBlockInfo
};
