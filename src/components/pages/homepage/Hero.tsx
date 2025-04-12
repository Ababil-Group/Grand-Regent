const Hero = () => {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dtw7qhd69/video/upload/v1744440732/Grand_Regent_wcvf3t.webm"
          type="video/webm"
        />
      </video>
    </section>
  );
};

export default Hero;
