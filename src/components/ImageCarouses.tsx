import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import logo from '.../logo.svg';
import Image1 from './../images/carousel1.png'
import Image2 from './../images/carousel2.jpg'
import Image3 from './../images/carousel3.jpg'
import WeddingRings from './../images/wedding-rings.svg'
import WeddingRingsWhite from './../images/wedding-rings_white.svg'
import './../index.css';


const font = 'FoulisGreek';
const font2 = "Dancing Script";

const CarouselCaption = () => {
    const captionStyles = { 
        title:{
            fontSize:100, 
            fontFamily:font2,
            color:'rgba(255,255,255,0.4)'
        },
        subtitle:{
            fontSize:40, 
            fontFamily:font2,
            color:'rgba(255,255,255,0.5)',
            fontWeight:'500'
        }
    };

    
  
    return (
      <Carousel.Caption>
        <h1 style={captionStyles.title}>Our  </h1>
        <h1 style={captionStyles.title}>Wedding</h1>
        {/* <img src={WeddingRings} style={{width:250, opacity:0.5}} /> */}
        <img src={WeddingRingsWhite} style={{width:225, opacity:0.5}} />
        <p style={captionStyles.subtitle}>31/08/24</p>
      </Carousel.Caption>
    );
  };
  

function ImageCarousel() {
  return (
    <Carousel style={{width:'90%', maxWidth:650, height:'90%', maxHeight:900, margin:20}}>
      <Carousel.Item>
        <ImageDiv number={1} />
        <Carousel.Caption>
            <CarouselCaption/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageDiv number={2} />
        <Carousel.Caption>
            <CarouselCaption/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageDiv number={3} />
        <Carousel.Caption>
            <CarouselCaption/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



interface ColorDivProps {
  number: number;
}

const ColorDiv: React.FC<ColorDivProps> = ({ number }) => {
  const getColor = (num: number): string => {
    let color = 'white';
    switch(num) {
        case 1: 
            color =  'beige'
            break;
        case 2:
            color =  'powderblue'
            break;
        case 3:
            color =  'green'
            break;
    }
    return color;
  };

  const styles = {
    backgroundColor: getColor(number),
    width: '100%',
    height: 800,
  };

  return  <div style={styles}/>
  ;
};


const ImageDiv: React.FC<ColorDivProps> = ({ number }) => {
  const imageSources = [Image1, Image2, Image3]; // Array of image sources

  const imageUrl = imageSources[number - 1]; // Access image based on number (index starts at 0)

  const styles = {
    backgroundImage: `url(${imageUrl})`, // Use backgroundImage for efficient rendering
    width: '100%',
    height: 800,
    backgroundSize: 'cover', // Ensure images cover the entire div
    backgroundPosition: 'center', // Center images within the div
  };

  return <div style={styles} />;
};



export default ImageCarousel;