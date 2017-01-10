import {combineReducers} from 'redux'


const allReducers = combineReducers({

    testing:(state=null, action)=> {
        switch(action.type) {
            case "TESTING":
                return action.name;
            }
        return state;
    },
});

export default allReducers;
