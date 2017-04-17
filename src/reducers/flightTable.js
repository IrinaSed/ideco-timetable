export default (state, action) => {
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
