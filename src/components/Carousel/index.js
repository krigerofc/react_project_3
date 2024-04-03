import Slider from "react-slick";
import './carousel.css'

function Carousel({ children }){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return(
        <section>
            <Slider {...settings}>
                { children }
            </Slider>
        </section>
    );
}

export default Carousel;