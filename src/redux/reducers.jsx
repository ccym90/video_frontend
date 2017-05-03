const initialState = {
  recordVideo: null,
  src: null,
  preview: null,
  download: null,
  recording: false,
  recorded: false,
  downloaded: false,
  uploadSuccess: false
  // library: {
  //   img: "",
  //   title: "",
  //   author: "",
  //   subject: "",
  //   description:""
  // }
};


export var streamingReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_STREAM':
      return {
        ...state,
        src: action.src,
      }
    default:
      return state;
  }
};

export var recordingReducer = (state = '', action) => {
  switch (action.type) {
    case 'RECORDING':
      return {
        recording: true,
      }
      case 'PREVIEW':
        return {
          ...state,
          preview: null,
        }
    default:
      return state;
  }
};

export var stopRecordingReducer = (state = '', action) => {
  switch (action.type) {
    case 'STOP_RECORDING':
      return {
        ...state,
        recording: false,
        recorded: true,
      }
    default:
      return state;
  }
};

export var downloadReducer = (state = '', action) => {
  switch (action.type) {
    case 'DOWNLOADED':
      return {
        ...state,
        downloaded: true
      }
    default:
      return state;
  }
};

export var previewReducer = (state = '', action) => {
  switch (action.type) {
    case 'PREVIEW':
      return {
        ...state,
        preview: action.preview
      }
    default:
      return state;
  }
};

export var savingReducer = (state = '', action) => {
  switch (action.type) {
    case 'SAVE':
      return {
        ...state,
        uploadSuccess: true
      }
    default:
      return state;
  }
};


export default (state = null, action) => {
  switch (action.type) {
  case 'LOGGIN_REQUEST':
    return  {
      isAuthenticated: false
    }
    break;
  case 'LOGGED_CORRECT':
    return {
      isAuthenticated: true
    }
    break;
  case 'LOGIN_FAILURE':
    return {
      isAuthenticated: false
    }
  default:
    return state;

  }
}






// export var libraryReducer = (state = initialState.library, action) => {
//   switch (action.type) {
//     case 'LIBRARY':
//       return {
//         ...state,
//
//       }
//   }
// }
