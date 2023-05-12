import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    CLEAR_CONTACT,
    DELETE_SELECTED_CONTACT,
  } from "../constant/types";
  
  const intialState = {
    "contacts" : [
      {
          "id":"D6BNdnsd",
          "name":"Yashwant Yu",
          "email":"yashwant@gmail.com",
          "photo":"",
          "mobile":"7666232652",
          "description":"nujdhus ujawd aw jnjdknak",
          "groupId":"1"
      },
      {
          "id":"PSVD9nha",
          "name":"Phillip Marcos",
          "email":"phillip@gmail.com",
          "photo":"",
          "mobile":"9154165156",
          "description":"nujdhus ujawd aw jnjdknak",
          "groupId":"1"
      },
      {
          "id":"HGsSWYa2",
          "name":"Henry Classen",
          "email":"henry@gmail.com",
          "photo":"",
          "mobile":"8762165156",
          "description":"nujdhus ujawd aw jnjdknak",
          "groupId":"3"
      },
      {
          "id":"OSw5SKoa",
          "name":"Harry Norte",
          "email":"harry@gmail.com",
          "photo":"",
          "mobile":"6724165156",
          "description":"nujdhus ujawd aw jnjdknak",
          "groupId":"5"
      },
      {
          "id":"AmKSA8bd",
          "name":"Virat Singh",
          "email":"singh@gmail.com",
          "photo":"",
          "mobile":"8235235256",
          "description":"nujdhus ujawd aw jnjdknak",
          "groupId":"4"
      },
      {
          "id":"PWi0SadW",
          "name":"Sakshi Doney",
          "email":"doney@gmail.com",
          "photo":"",
          "mobile":"6515641541",
          "description":"nujdhus ujawd aw jnjdknak",
          "groupId":"3"
      },
      {
          "id":"QuOs4SSB",
          "name":"Naatu Naatu",
          "email":"naatu@gmail.com",
          "photo":"",
          "mobile":"7145825156",
          "description":"nujdhus ujawd aw jnjdknak",
          "groupId":"2"
      }
  ],
    contact: null,
    selectedContacts: [],
  };
  
  export const contactReducer = (state = intialState, action) => {
    switch (action.type) {
      case CREATE_CONTACT:
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        };
      case GET_CONTACT:
        let arr = state.contacts.filter(
          (contact) => contact.id == action.payload
        );
        arr = arr.values();
        for (let val of arr) {
          arr = val;
        }
        return {
          ...state,
          contact: arr,
        };
      case UPDATE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
            contact.id == action.payload.id ? action.payload : contact
          ),
        };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id != action.payload
          ),
        };
      case DELETE_SELECTED_CONTACT:
        return {
          ...state,
          contacts: [],
        };
      case SELECT_CONTACT:
        return {
          ...state,
          selectedContacts: action.payload,
        };
  
      case CLEAR_CONTACT:
        return {
          ...state,
          selectedContacts: [],
        };
      default:
        return state;
    }
  };
  