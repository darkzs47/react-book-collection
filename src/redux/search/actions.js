export const SET_DEBOUNCE_VALUE = "SET_DEBOUNCE_VALUE";

export const setDebouncedValue = (debouncedValue) => {
    return {
        type: SET_DEBOUNCE_VALUE,
        payload: {
            value: debouncedValue
        }
    }
}