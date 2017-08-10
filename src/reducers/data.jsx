
// cardNumber, id, content, areItDid
const initialState = {
  "1": {
    "settings": {
      "listBgc": "#FFD180",
      "textColor": "black",
      "listTitle": "Today"
    },
    "1": {
      "content": "'Lorem' + chr(13) + 'ipsum dolor'",
      "areItDid": false
    },
    "2": {
      "content": "Sed quis sapien eu",
      "areItDid": false
    },
    "3": {
      "content": "Ut ut neque at enim suscipit ultrices id at dolor.",
      "areItDid": true
    },
    "4": {
      "content": "In sed ante vel lorem mollis",
      "areItDid": false
    },
    "5": {
      "content": "Nam aliquet",
      "areItDid": false
    },
    "6": {
      "content": "Donec pretium orci vel egestas faucibus.",
      "areItDid": true
    }
  },
  "2": {
    "settings": {
      "listBgc": "#80D8FF",
      "textColor": "black",
      "listTitle": "Tomorrow"
    },
    "1": {
      "content": "Etiam eu turpis commodo",
      "areItDid": false
    },
    "2": {
      "content": "Nunc non nisl quis dui",
      "areItDid": false
    },
    "3": {
      "content": "Aenean malesuada ligula a elit rutrum, ac dignissim dolor sodales.",
      "areItDid": true
    },
    "4": {
      "content": "Quisque id nibh",
      "areItDid": true
    },
    "5": {
      "content": "Metus tempor pellentesque.",
      "areItDid": false
    },
    "6": {
      "content": "Etiam tempor risus in diam",
      "areItDid": false
    },
    "7": {
      "content": "Imperdiet dui varius.",
      "areItDid": false
    },
    "8": {
      "content": "Rhoncus nisi et justo aliquet rutrum.",
      "areItDid": true
    }
  },
  "3": {
    "settings": {
      "listBgc": "#CCFF90",
      "textColor": "black",
      "listTitle": "Last week"
    },
    "1": {
      "content": "Donec pretium orci vel egestas faucibus.",
      "areItDid": false
    },
    "2": {
      "content": "Faucibus risus id, faucibus mi.",
      "areItDid": false
    },
    "3": {
      "content": "Hahaha",
      "areItDid": false
    },
    "4": {
      "content": "Libero congue maximus et ut enim.",
      "areItDid": false
    }
  },
  "4": {
    "settings": {
      "listBgc": "#ffffff",
      "textColor": "black",
      "listTitle": "Maybe"
    },
    "1": {
      "content": "Maximus sem quis felis aliquet tempor.",
      "areItDid": false
    },
    "2": {
      "content": "Ligula at diam mattis",
      "areItDid": false
    },
    "3": {
      "content": "Non nisl quis dui accumsan",
      "areItDid": false
    },
    "4": {
      "content": "Mauris non massa",
      "areItDid": false
    },
    "5": {
      "content": "Dolor eget metus tempor pellentesque. Vestibulum maximus sem quis felis aliquet tempor. Sit amet dui porttitor tempus.",
      "areItDid": false
    },
    "6": {
      "content": "Bnon nisl quis dui accumsan congue.",
      "areItDid": false
    },
    "7": {
      "content": "Con massa a libero congue m",
      "areItDid": false
    },
    "8": {
      "content": "Ligula a elit rutrum, ac dignissim ",
      "areItDid": false
    },
    "9": {
      "content": "Vel egestas faucibus.",
      "areItDid": false
    },
    "10": {
      "content": "Commodo finibus.Aenean malesuada ligula a elit rutrum, ac dignissim dolor sodales. Quisque id nibh sit amet dui porttit",
      "areItDid": false
    }
  }
}


export default function data(state = initialState, action) {

  if (action.type === 'TEST') {
    console.log('I am TEST in reducer.jsx')
    return state;
  }


  else if (action.type === 'ADD_NOTE') {

    // console.log(action.payload)
    let listId = action.payload.listId;
    let value = action.payload.value;
    let list = state[listId];
    let itemMax = 0
    // eslint-disable-next-line
    for(let item in list) {
      if ((item >= itemMax)&&(item!=='settings')) {
        itemMax = item + 1;
      }
    }


    state[listId] = {
      ...state[listId],
      [itemMax]: {
        "content": value,
        "areItDid": false
      }
    }

    return { ...state};
  }


  else if (action.type === 'DELETE_NOTE') {
    // console.log('here', action.payload);
    let listId = action.payload.listId;
    let itemId = action.payload.itemId;

    // for (let item in state[listId]) {
    //   console.log(itemId, item)
    //   if(item === itemId){
    //     console.log(itemId)
    //     delete state[listId][itemId]
    //   }
    // }



    // console.log('ooooooooooo')

    delete state[listId][itemId];





    return { ...state };
  }

  else if (action.type === 'TOGGLE_DID') {
    let listId = action.payload.listId;
    let itemId = action.payload.itemId;
    state[listId][itemId].areItDid = !state[listId][itemId].areItDid
    return {...state};
  }

  else if (action.type === 'ITEM_CHANGE') {
    // console.log('ITEM_CHANGE', action.payload)
    let listId = action.payload.listId;
    let itemId = action.payload.itemId;
    let value = action.payload.value;
    state[listId][itemId].content = value;
    return {...state};
  }

  else if (action.type === 'LIST_TITLE_CHANGE') {
    // console.log('LIST_TITLE_CHANGE', action.payload)
    let listId = action.payload.listId;
    let value = action.payload.value;
    state[listId].settings.listTitle = value;
    return {...state};
  }

  else if (action.type === 'DELETE_LIST') {
    // console.log('LIST_TITLE_CHANGE', action.payload)
    let listId = action.payload.listId;
    delete state[listId];
    return {...state};
  }

  else if (action.type === 'ADD_LIST') {
    // console.log('LIST_TITLE_CHANGE', action.payload)
    let listMax = 0;
    for (let list in state) {
      if ((list >= listMax) && (list !== 'settings')) {
        listMax = list + 1;
      }
    }

    state[listMax] = {
      "settings": {
        "listBgc": "#ffffff",
        "textColor": "black",
        "listTitle": "New list"
      }
    }

    return {...state};
  }

  else if (action.type === 'CHANGE_COLOR_LIST') {
    console.log(action.payload)
    let listId = action.payload.listId;
    let color = action.payload.value;
    state[listId].settings.listBgc = color;
    return { ...state };
  }



  else {
    return state;
  }
}
