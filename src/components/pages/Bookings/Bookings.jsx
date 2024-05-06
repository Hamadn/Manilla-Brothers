import { Button } from "../../Button";
import { Img } from "../../Img";
import bokingsImg from "../../images/bookings.png";
import bookBackground from "../../images/bookBackground.png";
import rectangle from "../../images/rectangle.svg";
import { DatePickerDemo } from "../../ui/datePicker";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ReservationPage() {

  const titleRef = useRef(null);
  const rectangle1Ref = useRef(null);
  const rectangle2Ref = useRef(null);

  useEffect(() => {
    const titleAnim = gsap.timeline();
    titleAnim.fromTo(titleRef.current, 
        {scale: 0.5, opacity: 0 },
        {scale: 1, opacity: 1, duration: 2, ease: 'expo.inOut' },);

    const rect1Anim = gsap.timeline();
      rect1Anim.fromTo(rectangle1Ref.current, 
        {x: '-100%', opacity: 0 },
        {x: 0, opacity: 1, duration: 2, ease: 'expo.inOut' },); 

    const rect2Anim = gsap.timeline();
      rect2Anim.fromTo(rectangle2Ref.current, 
        {x: '100%', opacity: 0 },
        {x: 0, opacity: 1, duration: 2, ease: 'expo.inOut' },); 
  }, []);

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
              <img ref={rectangle1Ref} src={rectangle} alt="rectangle" className="-scale-x-100" />
            </span>
            <span ref={titleRef} className="text-5xl text-white uppercase font-daysOne mx-5">
              Bookings
            </span>
            <span>
              <img  ref={rectangle2Ref} src={rectangle} alt="rectangle" />
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col md:gap-20 md:p-20 lg:flex-row justify-center lg:mx-auto min-h-screen">
          <div className="flex w-full max-w-[120rem] flex-col md:gap-20 p-5 lg:flex-row lg:justify-center">
            <div className="w-full lg:flex lg:flex-row lg:justify-center lg:gap-5">
              <Img
                src={bokingsImg}
                alt="image"
                className="h-[300px] shadow-black shadow-lg w-full rounded-t-[38px] object-cover md:h-[530px] lg:h-[745px] lg:w-[730px] lg:rounded-[38px] self-center lg:rounded-tl-[22px] lg:rounded-tr-[0px] lg:rounded-br-[0px] "
              />
              <div className="flex w-full flex-col items-center gap-10 bg-navyBlue p-10 rounded-b-[38px] lg:self-center lg:rounded-tr-[22px] lg:rounded-br-[22px] lg:rounded-bl-[0px] lg:h-[745px] lg:w-[845px]">
                <div className="flex flex-col gap-10 w-full">
                  <div className="flex flex-col gap-10">
                    <DatePickerDemo></DatePickerDemo>
                    <input
                      aria-label="Time"
                      type="time"
                      placeholder="Time"
                      className="h-24 p-5 rounded-xl border border-solid border-gray-400"
                      aria-placeholder="Time"
                    />
                    <Textarea></Textarea>
                  </div>
                  <Button
                    size="md"
                    className="min-w-0 md:w-80 rounded-[4px] font-semibold p-5 bg-mainRed text-white"
                  >
                    Book now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
