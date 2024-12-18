import bookBackground from "/images/bookBackground.png";
import rectangle from "/images/rectangle.svg";
import ReactTidyCal from "react-tidycal";

export default function ReservationPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center relative text-center">
          <img
            src={bookBackground}
            alt="bookbackground"
            className="h-[275px] md:h-[312px] lg:h-[375px] w-full object-center object-cover -z-10"
          />
          <div className="absolute bg-[rgba(21,21,27,0.80)] h-[275px] md:h-[312px] lg:h-[375px] w-full flex flex-row justify-center items-center">
            <span>
              <img src={rectangle} alt="rectangle" className="-scale-x-100 w-[80px] sm:w-[100px] md:w-[120px]" />
            </span>
            <span className="text-[20px] sm:text-5xl text-white uppercase font-daysOne mx-5">
              Bookings
            </span>
            <span>
              <img src={rectangle} alt="rectangle" className="w-[80px] sm:w-[100px] md:w-[120px]" />
            </span>
          </div>
        </div>
        <ReactTidyCal path="manilabrothersauto/booking" />
      </div>
    </>
  );
}
