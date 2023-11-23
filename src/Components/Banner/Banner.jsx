
import { Carousel } from "keep-react";

const Banner = () => {
    return (
        <div className="mt-10 mb-10">
            <div className="grid grid-cols-2 gap-4">
                <Carousel
                    showControls={false}
                    indicatorsType="ring"
                    indicatorsTypeColors="slate"
                >
                    <img src="https://i.ibb.co/9nWnt3V/pngtree-happy-marriage-to-your-wedding-board-background-material-image-137770.jpg"
                        alt="slider-1"
                        height={384}
                        width={440} />
                    <img src="https://i.ibb.co/LNkkbYy/lovepik-the-golden-palace-is-the-wedding-background-wall-picture-500666598.jpg"
                        alt="slider-1"
                        height={384}
                        width={440} />
                    <img src="https://i.ibb.co/HndW6Xq/istockphoto-1222589192-170667a.webp"
                        alt="slider-1"
                        height={384}
                        width={440} />


                </Carousel>
                <Carousel
                    showControls={false}
                    indicatorsType="ring"
                    indicatorsTypeColors="slate"
                >

                    <img src="https://i.ibb.co/HndW6Xq/istockphoto-1222589192-170667a.webp"
                        alt="slider-1"
                        height={384}
                        width={440} />

                    <img src="https://i.ibb.co/9nWnt3V/pngtree-happy-marriage-to-your-wedding-board-background-material-image-137770.jpg"
                        alt="slider-1"
                        height={384}
                        width={440} />

                    <img src="https://i.ibb.co/LNkkbYy/lovepik-the-golden-palace-is-the-wedding-background-wall-picture-500666598.jpg"
                        alt="slider-1"
                        height={384}
                        width={440} />

                </Carousel>
            </div>
        </div>
    );
};

export default Banner;