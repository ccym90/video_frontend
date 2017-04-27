import { createStore, compose, combineReducers } from 'redux';
import { streamingReducer, recordingReducer, stopRecordingReducer } from './reducers';

export let initStore = () => {

  const reducer = combineReducers({
    src: streamingReducer,
    recordVideo: recordingReducer,
    stopVideo: stopRecordingReducer
    // recording: recordingReducer
  });

  // const initialState = {
  //   recordVideo: null,
  //   src: null,
  //   preview: null,
  //   download: null,
  //   recording: false,
  //   recorded: false,
  //   downloaded: false,
  //   uploadSuccess: null
  // };
  //
  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
