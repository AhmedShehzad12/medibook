import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          At MedibBook, we believe that quality healthcare should be accessible
          anytime, anywhere. Our platform is designed to connect patients with
          qualified, verified, and experienced healthcare professionals, making
          it easy to get the right medical advice without the need to travel or
          wait in long queues. Whether you require a quick medical opinion, a
          prescription renewal, or a specialist consultation, we provide a
          secure and convenient way to manage your health from the comfort of
          your home. Our mission is simple — to make healthcare accessible,
          affordable, and convenient for everyone. By leveraging technology, we
          aim to bridge the gap between patients and trusted medical experts,
          ensuring that quality care is always within reach. We offer a range of
          services including instant online consultations via chat, audio, or
          video, easy appointment booking with top specialists, and secure
          storage for your medical records. With a wide network of verified
          doctors covering specialties such as General Medicine, Pediatrics,
          Dermatology, Gynecology, and Mental Health, we are committed to
          delivering reliable and personalized healthcare. What sets us apart is
          our patient-first approach. We operate 24/7, ensuring you have access
          to healthcare whenever you need it. Our communication is encrypted for
          your safety, our pricing is transparent with no hidden charges, and
          our network spans across the country, giving you access to top
          healthcare providers no matter where you are. We understand the
          importance of privacy when it comes to healthcare. That’s why our
          platform uses end-to-end encryption and adheres to strict data
          protection standards like HIPAA and GDPR, ensuring your personal and
          medical information remains secure at all times. Healthcare is
          evolving, and we are here to make it better for you. With MedibBook,
          you can skip unnecessary travel, save time, and get expert advice from
          trusted doctors with just a few clicks. Book your consultation today
          and take a step toward better health, wherever you are.
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE: </b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
