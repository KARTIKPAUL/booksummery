import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";
// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export function CustomCarousel({ slides }) {
  return (
    <Carousel
      className="rounded-xl max-w-6xl mx-auto"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          {/* <ArrowLeftIcon className="w-8 h-8" /> */}
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          {/* <ArrowRightIcon className="w-8 h-8" /> */}
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 rounded-full transition-colors content-[''] ${
                activeIndex === i ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative h-96 md:h-[500px]">
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center">
            <div className="w-4/5 mx-auto text-center md:w-2/3 lg:text-left lg:pl-20">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {slide.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 opacity-80 text-sm md:text-base"
              >
                {slide.description}
              </Typography>
              {slide.buttonText && (
                <a href={slide.buttonLink || "#"}>
                  <Button size="lg" color="white">
                    {slide.buttonText}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
