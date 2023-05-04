const initialdata = {
    alluserdata:[]
 }
 
 const Reducer = (storedata=initialdata,action) => {
   if (action.type === "alluserdata") {
     return {
        alluserdata:action.payload
     }
 }
 return storedata;
 }
 
 export default Reducer
