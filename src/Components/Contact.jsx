import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://portfoleo-18xl.onrender.com/api/contact-me",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="py-16 bg-gray-800">
      <div className="max-w-screen-lg mx-auto p-8">
        <h2 className="text-4xl font-bold text-center text-gray-200 mb-8">
          Contact <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="bg-gray-800 rounded-lg shadow-sm shadow-gray-600 p-6 w-full mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  required></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300 w-full ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3 md:ml-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <ul className="text-gray-700 mb-4">
              <li>
                <strong>Phone:</strong> +251953166208 | +251970822721
              </li>
              <li>
                <strong>Email:</strong>
                <a
                  href="mailto:sossygebremeskel@gmail.com"
                  className="text-[#E3A57F] hover:underline">
                  {" "}
                  sossygebremeskel@gmail.com
                </a>
              </li>
              <li>
                <strong>Address:</strong>Mekelle, Ethiopia
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              Connect with Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sossygebremeskel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition duration-300">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sossy-gebremeskel-b34733326/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition duration-300">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/sossygebremeskel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition duration-300">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://t.me/sossygebremeskel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition duration-300">
                <i className="fab fa-telegram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default Contact;
