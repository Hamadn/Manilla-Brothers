import { Clock9, Moon, Phone } from "lucide-react";

function Info() {
  return (
    <div className="bg-black">
      <section className="grid text-white md:grid-cols-3 md:h-36 max-w-[140rem] mx-auto">
        <div className="flex flex-col md:flex-row bg-black w-full p-4 items-center justify-center">
          <Clock9 className="w-[160px] md:w-[70px] lg:w-[90px] h-auto md:mr-4" />
          <div className="flex flex-col font-lexendDeca text-center md:text-left">
            <h1 className="font-bold font-lexendDeca">Working Hours</h1>
            <p>Monday to Saturday: 8 AM - 8 PM</p>
            <p>Friday Closed</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-darkBlue w-full p-4 items-center justify-center">
          <Moon className="w-[160px] md:w-[70px] lg:w-[90px] h-auto md:mr-4" />
          <div className="flex flex-col font-lexendDeca text-center md:text-left">
            <h1 className="font-bold font-lexendDeca">Ramadan Timings</h1>
            <p>Monday to Saturday: 9 AM - 4 PM</p>
            <p>Friday Closed</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-black w-full p-4 items-center justify-center">
          <Phone className="w-[160px] md:w-[70px] lg:w-[90px] h-auto md:mr-4" />
          <div className="flex flex-col font-lexendDeca text-center md:text-left">
            <h1 className="font-bold font-lexendDeca">Contact Us Directly</h1>
            <p>+052 304 1850</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
