import {API_URL} from './../config';
export const SLIDES_SUCCESS = 'SLIDES_SUCCESS';
export const SLIDER_FAILURE = 'SLIDER_FAILURE';
export const SELECT_NEXT = 'SELECT_NEXT';
export const SELECT_PREV = 'SELECT_PREV';

export const slidesSuccess = (slides) => {
    return {
        type: 'SLIDES_SUCCESS',
        slides
    }
};

export const requestError = (error) => ({
    type: 'SLIDER_FAILURE',
    errorMessage: error
});

export const selectNext = () => ({
    type: 'SELECT_NEXT'
});

export const selectPrev = () => ({
    type: 'SELECT_PREV'
});


export function fetchSlides() {
    return (dispatch) => {
        dispatch(slidesSuccess());
        return fetch(`${API_URL}/slider`)

            .then(handleErrors)
            .then(res => res.json())
            .then(slides => {
                dispatch(slidesSuccess(slides));
                return slides;
            })
            .catch(error => dispatch(requestError(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

