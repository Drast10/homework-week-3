

const initialState = {
  result: []
};
export default (state=initialState, action={}) =>{

  switch(action.type){
    case'ADD_MODEL':
    const newModel = {
      name: action.payload.name, // not really unique but good enough here!
      manufacturer: action.payload.data.manufacturer,
      year: action.payload.data.year,
      origin:action.payload.data.origin
  }
    return { ...state,
      result :state.result.concat(newModel)
    }

    default:  return state
  }
 
}

