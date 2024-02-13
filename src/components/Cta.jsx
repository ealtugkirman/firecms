"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cta = () => {
  const [email, setEmail] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const form = useRef();

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (inputEmail.includes("@")) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_33crp0z",
        "template_q2lary3",
        form.current,
        "hkQ-2hdK6LTVFgJnT"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Welcome Abord :)", {
            position: "top-center",
            autoClose: 3003,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          alert(error.text);
        }
      );
    if (submitDisabled) {
      return;
    }
  };

  return (
    <div className="bg-light text-light flex items-center justify-center py-16">
      <div className="flex py-12 flex-col bg-first items-center justify center  rounded-3xl h-96 w-11/12">
        <h3 className="font-semibold text-4xl mb-8 mt-4">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className="mb-16">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          odio, adipisci repellendus consequuntur expedita incidunt.
        </p>
        <div className="text-left items-start justify-start flex " >
          <form ref={form} onSubmit={sendEmail} className="">
            <div className="relative text-left justify-start items-start">
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
                name="user_email"
                placeholder="Enter your email address"
                className="flex pr-80 text-left p-4 text-sm text-gray-900 border-2 border-black rounded-xl bg-gray-50"
                required
              />
              <input
                disabled={submitDisabled}
                type="submit"
                value="Notify Me"
                className="font-bold hover:scale-105 duration-500 absolute right-2.5 bottom-2.5 bg-second text-first rounded-lg text-sm px-12 py-2"
              />
            </div>
            <ToastContainer
              position="top-center"
              autoClose={3100}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cta;
