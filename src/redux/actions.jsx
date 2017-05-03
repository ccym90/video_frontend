//////////////////////////    VIDEO ACTIONS     ////////////////////////////////////////////////////////////////
export var streaming = (src) => {
return {
    type: 'SET_STREAM',
    src,
  };
};

export var beginRecording = (recording, preview) => {
	return {
    type: 'RECORDING',
    recording,
    preview
   };
};

export var finishingRecording = (recording, recorded) => {
  return {
    type: 'STOP_RECORDING',
    recording,
    recorded,
  };
};

export var onPreview = (preview) => {
  return {
    type: 'PREVIEW',
    preview
  };
};

export var downloaded = (downloaded) => {
  return {
    type: 'DOWNLOADED',
    downloaded
  };
};


export var saving = (uploadSuccess) => {
  return {
    type: 'SAVE',
    uploadSuccess
  };
}

//////////////////////////    LOGIN ACTIONS     ////////////////////////////////////////////////////////////////
export var askLogin = (username, password) => {
  return {
    type: 'LOGIN_REQUEST',
    username,
    password
  }
}

export var receiveLogin = (admin) => {
  return {
    type: 'LOGGED_CORRECT',
    admin
  }
}

export var loginError = () => {
  return {
    type: 'LOGIN_FAILURE'
  }
}
