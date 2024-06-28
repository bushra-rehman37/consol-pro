import Image from "next/image";

const Game = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[75vh] lg:h-[90vh] bg-black" id="game">
      {/* Background Image */}
      <div className="relative w-full h-full">
        <Image
          src="/assets/bg (1).png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-70" // Optional: Add some opacity to the background image
        />
      </div>

      {/* Overlay Image */}
      <div className="absolute top-0 right-0 p-4">
      
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <div className="relative">
          <Image
            src="/assets/bg (2).png"
            alt="Overlay Image"
            width={350}
            height={350}
            className="w-[50px] h-[50px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] animate-spin-slow-game"
          />
          <p className="absolute inset-0 flex items-center justify-center text-lg md:text-xl lg:text-2xl -mt-6 md:-mt-4 lg:-mt-10">
            Play
          </p>
        </div>
      </div>

    </div>
  );
};

export default Game;