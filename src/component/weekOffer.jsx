import adv1 from "../assets/adv1.png";

export const WeekOffer = () => {
  return (
    <section className="relative w-full flex flex-row justify-center items-center bg-sky-800 p-4 md:p-8 gap-4 md:gap-8 my-4 overflow-hidden">
      {/* Image */}
      <div className="flex-1 md:w-1/3 flex justify-center relative">
        <img
          src={adv1}
          alt="Week Offer"
          className="h-auto md:h-80 object-contain transform transition-transform duration-700 hover:scale-105 animate-fadeIn"
        />
      </div>
      {/* Discount Tag */}
      <p className="absolute top-3 left-0 bg-red-600 px-5 py-1 rounded-br-[12px] rounded-tr-[12px] text-xs md:text-sm font-bold animate-pulse">
        50% Discount
      </p>

      {/* Content */}
      <div className="flex-2 md:w-2/3 flex flex-col justify-start items-start text-white gap-3 md:gap-4 animate-slideInRight">
        <h4 className="text-[10px] md:text-xl text-white/90 font-semibold bg-sky-600 px-4 md:px-5 py-1 rounded-tr-3xl rounded-bl-3xl transform transition-all duration-700 hover:scale-105">
          Weekly Special Offer
        </h4>
        <h2 className="text-[10px] md:text-3xl font-bold text-white/90 animate-fadeIn delay-200">
          Limited Time Deal – Don’t Miss Out!
        </h2>
        <p className="text-[9px] sm:block md:text-base text-white/90 animate-fadeIn delay-400">
          Grab your favorite products with amazing discounts. Hurry up before
          the offer ends!
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-nowrap gap-1 md:gap-3 mt-2">
          {[
            { value: "10", label: "Days" },
            { value: "10", label: "Hours" },
            { value: "05", label: "Minutes" },
            { value: "10", label: "Seconds" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-black/60 text-white/90 
              border-2 border-white/40 rounded-full w-9 h-9 md:w-16 md:h-16 animate-bounce delay-[${index*100}ms]"
            >
              <span className="font-extrabold text-sm md:text-lg">
                {item.value}
              </span>
              <span className="font-semibold text-[8px] md:text-[10px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframes (optional, in tailwind.config.js) */}
      {/* 
        extend: {
          animation: {
            fadeIn: 'fadeIn 1s ease-in-out',
            slideInRight: 'slideInRight 1s ease-out'
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 }
            },
            slideInRight: {
              '0%': { transform: 'translateX(50px)', opacity: 0 },
              '100%': { transform: 'translateX(0)', opacity: 1 }
            }
          }
        }
      */}
    </section>
  );
};
