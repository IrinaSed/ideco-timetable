export default (state= {time: 'arrival', buttons:false}, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ARRIVAL':
            return {
                ...state,
                time: 'arrival'
            };
        case 'DEPARTURE':
            return {
                ...state,
                time: 'departure'
            };
        case 'ADMIN':
            return {
                ...state,
                buttons: !state.buttons,
            };
        default:
            return state
    }
}
