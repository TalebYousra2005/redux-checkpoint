const initialState = {
  filter : "",
}

const  FilterReducer = (state=initialState,action)=>{
  const {type,payload}=action
   switch (type) {
  case "SETFILTER":
    return { ...state, filter:state.filter = payload };
  default:
    return state;
   }
}
export default FilterReducer;
