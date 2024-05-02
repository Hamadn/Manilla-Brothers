import { Button } from "../../Button";
import { SelectBox } from "../../SelectBox";
import { Img } from "../../Img";
import bokingsImg from "../../images/bookings.png";
import { DatePickerDemo } from "../../ui/datePicker";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ReservationPage() {
  return (
    <>
      <div className="flex w-full flex-col md:gap-20 md:p-20 lg:flex-row justify-center lg:mx-auto min-h-screen">
        <div className="flex w-full max-w-[100rem] flex-col md:gap-20 p-5 lg:flex-row lg:justify-center">
          <div className="w-full lg:flex lg:flex-row lg:justify-center lg:gap-5">
            <Img
              src={bokingsImg}
              alt="image"
              className="h-[300px] w-full rounded-t-[38px] object-cover md:h-[530px] lg:h-[745px] lg:w-[730px] lg:rounded-[38px] self-center lg:rounded-tl-[22px] lg:rounded-tr-[0px] lg:rounded-br-[0px]"
            />
            <div className="flex w-full flex-col items-center gap-10 bg-navyBlue p-10 rounded-b-[38px] lg:self-center lg:rounded-tr-[22px] lg:rounded-br-[22px] lg:rounded-bl-[0px] lg:h-[745px] lg:w-[845px]">
              <div className="flex flex-col gap-10 w-full">
                <div className="flex flex-col gap-10">
                  <DatePickerDemo></DatePickerDemo>
                  <SelectBox
                    shape="round"
                    name="time"
                    placeholder={`Time`}
                    options={dropDownOptions}
                    className="border border-solid border-gray-400 p-5"
                  />
                  <SelectBox
                    shape="round"
                    name="Service"
                    placeholder={`Service`}
                    options={dropDownOptions}
                    className="border border-solid border-gray-400 p-5 h-[200px]"
                  />
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
    </>
  );
}
