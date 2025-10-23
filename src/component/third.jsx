import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import StudentImg from "../assets/img/ladki.png";
import Progress from "./Progress";
const ContactPart = () => {
  const formRef = useRef();
  const imageRef = useRef();
  const [formVisible, setFormVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pf8yw9k",
        "template_lzzjfu9",
        formRef.current,
        "-k76CWRX1OqBanuE6"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Check console.");
          console.error("EmailJS Error:", error);
        }
      );
  };


  //    join as techer section

  const [role, setRole] = useState(""); // Teacher/Student ke liye
  const [courseOptions, setCourseOptions] = useState([]);

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    if (selectedRole === "Teacher") {
      // Teacher ke liye course options blank kar do
      setCourseOptions([]);
    } else if (selectedRole === "Student") {
      // Student ke liye course options dikhaye
      setCourseOptions(["Science", "Commerce", "Arts", "General"]);
    } else {
      setCourseOptions([]);
    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === formRef.current) setFormVisible(true);
            if (entry.target === imageRef.current) setImageVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (formRef.current) observer.observe(formRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-gray-100 via-white to-gray-100 relative overflow-hidden">
      <div className="w-full max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left Image */}
          <div
            ref={imageRef}
            className={`lg:w-5/12 flex items-center justify-center transition-all duration-1000 ease-out ${
              imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
            style={{ minHeight: "500px" }}
          >
            <img
                src={StudentImg}
              alt="Student"
              className="w-full h-full object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl"
            />
          </div>

          {/* Right Form */}
          <div
            className={`lg:w-7/12 transition-all duration-1000 ease-out delay-200 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 h-full flex flex-col justify-center"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#4A6A27] leading-tight">
                  Start Your Learning Journey With Us
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Enroll now for{" "}
                  <span className="font-bold text-[#4A6A27]">10th & 12th</span>{" "}
                  Classes – Begin your success journey today.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2"
                />
                 <select
        name="class"
        
        className="w-full px-5 py-4 rounded-2xl border-2 "
        value={role}
        onChange={handleRoleChange}
      >
        <option value="">-- Join As --</option>
        <option value="Student">Student</option>

        <option value="Teacher">Teacher</option>
        <option value="Mentor">Mentor</option>
        <option value="Relationship-Manager">Relationship Manager</option>
        <option value="Business">Business Development Head</option>
        <option value="Trainer">Trainer</option>

      </select>

      {/* Course Dropdown */}
      <select
        name="stream"
        required
        className="md:col-span-2 w-full px-5 py-4 rounded-2xl border-2 mt-4"
      >
        <option value="">-- Select Course --</option>
        {courseOptions.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  required
                  className="md:col-span-2 w-full px-5 py-4 rounded-2xl border-2"
                ></textarea>
              </div>

              <div className="md:col-span-2 flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-12 py-4 bg-[#4A6A27] text-white rounded-2xl font-bold text-lg shadow-2xl hover:bg-white hover:text-[#4A6A27] transition-all duration-500"
                >
                  Submit Enrollment 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

       {/* ================= Progress Bar at the very bottom ================= */}
       <div className="absolute bottom-0 left-0 w-full">
        <Progress />
      </div>
    </section>
  );
};

export default ContactPart;
