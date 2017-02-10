

export default function(state, action) {
    switch (action.type){
        case 'SET_TEXT':
            return {...state, text: action.payload };
        default:
            return state
    }

}