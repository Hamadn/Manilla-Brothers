import { useEffect } from "react";

const BookingWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tidycal-embed" data-path="manilabrothersauto/booking"></div>
  );
};

export default BookingWidget;
