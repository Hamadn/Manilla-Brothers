import { Button } from "../../Button";
import { Img } from "../../Img";
import { Input } from "@/components/ui/input";
import mapImg from "../../images/map.png";
import rectangle from "../../images/rectangle.svg";
import { Textarea } from "@/components/ui/textarea";

function Contact() {
  return (
    <>
      <div className="min-h-[100vh] bg-contact-pattern bg-cover w-full">
        <div className="flex w-full flex-col md:gap-20 md:p-20 lg:flex-row bg-rgbaRed justify-center lg:mx-auto min-h-[100vh]">
          <div className="flex w-full max-w-[120rem] flex-col p-5 lg:justify-center min-h-[100vh]">
            <div className="flex justify-center text-center">
              <div className="w-full flex flex-row justify-center items-center mt-[120px] md:mt-0">
                <span>
                  <img
                    src={rectangle}
                    alt="rectangle"
                    className="-scale-x-100"
                  />
                </span>
                <span className="text-5xl text-white uppercase font-daysOne mx-5">
                  Contact Us
                </span>
                <span>
                  <img src={rectangle} alt="rectangle" />
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center text-center p-3 mb-20">
              <p className="font-lexendDeca text-white text-xl">
                We love hearing from our customers. Feel free to share your
                experience or <br /> ask any questions you may have.
              </p>
            </div>
            <div className="w-full lg:flex lg:flex-row-reverse lg:justify-center lg:gap-5">
              <Img
                src={mapImg}
                alt="image"
                className="h-[700px] w-full rounded-t-[38px] object-cover md:h-[530px] lg:h-[745px] lg:w-[730px] lg:rounded-[22px] self-center lg:rounded-tr-[22px] lg:rounded-tl-[0px] lg:rounded-bl-[0px] lg:rounded-br-[22px] "
              />
              <div className="flex w-full flex-col items-center gap-10 bg-navyBlue p-10 rounded-b-[38px] lg:self-center lg:rounded-tl-[22px] lg:rounded-bl-[22px] lg:rounded-br-[0px] lg:h-[745px] lg:w-[845px]">
                <div className="flex flex-col gap-10 w-full">
                  <div className="flex flex-col gap-10">
                    <form action="" className="mt-8 space-y-4">
                      <div className="grid w-full gap-y-4 md:gap-x-4">
                        <div className="grid w-full items-center gap-1.5">
                          <Input placeholder="Your Name" type="text"></Input>
                        </div>
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Input
                          placeholder="E-mail Address"
                          type="email"
                        ></Input>
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Input placeholder="Subject" type="text"></Input>
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Textarea></Textarea>
                      </div>
                      <div className="flex justify-end">
                        <Button
                          size="md"
                          type="button"
                          className="flex md:w-80 rounded-[4px] bg-mainRed px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          Submit
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
