import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check, poster } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <>
      <Section id="bootcamp">
        <div className="container">
          <div className="relative">
            <div className="relative z-1 grid gap-5 lg:grid-cols-2">
              <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={poster}
                    className="h-full w-full object-fill"
                    width={630}
                    height={750}
                    alt="robot"
                  />
                </div>

                {/* <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div> */}

                <PhotoChatMessage />
              </div>

              <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Web Development</h4>
                  <p className="body-2 mb-[2rem] text-n-3">
                    Create your own website with us.
                  </p>

                  <ul className="flex items-center justify-between">
                    {brainwaveServicesIcons.map((item, index) => (
                      <li
                        key={index}
                        className={`rounded-2xl flex items-center justify-center ${
                          index === 2
                            ? "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                            : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                        }`}
                      >
                        <div className={index === 2 ? "" : ""}>
                          <img
                            src={item}
                            alt={item}
                            className="object-scale-down"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] p-8 text-gray-300 shadow-lg transition-transform duration-300 hover:scale-105">
                  <p className="leading-relaxed text-sm md:text-base text-center">
                    Curious about coding? Join our 5-Day Bootcamp and see just
                    how fun (and powerful) web development can be! In one week,
                    you’ll go from newbie to confident creator, learning how to
                    build responsive, eye-catching websites using HTML, CSS, and
                    Bootstrap. With hands-on projects, real-world skills, and a
                    supportive community, you’ll surprise yourself with how much
                    you can accomplish. Plus, walk away with a shareable
                    certificate that shows the world you’re ready to make things
                    happen. Don’t just watch others create—come and build with
                    us!
                  </p>
                  <div className="flex justify-center mt-4">
                    <button className="px-6 py-2 border border-purple-500 bg-transparent text-white rounded-lg transition duration-300 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/50">
                      <a
                        href="https://rzp.io/rzp/cacbootcamp"
                        className="text-white"
                      >
                        Register Now
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Gradient />
          </div>
          <Section id="contactus">
            <Heading
              title="Get in Touch with Us"
              text="Have a project in mind or need expert guidance? At Code&Click, we’re here to help you navigate your digital journey. Reach out today to discuss how our innovative solutions can transform your ideas into impactful results. Let’s collaborate and make your vision a reality!"
            />
            <div className="relative z-1 flex  h-[39rem] mb-5 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]flex justify-center items-center min-h-screen p-8">
              <form className="w-full max-w-2xl p-10">
                {/* Name Field */}
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">
                    Name <span className="text-yellow-400">*</span>
                  </label>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="First"
                      className="w-1/2 p-3 bg-n-6 text-white border border-n-5 rounded focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last"
                      className="w-1/2 p-3 bg-n-6 text-white border border-n-5 rounded focus:outline-none"
                    />
                  </div>
                </div>
                {/* Mobile Number Field */}
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="w-full p-3 bg-n-6 text-white border border-n-5 rounded focus:outline-none"
                  />
                </div>
                {/* Email Field */}
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">
                    Email <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-3 bg-n-6 text-white border border-n-5 rounded focus:outline-none"
                  />
                </div>
                {/* Description Field */}
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Enter a description"
                    className="w-full h-32 p-3 bg-n-6 text-white border border-n-5 rounded focus:outline-none resize-none"
                  />
                </div>
                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="bg-yellow-400 text-n-8 font-semibold px-10 py-3 rounded-xl hover:bg-yellow-500 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Section>
        </div>
      </Section>
    </>
  );
};

export default Services;
