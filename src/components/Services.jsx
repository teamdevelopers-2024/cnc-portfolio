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
  <a href="https://rzp.io/rzp/cacbootcamp" className="text-white">
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
            <div className="mt-10">
              <Heading
                title="Generative AI made for creators."
                text="Brainwave unlocks the potential of AI-powered applications"
              />
              <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                  <img
                    className="w-full h-full object-cover md:object-right"
                    width={800}
                    alt="Smartest AI"
                    height={730}
                    src={service1}
                  />
                </div>

                <div className="relative z-1 max-w-[17rem] ml-auto">
                  <h4 className="h4 mb-4">Smartest AI</h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    Brainwave unlocks the potential of AI-powered applications
                  </p>
                  <ul className="body-2">
                    {brainwaveServices.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start py-4 border-t border-n-6"
                      >
                        <img width={24} height={24} src={check} />
                        <p className="ml-4">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
            </div>
          </Section>
        </div>
      </Section>
    </>
  );
};

export default Services;
