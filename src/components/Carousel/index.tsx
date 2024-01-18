import Carousel from 'react-bootstrap/Carousel';
import GrayImage from './gray.png';

const CarouselScreen = () => {
    return (
        <Carousel>
            <Carousel.Item>
                {/* <GrayImage /> */}
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselScreen;