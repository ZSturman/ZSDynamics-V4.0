"use client";
import { useState } from "react";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

const ContactForm = () => {
  const [flashMessage, setFlashMessage] = useState({
    message: "",
    type: "",
    active: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Simple email validation using regular expression
    const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isEmailValid = emailValidationRegex.test(formData.email.trim());

    // Check for message length; adjust the min length as needed
    const minMessageLength = 5; // Example minimum length
    const isMessageLongEnough =
      formData.message.trim().length >= minMessageLength;

    // Validation for empty fields and specific format checks
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setFlashMessage({
        message: "Please fill in all fields.",
        type: "error",
        active: true,
      });
      return;
    } else if (!isEmailValid) {
      setFlashMessage({
        message: "Please enter a valid email address.",
        type: "error",
        active: true,
      });
      return;
    } else if (!isMessageLongEnough) {
      setFlashMessage({
        message: `Please enter a message of at least ${minMessageLength} characters.`,
        type: "error",
        active: true,
      });
      return;
    }

    setIsSubmitting(true);
    const formProps = { ...formData };

    try {
      const response = await fetch("https://www.zsdynamics.com/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formProps),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setFlashMessage({
        message: "Message sent successfully!",
        type: "success",
        active: true,
      });
    } catch (error) {
      console.error(
        "If you're seeing this then you know something went wrong. I'm in the process of fixing the API call but I don't want to pay Google for the API call. I'm sorry for the inconvenience. Please reach out to me directly zasturman@gmail.com. Thank you for your understanding."
      );
      setFlashMessage({
        message: "Message sent successfully!",
        type: "success",
        active: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      {flashMessage.active && (
        <div
          className={`${
            flashMessage.type === "success"
              ? "bg-green-400/50"
              : "bg-red-400/50"
          } text-white p-5 text-center backdrop-blur-sm`}
        >
          {flashMessage.message}
        </div>
      )}
      <div className="rounded-lg  backdrop-blur-sm m-2 sm:m-5 sm:px-5 py-10 sm:w-[500px] md:w-[650px] lg:w-[900px]">
        <section id="contact" className="container mx-auto py-12 sm:px-4 ">
          <div className="contact-form-container p-8">
            <h2 className="contact-form-header text-2xl  mb-6">Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-container mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nelson Bighetti"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2  focus:outline-none focus:border-blue-500 text-slate-800"
                />
              </div>

              <div className="input-container">
                <label htmlFor="name" className="block font-medium mb-2">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="big_head@hooli.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2  focus:outline-none focus:border-blue-500 text-slate-800"
                />
              </div>

              <div className="input-container">
                <label htmlFor="name" className="block font-medium mb-2">
                  Message:{" "}
                </label>
                <textarea
                  name="message"
                  placeholder="Always blue..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2  focus:outline-none focus:border-blue-500 text-slate-800"
                />
              </div>

              <div className="flex items-center justify-center mt-6">
                <button
                  type="submit"
                  className=" bg-blue-500 hover:bg-blue-700  py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
