import { createStore } from 'redux'
var store = undefined;

export default {
    init(configureStore){
        store = configureStore();
    },
    getStore(){
        return store;
    }
};