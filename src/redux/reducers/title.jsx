const initialState = {
  title : "hey",
}

const  TitleReducer = (state=initialState,action)=>{
  const {type,payload}=action
   switch (type) {
  case "CHANGETITLE":
    return { ...state, title:state.title = payload };
  default:
    return state;
   }
}
export default TitleReducer;
