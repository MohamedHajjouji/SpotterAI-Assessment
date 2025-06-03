
import './App.css'
import { Users, Heart, ArrowRight, CheckCircle, Globe } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Any browser, any device.",
      subtitle: "Cross-platform compatibility",
      description: "Works on iOS and Android, with exceptional accuracy."
    },
    {
      icon: Users,
      title: "Identify all anonymous visitors.",
      subtitle: "Complete visitor intelligence",
      description: "Get details on browsing habits even when VPN, incognito mode, or temporal cookies are used."
    },
    {
      icon: Heart,
      title: "Delight your trusted users.",
      subtitle: "Enhanced user experience",
      description: "Personalize user experience and reduce 3A and OTP requirements by identifying logged-out users."
    }
  ];

  // Animated chart data points
  const chartPoints1 = [
    { x: 10, y: 60 }, { x: 25, y: 45 }, { x: 40, y: 55 }, { x: 55, y: 40 }, 
    { x: 70, y: 35 }, { x: 85, y: 25 }, { x: 100, y: 20 }
  ];
  
  const chartPoints2 = [
    { x: 10, y: 80 }, { x: 25, y: 75 }, { x: 40, y: 78 }, { x: 55, y: 70 }, 
    { x: 70, y: 65 }, { x: 85, y: 68 }, { x: 100, y: 60 }
  ];

  const createPath = (points: any[]) => {
    return points.reduce((path, point, index) => {
      return path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`);
    }, '');
  };


   return (
    <div className="min-h-screen  flex flex-row items-center  min-w-screen ">
    <div className="w-full max-w-6xl mx-auto shadow-md rounded-2xl border-gray-200 overflow-hidden relative max-h-fit">
      {/* Animated background elements */}
   

      <div className="relative h-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-8">
          
          {/* Left Column - Main Content */}
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Logo */}
            <div className='space-y-4'>
            <div className="flex items-center space-x-2 group">
              <div className="w-3 h-3 bg-[#F84960] rounded-full "></div>
              <div className="w-3 h-3 bg-[#008080] rounded-full "></div>
              <div className="w-3 h-3 bg-[#BCDDDE] rounded-full "></div>  
            </div>
            <div className=" text-lg font-bold   transition-colors text-[#008080] duration-300">
                Why Spotter
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-gray-900">The internet's most</span>
                <br />
                <span className=" text-[#008080]">
                  accurate
                </span>
                <span className="text-gray-900"> visitor identifier</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className='font-semibold'> Industry-leading accuracy</span> that lasts for months or years, 
                even when cookies are cleared.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className=" cursor-pointer  group bg-[#008080] text-white px-6 py-3 rounded-xl font-semibold  hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Chart */}
<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/20">
  <div className="relative h-40 w-full">
    <svg
      viewBox="10 0 90 100"
      preserveAspectRatio="none"
      className="w-[90%] ml-[15px] h-full"
    >
      {/* Grid lines */}
      {[20, 40, 60, 80].map((y) => (
        <line
          key={y}
          x1="10"
          y1={y}
          x2="110"
          y2={y}
          stroke="#e2e8f0"
          strokeWidth="0.5"
        />
      ))}

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>

      {/* Chart lines */}
      <path
        d={createPath(chartPoints1)}
        fill="none"
        stroke="url(#gradient1)"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={createPath(chartPoints2)}
        fill="none"
        stroke="url(#gradient2)"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />

      {/* Data points */}
      {chartPoints1.map((point, index) => (
        <circle
          key={`point1-${index}`}
          cx={point.x}
          cy={point.y}
          fill="#0d9488"
        />
      ))}
      {chartPoints2.map((point, index) => (
        <circle
          key={`point2-${index}`}
          cx={point.x}
          cy={point.y}
          fill="#ec4899"
        />
      ))}
    </svg>

    {/* Axis labels */}
    <div className="absolute bottom-1 left-0 right-0 flex justify-between text-xs text-gray-400 px-4">
      <span>0</span>
      <span>30</span>
      <span>60</span>
      <span>90</span>
      <span>120</span>
    </div>
  </div>
  </div>
  
 
  {/* Two sentences below the chart */}
  <div className="flex justify-between items-center mt-4 text-[12px] text-gray-600">
    <span className='ml-[15px]'>Acurracy Drop Off</span>
    <span className='mr-[15px]'>Days after initial identficication</span>
  </div>
</div>

  


          {/* Right Column - Features */}
          <div className={`space-y-4 transform min-h-full flex flex-col transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div
              className={`group bg-white/60 backdrop-blur-sm rounded-xl p-4  transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer shadow-md `}
              
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-[#008080]">
                  <Globe className="w-5 h-5 transition-colors duration-300 text-white" />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                    Any browser, any device.
                  </h3>
                  
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                   Identify returning web and mobile app visitors on all
 browsers, iOS, and Android, with exceptional accuracy.
                  </p>
                </div>
                <CheckCircle className={`w-4 h-4 transition-all duration-300 text-[#008080] opacity-100 scale-110`} />
              </div>
            </div>

           

            <div
              className={`group bg-white/60 backdrop-blur-sm rounded-xl p-4  transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer shadow-md`}
              
            >
              <div className='w-full h-[150px]  lg:h-[183px] flex flex-col gap-2 overflow-hidden'>

                {Array.from({ length: 100 }).map((_, rowIdx) => (
                  <div key={rowIdx} id='line' className='w-full flex justify-between'>
                    {Array.from({ length: 40 }).map((_, colIdx) => (
                      <div key={colIdx} className="h-1 bg-gray-200 w-1 rounded-full mb-2"></div>
                    ))}
                  </div>
                ))}
                
              </div>
              <div className="flex items-start space-x-3 mt-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-[#008080]">
                  <Users className="w-5 h-5 transition-colors duration-300 text-white" />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                    Identify all anonymous visitors.
                  </h3>
                  
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Get details on suspicious visitors even when VPN,
 incognito mode, or a tampered browser or device is
 used.
                  </p>
                </div>
                <CheckCircle className={`w-4 h-4 transition-all duration-300 text-[#008080] opacity-100 scale-110`} />
              </div>
            </div>
           

            <div
              className={`group bg-white/60 backdrop-blur-sm rounded-xl p-4  transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer shadow-md`}
              
            
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-[#008080]">
                  <Heart className="w-5 h-5 transition-colors duration-300 text-white" />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                    Delight your trusted users.
                  </h3>
                 
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Personalize user experience and reduce 2FA and OTP
 requirements by identifying logged-out users.
                  </p>
                </div>
                <CheckCircle className={`w-4 h-4 transition-all duration-300 text-[#008080] opacity-100 scale-110`} />
              </div>
            </div>
            
         
          </div>
        </div>
      </div>
    </div>
    </div>
  );


}

export default App
