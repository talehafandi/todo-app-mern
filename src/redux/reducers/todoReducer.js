// const initialState = {
//     tasks: [],
//     filter: 'all'
// };
const initialState = []


export function todoReducer(state = initialState, action) {

    switch (action.type) {

        case 'GET_TASKS':
            return action.payload;
        case 'GET_ARCHIVED':
            return action.payload;
        case 'GET_BY_STATUS':
            return action.payload;
        case 'ADD':
            return action.payload;
        case 'ARCHIVE':
            return action.payload;
        case 'RESTORE':
            return action.payload;
        case 'UPDATE':
            return action.payload;
        case 'CHECK':   
            return action.payload;
        case 'CLEAR':
            return action.payload;

    
        default:
            break;
    }


    return state;
}