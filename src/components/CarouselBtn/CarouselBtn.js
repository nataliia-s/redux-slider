import React, {Component} from 'react';
import './CarouselBtn.css';

class CarouselBtn extends Component {

    render() {
        return (
            <div className="btn-container">
                <button type="button" className="btn-carousel btn-prev"
                        onClick={this.props.selectPrev}></button>
                <button type="button" className="btn-carousel btn-next"
                        onClick={this.props.selectNext}></button>
            </div>
        )
    }
}

export default CarouselBtn;
