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
import { useState } from "react";
import axios from "axios";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Services = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: `${firstName} ${lastName}`,
      mobile,
      email,
      description,
    };

    try {
      console.log("working");
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbz05VVCVWg44U7sFBmOb0j0ukzZc0CYttzkdNscoKjnbFlKR_vWccWXohnIr856DfFv/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("api response", response);

      if (response.ok) {
        alert("Form submitted successfully");
        setFirstName("");
        setLastName("");
        setMobile("");
        setEmail("");
        setDescription("");
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.log("api response : ", error);
      alert("Something went wrong");
    }
  };

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
            <div className="flex justify-center mt-4 space-x-6 text-sm">
              <a
                href="https://www.instagram.com/_kode_and_klick_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="flex items-center space-x-2 px-3 py-1.5 border border-pink-400 rounded-full bg-transparent transition-all hover:bg-pink-500/10 hover:drop-shadow-[0_0_8px_rgba(255,20,147,0.7)] hover:text-pink-400"
              >
                <FaInstagram className="text-2xl drop-shadow-[0_0_4px_rgba(255,20,147,0.6)]" />
                <span className="text-pink-400">Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/people/Code-Click/61562368049071/?mibextid=ZbWKwL"
                className="flex items-center space-x-2 px-3 py-1.5 border border-blue-400 rounded-full bg-transparent transition-all hover:bg-blue-500/10 hover:drop-shadow-[0_0_8px_rgba(59,89,152,0.7)] hover:text-blue-400"
              >
                <FaFacebookF className="text-2xl drop-shadow-[0_0_4px_rgba(59,89,152,0.6)]" />
                <span className="text-blue-400">Facebook</span>
              </a>

              <a
                href="https://wa.me/+916238523977"
                className="flex items-center space-x-2 px-3 py-1.5 border border-green-400 rounded-full bg-transparent transition-all hover:bg-green-500/10 hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.7)] hover:text-green-400"
              >
                <FaWhatsapp className="text-2xl drop-shadow-[0_0_4px_rgba(37,211,102,0.6)]" />
                <span className="text-green-400">WhatsApp</span>
              </a>

              <a
                href="https://www.linkedin.com/in/code-and-click-1a377331a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center space-x-2 px-3 py-1.5 border border-blue-500 rounded-full bg-transparent transition-all hover:bg-blue-500/10 hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.7)] hover:text-blue-500"
              >
                <FaLinkedinIn className="text-2xl drop-shadow-[0_0_4px_rgba(0,119,181,0.6)]" />
                <span className="text-blue-500">LinkedIn</span>
              </a>
            </div>
          </Section>
        </div>
      </Section>
    </>
  );
};

export default Services;
