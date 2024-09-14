import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SuccessStories() {
  const WithStyles = ({ description, headline, image }) => {
    return (
      <div className="p-4">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={image}
            alt={headline}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{headline}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-center py-14">
        <p className="text-[2.5rem] text-center text-primary font-semibold pb-2">
          The Stories We Love to Hear
        </p>
      </div>
      <div className="w-full px-48">
        <Carousel
          additionalTransfrom={0}
          centerMode
          arrows
          autoPlaySpeed={3000}
          className=""
          containerClass="container-with-dots"
          draggable
          //   infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind
          rewindWithAnimation
          shouldResetAutoplay
          showDots
          slidesToSlide={1}
          swipeable
        >
          <div className="">
            <WithStyles
              description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
              headline="w3js.com - web front-end studio"
              image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div>
            <WithStyles
              description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
              headline="w3js.com - web front-end studio"
              image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div>
            <WithStyles
              description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
              headline="w3js.com - web front-end studio"
              image="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div>
            <WithStyles
              description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
              headline="w3js.com - web front-end studio"
              image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          {/* Add more WithStyles components as needed */}
        </Carousel>
      </div>
    </div>
  );
}

export default SuccessStories;
