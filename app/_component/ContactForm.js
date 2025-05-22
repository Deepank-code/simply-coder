// "use client";
// import React, { useState } from "react";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Send,
//   CheckCircle,
//   AlertTriangle,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";

// const Button = ({ type, className, disabled, children, onClick }) => (
//   <button
//     type={type}
//     className={className}
//     disabled={disabled}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );
// const Input = ({
//   type,
//   id,
//   name,
//   value,
//   onChange,
//   placeholder,
//   className,
//   required,
//   disabled,
// }) => (
//   <input
//     type={type}
//     id={id}
//     name={name}
//     value={value}
//     onChange={onChange}
//     placeholder={placeholder}
//     className={className}
//     required={required}
//     disabled={disabled}
//   />
// );
// const Textarea = ({
//   id,
//   name,
//   value,
//   onChange,
//   placeholder,
//   className,
//   required,
//   disabled,
// }) => (
//   <textarea
//     id={id}
//     name={name}
//     value={value}
//     onChange={onChange}
//     placeholder={placeholder}
//     className={className}
//     required={required}
//     disabled={disabled}
//   />
// );
// const Label = ({ htmlFor, className, children }) => (
//   <label htmlFor={htmlFor} className={className}>
//     {children}
//   </label>
// );
// const cn = (...args) => args.filter(Boolean).join(" ");
// const GoogleMap = () => {
//   return (
//     <div className="w-full h-[100%] rounded-lg overflow-hidden shadow-lg">
//       <iframe
//         title="Map of Pithoragarh, Uttarakhand"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.2754172961326!2d80.21532531506145!3d29.582861382056155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a734e2f10cba4d%3A0xeac99148de51e616!2sPithoragarh%2C%20Uttarakhand%20262001!5e0!3m2!1sen!2sin!4v1625596662220!5m2!1sen!2sin"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen={true}
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </div>
//   );
// };
// const submitForm = async (formData) => {
//   try {
//     const response = await fetch("/api/save-contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       return {
//         success: true,
//         message: "Thank you for your message! We will get back to you shortly.",
//       };
//     } else {
//       return {
//         success: false,
//         message: result.message || "Failed to submit. Please try again.",
//       };
//     }
//   } catch (error) {
//     console.error("Submission error:", error);
//     return {
//       success: false,
//       message: "An unexpected error occurred. Please try again later.",
//     };
//   }
// };

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [formStatus, setFormStatus] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !formData.name.trim() ||
//       !formData.email.trim() ||
//       !formData.message.trim()
//     ) {
//       toast.error("Please fill in all required fields.");
//       return;
//     }

//     setIsSubmitting(true);
//     setFormStatus(null); // Clear previous status

//     try {
//       const result = await submitForm(formData);

//       setFormStatus(result);

//       if (result.success) {
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         toast.success("Message sent successfully!");
//       } else {
//         toast.error(result.message || "Failed to submit. Try again.");
//       }
//     } catch (error) {
//       toast.error("An unexpected error occurred.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className=" relative z-[2] min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-black p-4 md:p-8">
//       <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* Contact Form */}
//           <div className="p-6 md:p-8 space-y-4 md:space-y-6">
//             <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
//               Contact Us
//             </h2>
//             <p className="text-gray-600 dark:text-gray-400">
//               Feel free to reach out to us with any questions or inquiries.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
//               <div>
//                 <Label
//                   htmlFor="name"
//                   className="text-gray-700 dark:text-gray-300"
//                 >
//                   Name <span className="text-red-500">*</span>
//                 </Label>
//                 <Input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   className="mt-1 px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div>
//                 <Label
//                   htmlFor="email"
//                   className="text-gray-700 dark:text-gray-300"
//                 >
//                   Email <span className="text-red-500">*</span>
//                 </Label>
//                 <Input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Your Email"
//                   className="mt-1 px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div>
//                 <Label
//                   htmlFor="phone"
//                   className="text-gray-700 dark:text-gray-300"
//                 >
//                   Phone
//                 </Label>
//                 <Input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Your Phone Number"
//                   className="mt-1 px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div>
//                 <Label
//                   htmlFor="message"
//                   className="text-gray-700 dark:text-gray-300"
//                 >
//                   Message <span className="text-red-500">*</span>
//                 </Label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Your Message"
//                   className="mt-1 px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg
//                       className="animate-spin h-5 w-5 mr-3"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="mr-2 w-5 h-5" />
//                     Send Message
//                   </>
//                 )}
//               </Button>
//               {formStatus && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={cn(
//                     "p-3 rounded-md text-sm font-medium flex items-center gap-2",
//                     formStatus.success
//                       ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
//                       : "bg-red-100 text-red-800 dark:text-red-100"
//                   )}
//                 >
//                   {formStatus.success ? (
//                     <CheckCircle className="w-5 h-5" />
//                   ) : (
//                     <AlertTriangle className="w-5 h-5" />
//                   )}
//                   {formStatus.message}
//                 </motion.div>
//               )}
//             </form>

//             {/* Contact Information */}
//             <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                 Contact Information
//               </h3>
//               <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
//                 <MapPin className="w-5 h-5" />
//                 <span>Ambha Bhawan takana road Pithoragarh</span>
//               </div>
//               <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
//                 <Mail className="w-5 h-5" />
//                 <span>deepsdj37@gmail.com</span>
//               </div>
//             </div>
//           </div>

//           <div className="hidden md:block">
//             <GoogleMap />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
"use client";
import React from "react";
import {
  MapPin,
  Mail,
  Phone, // Keep Phone icon for contact info, even if not in form
} from "lucide-react";
import { motion } from "framer-motion"; // Keeping motion, though less used now

// Removed: Button, Input, Textarea, Label components - no longer needed for embedded form
// Removed: cn utility (not directly used after form elements are gone, but harmless to keep if used elsewhere)

const GoogleMap = () => {
  return (
    <div className="w-full h-[100%] rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Map of Pithoragarh, Uttarakhand"
        // TODO: Replace this with a proper Google Maps embed URL if the current one isn't working
        // You can get this from Google Maps -> Share -> Embed a map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.2754172961326!2d80.21532531506145!3d29.582861382056155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a734e2f10cba4d%3A0xeac99148de51e616!2sPithoragarh%2C%20Uttarakhand%20262001!5e0!3m2!1sen!2sin!4v1625596662220!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="relative z-[2] min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Contact Form Area - Now Google Form */}
          <div className="p-6 md:p-8 space-y-4 md:space-y-6">
            {/* --- Google Form Embed Goes Here --- */}
            <div className="w-full flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSebOwnXhe7NGVqNcNzo3beqhxs3M6ocuN1_GphqgDr-QA0OJA/viewform?embedded=true"
                width="100%" // Makes it responsive to its container
                height="600" // You might need to adjust this height based on your form's content
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="rounded-lg shadow-md" // Optional styling
              >
                Loading…
              </iframe>
            </div>
            {/* --- End Google Form Embed --- */}

            {/* Contact Information */}
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Contact Information
              </h3>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Ambha Bhawan takana road Pithoragarh</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5" />
                <span>deepsdj37@gmail.com</span>
              </div>
              {/* If you have a phone number to display, keep this part */}
            </div>
          </div>

          {/* Google Map */}
          <div className="hidden md:block">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
