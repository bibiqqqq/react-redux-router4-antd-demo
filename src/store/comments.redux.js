const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

export function comments (state, action) {
    switch(action.type) {
        case INIT_COMMENTS:
        case ADD_COMMENT:
        case DELETE_COMMENT:
        default:
            return state
    }
}