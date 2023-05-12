import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

export const addContact = (contact) =>{
    return{
        type : "CREATE_CONTACT",
        payload : contact
    }
}

const initialState = {
    "groups":[
        {
            "id":"1",
            "name":"Friend"
        },
        {
            "id":"2",
            "name":"Family"
        },
        {
            "id":"3",
            "name":"Colleague"
        },
        {
            "id":"4",
            "name":"Social"
        },
        {
            "id":"5",
            "name":"Community"
        }
    ]
};

const contactReducer = (state = initialState, action)=>{
    switch(action.type){
        case "CREATE_CONTACT":
            return {
                ...state,
                contacts : [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
