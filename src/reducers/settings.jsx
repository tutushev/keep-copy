const initialSettings = {
  "color": {
    "bgColors": {
      "1": "#ffffff",
      "2": "#FFD180",
      "3": "#FF8A80",
      "4": "#CFD8DC",
      "5": "#FFFF8D",
      "6": "#80D8FF",
      "7": "#A7FFEB",
      "8": "#CCFF90"
    },
    "textColors": {
      "1": "red",
      "2": "green",
      "3": "yellow",
      "4": "blue",
      "5": "black",
      "6": "white",
      "7": "wheat",
      "8": "seagreen"
    }
  }
}










export default function settings(state = initialSettings, action) {

  if (action.type === 'TEST') {
    // console.log('I am TEST in reducer.jsx')
    return state;
  }

  else {
    // console.log('I am DEFAULT in reducer.jsx')
    return state;
  }
}