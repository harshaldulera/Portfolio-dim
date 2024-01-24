import React from "react";

const Map = () => {
  return (
    <>
      <div className="flex h-[500px] w-full  justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.6459325868964!2d72.8335405!3d19.1231827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1704472167561!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          allowFullScreen=""
          style={{ border: 0 }}
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
