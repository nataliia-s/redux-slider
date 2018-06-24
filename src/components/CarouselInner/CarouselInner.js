import React, {Component} from 'react';
import './CarouselInner.css';

class CarouselInner extends Component {

    render() {
        return (

            <div className="carousel-inner" style={{
                width: parseInt(this.props.slideWidth, 10) * (this.props.slides ? this.props.slides.length : 0),
                left: -1 * parseInt(this.props.slideWidth, 10) * (this.props.currSlide - 1)
            }}>
                {
                    this.props.slides && this.props.slides.map((slide, index) => {
                        return (
                            <span key={index}
                                  className={(index + 1 === this.props.currSlide) ? "active" : "carousel-item"}>
                                    <img src={slide.hero} alt="carousel hero"/>

                                     <div className="carousel-content">
                                         <div className="carousel-content-inner">
                                             <div className="text-container">
                                                 <img src={slide.image} alt="carousel thumbnail"/>
                                                <h2>{slide.text}</h2>
                                             </div>
                                         </div>
                                     </div>
                                </span>

                        )
                    })
                }

            </div>

        );
    }
}

export default CarouselInner;