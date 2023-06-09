import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../styles/test.css";

const responsive = {

	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
		slidesToSlide: 1 // optional, default to 1.
	},

	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 1 // optional, default to 1.
	},

	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};

function TrySlider({ scrollimages}) {

	return (

		<Carousel responsive={responsive} showDots={false} swipeable={true} infinite={true} preventMovementUntilSwipeScrollTolerance={false}>
			{scrollimages.map((image) => {
				return (
					<div className='item' key={image.id}>
						<div className='image-container'>
							<img className='image-carousel' src={process.env.PUBLIC_URL + image.url} key={image.id} />
							<div className='image-text'>{image.text}</div>
						</div>
					</div>
				);
			})}
		</Carousel>
	)
}

export default TrySlider