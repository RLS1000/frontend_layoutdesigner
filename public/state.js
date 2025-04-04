// state.js
export const appState = {
  variables: {
    name1: "ERIKA",
    name2: "MAX",
    weddingDate: "01. Januar 1978"
  },
  layout: {
    currentId: null,
    selectedLayoutData: null
  },
  ui: {
    isZoomed: false,
    isMobileView: window.innerWidth < 768,
    snapLevel: 0
  },
  canvas: {
    scaleX: 1,
    scaleY: 1,
    logicalWidth: 600,
    logicalHeight: 400
  },
  flags: {
    isProgrammaticLayoutChange: false,
    isSwipeInProgress: false,
    isLoadingFromAPI: false,
    hasRestoredPresets: false
  }
};