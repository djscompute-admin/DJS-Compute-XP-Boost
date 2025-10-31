'use client';

import Image from 'next/image';

export default function PrizePool() {
  return (
    <section 
      id="prize-pool" 
      className="relative min-h-screen text-white py-20 overflow-hidden"
    >
      {/* Shared background removed - will be applied to parent container */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="jolly-lodger-regular text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8 md:mb-12 text-orange-500 uppercase tracking-wide">
          Prize Pool
        </h2>

        {/* Prize Pool Container */}
        <div className="relative max-w-5xl mx-auto" style={{ minHeight: '600px' }}>
          
          {/* Small Ghost 1 - Top Left */}
          <div 
            className="absolute animate-float"
            style={{ 
              top: '5%', 
              left: '8%',
              transform: 'rotate(-15deg)',
              zIndex: 5
            }}
          >
            <Image 
              src="/prize_pool/small_ghost_1.png" 
              alt="Ghost" 
              width={75} 
              height={75}
              className="w-15 h-15 sm:w-17 sm:h-17 md:w-20 md:h-20"
            />
          </div>

          {/* Small Ghost 2 - Top Center */}
          <div 
            className="absolute animate-float"
            style={{ 
              top: '8%', 
              left: '28%',
              transform: 'rotate(20deg)',
              zIndex: 5,
              animationDelay: '0.5s'
            }}
          >
            <Image 
              src="/prize_pool/small_ghost_2.png" 
              alt="Ghost" 
              width={65} 
              height={65}
              className="w-13 h-13 sm:w-15 sm:h-15 md:w-18 md:h-18"
            />
          </div>

          {/* First Prize - Top Center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center z-10">
            <p className="jolly-lodger-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">First Prize</p>
            <p className="jolly-lodger-regular text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">₹5K</p>
          </div>

          {/* Small Ghost 3 - Top Right */}
          <div 
            className="absolute animate-float"
            style={{ 
              top: '12%', 
              right: '25%',
              transform: 'rotate(-25deg)',
              zIndex: 5,
              animationDelay: '1s'
            }}
          >
            <Image 
              src="/prize_pool/small_ghost_3.png" 
              alt="Ghost" 
              width={70} 
              height={70}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18"
            />
          </div>

          {/* Small Ghost 4 - Top Far Right */}
          <div 
            className="absolute animate-float"
            style={{ 
              top: '8%', 
              right: '8%',
              transform: 'rotate(18deg)',
              zIndex: 5,
              animationDelay: '1.5s'
            }}
          >
            <Image 
              src="/prize_pool/small_ghost_4.png" 
              alt="Ghost" 
              width={80} 
              height={80}
              className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20"
            />
          </div>

          {/* Second Prize - Left */}
          <div className="absolute top-[25%] left-[5%] sm:left-[8%] text-center z-10">
            <p className="jolly-lodger-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">Second Prize</p>
            <p className="jolly-lodger-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">₹3K</p>
          </div>

          {/* Small Ghost - Left Side */}
          <div 
            className="absolute animate-float"
            style={{ 
              top: '28%', 
              left: '2%',
              transform: 'rotate(-20deg)',
              zIndex: 5,
              animationDelay: '0.8s'
            }}
          >
            <Image 
              src="/prize_pool/small_ghost_1.png" 
              alt="Ghost" 
              width={65} 
              height={65}
              className="w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16"
            />
          </div>

          {/* Big Ghost - Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Image 
              src="/prize_pool/big_ghost.png" 
              alt="Main Ghost" 
              width={300} 
              height={400}
              className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 animate-float"
              priority
            />
          </div>

          {/* Third Prize - Right */}
          <div className="absolute top-[25%] right-[5%] sm:right-[8%] text-center z-10">
            <p className="jolly-lodger-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">Third Prize</p>
            <p className="jolly-lodger-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">₹2K</p>
          </div>

          {/* Small Ghost - Right Side */}
          <div 
            className="absolute animate-float"
            style={{ 
              top: '35%', 
              right: '2%',
              transform: 'rotate(25deg)',
              zIndex: 5,
              animationDelay: '1.2s'
            }}
          >
            <Image 
              src="/prize_pool/small_ghost_2.png" 
              alt="Ghost" 
              width={70} 
              height={70}
              className="w-14 h-14 sm:w-15 sm:h-15 md:w-16 md:h-16"
            />
          </div>

          {/* Small Ghost - Bottom Left */}
          <div 
            className="absolute animate-float"
            style={{ 
              bottom: '15%', 
              right: '35%',
              transform: 'rotate(-12deg)',
              zIndex: 5,
              animationDelay: '0.3s'
            }}
          >
            <Image 
              src="/prize_pool/small_ghost_3.png" 
              alt="Ghost" 
              width={65} 
              height={65}
              className="w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16"
            />
          </div>

          {/* Small Ghost - Bottom Right */}
          <div 
            className="absolute animate-float"
            style={{ 
              bottom: '32%', 
              right: '12%',
              transform: 'rotate(15deg)',
              zIndex: 5,
              animationDelay: '1.8s'
            }}
          >
            <Image 
              src="/prize_pool/small_ghost_4.png" 
              alt="Ghost" 
              width={75} 
              height={75}
              className="w-15 h-15 sm:w-16 sm:h-16 md:w-18 md:h-18"
            />
          </div>

          {/* Pumpkins at Bottom Right */}
          <div className="absolute bottom-0 left-0 flex justify-start z-30">
            <Image 
              src="/prize_pool/pumpkins.png" 
              alt="Pumpkins" 
              width={400} 
              height={150}
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
