

const favouriteReducer = (state = [],action) => {
    switch(action.type) {
        case "ADDFAV": return [...state, action.payload]

        case "DELFAV": 
            return [...state.filter(music => music !== action.payload)]
            
        default: 
          return state;
      }
}

export default favouriteReducer

