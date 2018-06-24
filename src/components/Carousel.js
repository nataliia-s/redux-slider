import React, {Component} from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as slidesActions from './../actions/index';
import CarouselInner from './CarouselInner/CarouselInner';
import CarouselBtn from './CarouselBtn/CarouselBtn';
import {AUTOPLAY_INTERVAL} from './../config'
class Carousel extends Component {
    componentDidMount() {
        this.props.slidesActions.fetchSlides();
        this.startAutoPlay();
    }

    startAutoPlay() {
        if (this.props.autoPlay) {
            this.interval = setInterval(() => {
                this.props.slidesActions.selectNext();
            }, AUTOPLAY_INTERVAL);
        }
    }

    stopAutoPlay() {
        if (this.props.autoPlay && this.interval) {
            clearInterval(this.interval);
        }
    }


    componentWillUnmount() {
        this.stopAutoPlay();
    }

    render() {
        const { error, loading, slides, currSlide } = this.props.slidesEntity;
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="carousel" onMouseEnter={this.stopAutoPlay.bind(this)}
                 onMouseLeave={this.startAutoPlay.bind(this)}>
                <CarouselInner slideWidth="640" slides={slides} currSlide={currSlide}/>
                <CarouselBtn selectPrev={this.props.slidesActions.selectPrev} selectNext={this.props.slidesActions.selectNext} />
            </div>
        )
    }
}

Carousel.propTypes = {
    slidesEntity: PropTypes.shape({
        slides: PropTypes.array
    }),
    slidesActions: PropTypes.shape({
        fetchSlides: PropTypes.func,
        selectNext: PropTypes.func,
        selectPrev: PropTypes.func,
    })
};

CarouselInner.defaultProps = {};

const mapDispatchToProps = (dispatch) => ({
    slidesActions: bindActionCreators(slidesActions, dispatch)
});

const mapStateToProps = state => {
    return {
        slidesEntity: state
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Carousel);