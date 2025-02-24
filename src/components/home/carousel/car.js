import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the default styling
import "./car.css"; // Custom styles
import img1 from "../../../assets/Hackathon_home.jpg";
import img2 from "../../../assets/MockTrading.jpg";
import img3 from "../../../assets/starup_home.png";
import img4 from "../../../assets/workshop_home.jpg";
import img5 from "../../../assets/QuantTrading.png";
import img6 from "../../../assets/prizedist.jpg";

const images = [
  { id: 1, src: img1, alt: "Image 1", title: "Web3 and AI Hackathon" },
  { id: 2, src: img2, alt: "Image 2", title: "Mock Trading Competition" },
  { id: 3, src: img3, alt: "Image 3", title: "Elevator Pitch and Research Challenge" },
  { id: 4, src: img4, alt: "Image 4", title: "Blockchain Workshop" },
  { id: 5, src: img5, alt: "Image 4", title: "Quant Trading Workshop" },
  { id: 6, src: img6, alt: "Image 4", title: "Exciting Prizes" },
];

const CircularCarousel = () => {
  return (
    <div className="circular-carousel-wrapper">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        stopOnHover={true}
        swipeable={true}
      >
        {images.map((image) => (
          <div key={image.id} className="circular-slide-wrapper">
            {/* Circular Image */}
            <div className="circular-image-container">
              <img src={image.src} alt={image.alt} />
            </div>
            {/* Title */}
            <h4 className="image-title gradient-text">{image.title}</h4>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CircularCarousel;
