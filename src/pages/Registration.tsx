import { useFieldArray, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Building2,
  Trophy,
  BadgeIndianRupee,
  HandCoins,
  UserPlus,
  UserMinus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { events } from "../data";
import { Event } from "../types";
import FileUploadField from "../components/FileUploadField";
import Card from "../components/Card";
import Button2 from "../components/Button2";
import { uploadToCloudinary, deleteFromCloudinary } from "../utils/cloudinary";
import useProgressiveImage from "../hooks/useProgressiveImage";

interface RegistrationFormInput {
  name: { name: string }[];
  email: string;
  whatsapp_no: string;
  alt_phone: string;
  event: string;
  collage_name: string;
  amount_paid: number;
  transaction_id: string;
  transaction_screenshot: File | null;
}

interface RegistrationFormSend {
  name: string[];
  email: string;
  whatsapp_no: string;
  alt_phone: string;
  event: string;
  event_date: string;
  event_location: string;
  collage_name: string;
  amount_paid: number;
  transaction_id: string;
  transaction_screenshot: string;
}

// interface RegistrationFormSend {
//   eventTitle: string;
//   eventCode: string;
//   eventDay: string;
//   eventTime: string;
//   eventLocation: string;
//   teamSize: number;
//   teamLeadName: { name: string };
//   email: string;
//   whatsappNumber: string;
//   alternatePhone: string;
//   college: string;
//   upiTransectionId: string;
//   paySS: string;
//   participantNames: { name: string }[];
// }

interface CustomFileInput extends HTMLInputElement {
  reset: () => void;
}

const Registration = () => {
  const eventImg_lazy = "/pics/lazy_imgs/Events_lazy.webp";
  const eventImg_main = "/pics/Events.webp";
  const eventSrc = useProgressiveImage(eventImg_lazy, eventImg_main);

  const location = useLocation();
  const preSelectedEventId = location.state?.eventId;
  const [event, setEvent] = useState<Event>(
    events.find((e) => e.id === preSelectedEventId) || events[0]
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormInput>();

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "name",
  });

  useEffect(() => {
    if (event) {
      const minSize = event.teamSize.min ?? 1;
      const maxSize = event.teamSize.max ?? 1;
      const currentSize = fields.length;

      if (currentSize < minSize) {
        // Add missing fields to match `teamMinSize`
        replace([
          ...fields,
          ...Array.from({ length: minSize - currentSize }, () => ({
            name: "",
          })),
        ]);
      } else if (currentSize > maxSize) {
        // Remove extra fields to match `teamMaxSize`
        replace(fields.slice(0, maxSize));
      }
    } else {
      // If no event is selected, initialize with first event's min team size
      const firstEvent = events[0];
      const initialSize = firstEvent?.teamSize.min ?? 1;
      replace(Array.from({ length: initialSize }, () => ({ name: "" })));
    }
  }, [event]);

  const addParticipant = () => {
    if (fields.length < (event?.teamSize.max ?? 0)) {
      append({ name: "" });
    }
  };

  const removeParticipant = () => {
    if (fields.length > event.teamSize.min) {
      remove(fields.length - 1);
    }
  };

  const onSubmit = async (data: RegistrationFormInput) => {
    let uploadedImageData = null;
    try {
      // Show loading state
      const submitButton = document.querySelector(
        'button[type="submit"]'
      ) as HTMLButtonElement;
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Uploading...";
      }

      // Upload image to Cloudinary if exists
      if (data.transaction_screenshot) {
        uploadedImageData = await uploadToCloudinary(
          data.transaction_screenshot
        );
      }

      if (!uploadedImageData) {
        throw new Error("Transaction screenshot upload failed");
      }

      // Prepare data for backend
      const submissionData: RegistrationFormSend = {
        name: data.name.map((n) => n.name),
        email: data.email,
        whatsapp_no: data.whatsapp_no,
        alt_phone: data.alt_phone,
        event: data.event,
        event_date: event?.date,
        event_location: event.location,
        collage_name: data.collage_name,
        amount_paid: data.amount_paid,
        transaction_id: data.transaction_id,
        transaction_screenshot: uploadedImageData.secure_url,
      };
      // const submissionData: RegistrationFormSend = {
      //   eventTitle: data.event,
      //   eventCode: event.code,
      //   eventDay: event.date,
      //   eventTime: event.time,
      //   eventLocation: event.location,
      //   teamSize: data.name.length,
      //   teamLeadName: data.name[0],
      //   email: data.email,
      //   whatsappNumber: data.whatsapp_no,
      //   alternatePhone: data.alt_phone,
      //   college: data.collage_name,
      //   upiTransectionId: data.transaction_id,
      //   paySS: uploadedImageData.secure_url,
      //   participantNames: data.name,
      // };
      // console.log("Submitted Data: ", submissionData);

      const response = await fetch(
        `${
          import.meta.env.VITE_VERCEL_ENV_BACKEND_URL
        }/api/v1/participant/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // Handle success
      alert("Registration successful!");
      // Reset all form fields
      reset();
      // Reset event selection
      setEvent(events[0]);
      // Reset participant fields to initial state
      const firstEvent = events[0];
      const initialSize = firstEvent?.teamSize.min ?? 1;
      replace(Array.from({ length: initialSize }, () => ({ name: "" })));
      // Reset file field
      const fileInput = document.querySelector(
        'input[type="file"]'
      ) as CustomFileInput;
      if (fileInput && fileInput.reset) {
        fileInput.reset();
      }
    } catch (error) {
      // Delete uploaded image if registration failed
      if (uploadedImageData?.public_id) {
        try {
          await deleteFromCloudinary(uploadedImageData.public_id);
        } catch (deleteError) {
          console.error("Error deleting image:", deleteError);
        }
      }
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    } finally {
      // Reset button state
      const submitButton = document.querySelector(
        'button[type="submit"]'
      ) as HTMLButtonElement;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Registration";
      }
    }
  };

  return (
    <section className="pt-24 pb-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <div
        className="h-screen w-full fixed top-0 left-0 bg-cover bg-center transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${eventSrc})`,
        }}
      ></div>
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-5xl font-black mb-4">Register Now</h1>
        <p className="text-xl">
          Every great achievement begins with showing up&ndash;participation
          itself is a victory
        </p>
      </div>
      <div className="relative z-10">
        <Card className="hover:shadow-none">
          <div className="flex flex-col sm:flex-row items-center justify-around">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/pics/qr-code.webp"
                alt="QR Code"
                className="w-[200px] object-cover rounded-lg"
              />
              <p className="mt-2">Scan the QR code to pay</p>
              <p>the registration fee</p>
            </div>

            <div className="mt-6 sm:mt-0 flex flex-col items-center justify-center">
              <p>upi id: mesmerizer2025@ibl</p>
              <p>name: Mesmerizer 2025</p>
              <p>Contact no.: 9876543210</p>
            </div>
          </div>
        </Card>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <Card className="hover:shadow-none">
            <h2 className="text-2xl mb-6">Event Registration</h2>
            <div className="space-y-6">
              <div>
                <label className="flex items-center mb-4">
                  <Trophy className="mr-2 text-[rgb(var(--color-secondary))]" />
                  Events
                </label>
                <div className="relative">
                  <select
                    {...register("event", {
                      required: "Please select an event",
                    })}
                    value={event?.title}
                    onChange={(v) => {
                      setEvent(
                        events.find((e) => e.title === v.target.value) ||
                          events[0]
                      );
                    }}
                    className="w-full p-4 cursor-pointer bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                  >
                    <option
                      value=""
                      disabled
                      hidden
                      className="text-black bg-white"
                    >
                      Select an event
                    </option>
                    {events.map((event, index) => (
                      <option
                        key={index}
                        value={event.title}
                        className="text-black bg-white"
                      >
                        {event.title}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.event && (
                  <p className="text-[rgb(var(--color-primary))] mt-2">
                    {errors.event.message}
                  </p>
                )}
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-none">
            <h2 className="text-2xl mb-6">Team Information</h2>
            <div className="space-y-6">
              {fields.map((field, index) => (
                <div key={field.id}>
                  <div className="flex justify-between">
                    <label
                      htmlFor={`participant${index}`}
                      className="flex items-center mb-2"
                    >
                      <User className="mr-2 text-[rgb(var(--color-primary))]" />
                      Participant Name {index + 1}
                    </label>

                    <div className="flex items-center gap-5">
                      <div
                        className="pt-1 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 active:scale-75"
                        onClick={addParticipant}
                      >
                        <UserPlus className="text-[rgb(var(--color-primary))]" />
                      </div>
                      <div
                        className="pt-1 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 active:scale-75"
                        onClick={removeParticipant}
                      >
                        <UserMinus className="text-[rgb(var(--color-primary))]" />
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    id={`participant${index}`}
                    placeholder="Enter Name"
                    className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                    {...register(`name.${index}.name`, {
                      required: "Name is required",
                      validate: {
                        notEmpty: (value) =>
                          value.trim().length > 0 || "Name cannot be empty",
                      },
                      setValueAs: (value) => value?.trim(),
                    })}
                  />

                  {errors.name?.[index]?.name?.message && (
                    <p className="text-[rgb(var(--color-primary))] mt-1">
                      {errors.name[index].name.message}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="email" className="flex items-center mb-2">
                  <Mail className="mr-2 text-[rgb(var(--color-secondary))]" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="whatsapp_no" className="flex items-center mb-2">
                  <Phone className="mr-2 text-rose-300" />
                  Whatsapp Number
                </label>
                <input
                  type="tel"
                  id="whatsapp_no"
                  placeholder="Enter Whatsapp Number"
                  className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                  {...register("whatsapp_no", {
                    required: "Whatsapp number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Whatsapp number must be exactly 10 digits",
                    },
                  })}
                />
                {errors.whatsapp_no && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.whatsapp_no.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="alt_phone" className="flex items-center mb-2">
                  <Phone className="mr-2 text-[rgb(var(--color-accent))]" />
                  Alternate Phone Number
                </label>
                <input
                  type="tel"
                  id="alt_phone"
                  placeholder="Enter Alternate Phone Number"
                  className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                  {...register("alt_phone", {
                    required: "Alternate phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message:
                        "Alternate phone number must be exactly 10 digits",
                    },
                  })}
                />
                {errors.alt_phone && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.alt_phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="collage_name"
                  className="flex items-center mb-2"
                >
                  <Building2 className="mr-2 text-[rgb(var(--color-purple))]" />
                  College/University
                </label>
                <input
                  type="text"
                  id="collage_name"
                  placeholder="Enter College/University"
                  className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                  {...register("collage_name", {
                    required: "College name is required",
                    validate: {
                      notEmpty: (value) =>
                        value.trim().length > 0 || "Name cannot be empty",
                    },
                    setValueAs: (value) => value?.trim(),
                  })}
                />
                {errors.collage_name && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.collage_name.message}
                  </p>
                )}
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-none">
            <h2 className="text-2xl mb-6">Payment Information</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="amount_paid" className="flex items-center mb-2">
                  <HandCoins className="mr-2 text-rose-300" />
                  Amount Paid
                </label>
                <input
                  type="number"
                  id="amount_paid"
                  min="1"
                  placeholder="Enter Amount Paid"
                  className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  {...register("amount_paid", {
                    required: "Amount paid is required",
                    min: {
                      value: 1,
                      message: "Amount must be greater than 0",
                    },
                  })}
                />
                {errors.amount_paid && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.amount_paid.message}
                  </p>
                )}
              </div>

              <FileUploadField
                control={control}
                name="transaction_screenshot"
                label="Upload Screenshot"
                error={errors.transaction_screenshot}
                required={true}
              />

              <div>
                <label
                  htmlFor="transaction_id"
                  className="flex items-center mb-2"
                >
                  <BadgeIndianRupee className="mr-2 text-[rgb(var(--color-purple))]" />
                  UPI Transaction Id
                </label>
                <input
                  type="text"
                  id="transaction_id"
                  min="1"
                  placeholder="Enter UPI Transaction Id"
                  className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                  {...register("transaction_id", {
                    required: "UPI Transaction ID is required",
                    validate: {
                      notEmpty: (value) =>
                        value.trim().length > 0 || "Name cannot be empty",
                    },
                    setValueAs: (value) => value?.trim(),
                  })}
                />
                {errors.transaction_id && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.transaction_id.message}
                  </p>
                )}
              </div>
            </div>
          </Card>

          <Button2 type="submit" className="w-full text-center text-xl py-4">
            Submit Registration
          </Button2>
        </form>
      </div>
    </section>
  );
};

export default Registration;
