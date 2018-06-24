import * as actions from './../actions';

const initialState = {slides: [], errorMessage: '', currSlide: 1};

export default function slides(state = initialState, action) {
    switch (action.type) {

        case actions.SLIDES_SUCCESS:
            return Object.assign({}, state, {
                slides: action.slides
            });

        case actions.SLIDER_FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage,
            });

        case actions.SELECT_NEXT:
            let nextSlide = 1;

            if (state.currSlide < state.slides.length) {
                nextSlide = state.currSlide + 1;
            }

            return {
                ...state,
                currSlide: nextSlide,
            };

        case actions.SELECT_PREV:
            let prevSlide = 1;

            if (state.currSlide === 1) {
                prevSlide = state.slides.length;
            } else {
                prevSlide = state.currSlide - 1;
            }

            return {
                ...state,
                currSlide: prevSlide,
            };

        default:
            return state;
    }
}