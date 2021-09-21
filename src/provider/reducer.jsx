import actionTypes from "../utils/Utils";

export const initialState = {
    theme: false,
    isDrawerOpen: false,
    isLoading: true,
    searchData: "",
};


const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                theme: action.theme,
            }
        case actionTypes.OPEN_DRAWER:
            return {
                ...state,
                isDrawerOpen: action.isDrawerOpen,
            }
        case actionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case actionTypes.SET_DATA:
            return {
                ...state,
                data: action.data,
            }
        default:
            return state;
    }
}

export default reducer;