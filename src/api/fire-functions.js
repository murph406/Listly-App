import { fireDB } from './firebase';
import storeProvider from '../api/redux-store';
import UserActionTypes from '../action-types/user-action-types';

let defualtData =   [
        {
         "catagory": "Hello",
         "dateCreated":  [
           "Tue",
           "May",
           "07",
           "2019",
           "19:12:29",
         ],
         "notes":  [
            {
             "info": "Swipe Right to remove card ",
             "time":  [
               "Tue",
               "May",
               "07",
               "2019",
               "19:13:02",
             ],
             "value": "Your cards live here ",
           },
         ],
       },
     ]


export function addUser (user) {
    console.log('FIREEE>>>',user)
    
    // storeProvider.dispatch({
    //     type: UserActionTypes.SET_CARD,
    //     cards: defualtData
    // })

    let userParsed = JSON.stringify(user)
    let defaultDataParsed = JSON.stringify(defualtData)
    
    fireDB.ref('/users').push({
        userData: userParsed,
        appData: defaultDataParsed
    })
    .then(()=> console.log("YUUP"))
    .catch((e) => console.log("ERROR",e))

}