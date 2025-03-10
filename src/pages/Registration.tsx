import { motion } from "framer-motion";
import { useFieldArray, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Building2,
  Trophy,
  BadgePlus,
  BadgeIndianRupee,
} from "lucide-react";
import { useEffect, useState } from "react";
import { events } from "../data";
import { Event } from "../types";
import FileUploadField from "./FileUploadField";

interface RegistrationForm {
  eventTitle: string;
  participantNames: { name: string }[];
  email: string;
  whatsappNumber: string;
  alternatePhone: string;
  college: string;
  paySS: File | null;
  upiTransectionId: string
}

const Registration = () => {
  const location = useLocation();
  const preSelectedEventId = location.state?.eventId;
  const [event, setEvent] = useState<Event | undefined>(
    events.find((e) => e.id === preSelectedEventId)
  );

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>();

  const { fields, append, replace } = useFieldArray({
    control,
    name: "participantNames",
  });

  useEffect(() => {
    if (event) {
      const minSize = event.teamSize.min ?? 0;
      const maxSize = event.teamSize.max ?? 0;
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);

  const addParticipant = () => {
    if (fields.length < (event?.teamSize.max ?? 0)) {
      append({ name: "" });
    }
  };

  const onSubmit = (data: RegistrationForm) => {
    console.log("Submitted Data:", {
      ...data,
      paySS: data.paySS ?? "No file uploaded",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 registration-container"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 gradient-text">
            Register Now
          </h1>
          <p className="text-xl">
            Every great achievement begins with showing up&ndash;participation
            itself is a victory
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="neo-card bg-gradient-to-br from-[rgb(var(--color-secondary))]/5 to-transparent"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">
              Event Registration
            </h2>
            <div className="space-y-6">
              <div>
                <label className="flex items-center font-bold mb-4">
                  <Trophy className="mr-2 text-[rgb(var(--color-secondary))]" />
                  Events
                </label>
                <div className="relative">
                  <select
                    {...register("eventTitle", {
                      required: "Please select an event",
                    })}
                    value={event?.title}
                    onChange={(v) => {
                      setEvent(events.find((e) => e.title === v.target.value));
                    }}
                    className="neo-input w-full p-4 cursor-pointer bg-transparent border-4 border-black focus:outline-none focus:ring-4 focus:ring-[rgb(var(--color-secondary))]"
                  >
                    <option value="" disabled hidden>
                      Select an event
                    </option>
                    {events.map((event, index) => (
                      <option key={index} value={event.title}>
                        {event.title}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.eventTitle && (
                  <p className="text-[rgb(var(--color-primary))] mt-2">
                    {errors.eventTitle.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="neo-card bg-gradient-to-br from-[rgb(var(--color-primary))]/5 to-transparent"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">
              Team Information
            </h2>
            <div className="space-y-6">
              {fields.map((field, index) => (
                <div key={field.id}>
                  <div className="flex justify-between">
                    <label
                      htmlFor={`participant${index}`}
                      className="flex items-center font-bold mb-2"
                    >
                      <User className="mr-2 text-[rgb(var(--color-primary))]" />
                      Participant Name {index + 1}
                    </label>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      onClick={addParticipant}
                      className="cursor-pointer"
                    >
                      <div className="pt-1">
                        <BadgePlus className="text-[rgb(var(--color-primary))] text-lg" />
                      </div>
                    </motion.div>
                  </div>
                  <input
                    type="text"
                    id={`participant${index}`}
                    className="neo-input focus:ring-[rgb(var(--color-primary))]"
                    {...register(`participantNames.${index}.name`, {
                      required: "Name is required",
                    })}
                  />

                  {errors.participantNames && (
                    <p className="text-[rgb(var(--color-primary))] mt-1">
                      {errors.participantNames.message}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center font-bold mb-2"
                >
                  <Mail className="mr-2 text-[rgb(var(--color-secondary))]" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="neo-input focus:ring-[rgb(var(--color-primary))]"
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
                <label
                  htmlFor="whatsappNumber"
                  className="flex items-center font-bold mb-2"
                >
                  <Phone className="mr-2 text-[rgb(var(--color-accent))]" />
                  Whatsapp Number
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  className="neo-input focus:ring-[rgb(var(--color-primary))]"
                  {...register("whatsappNumber", {
                    required: "Whatsapp number is required",
                    pattern: {
                      value: /^\+?[\d\s-]+$/,
                      message: "Invalid Whatsapp number",
                    },
                  })}
                />
                {errors.whatsappNumber && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.whatsappNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="alternatePhone"
                  className="flex items-center font-bold mb-2"
                >
                  <Phone className="mr-2 text-[rgb(var(--color-accent))]" />
                  Alternate Phone Number
                </label>
                <input
                  type="tel"
                  id="alternatePhone"
                  className="neo-input focus:ring-[rgb(var(--color-primary))]"
                  {...register("alternatePhone", {
                    required: "Whatsapp number is required",
                    pattern: {
                      value: /^\+?[\d\s-]+$/,
                      message: "Invalid Whatsapp number",
                    },
                  })}
                />
                {errors.alternatePhone && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.alternatePhone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="college"
                  className="flex items-center font-bold mb-2"
                >
                  <Building2 className="mr-2 text-[rgb(var(--color-purple))]" />
                  College/University
                </label>
                <input
                  type="text"
                  id="college"
                  className="neo-input focus:ring-[rgb(var(--color-primary))]"
                  {...register("college", {
                    required: "College name is required",
                  })}
                />
                {errors.college && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.college.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="neo-card bg-gradient-to-br from-[rgb(var(--color-accent))]/5 to-transparent"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">
              Payment Information
            </h2>
            <div className="space-y-6">
              <FileUploadField
                control={control}
                name="paySS"
                label="Upload Screenshot"
                error={errors.paySS}
                required={true}
              />

              <div>
                <label
                  htmlFor="upiTransectionId"
                  className="flex items-center font-bold mb-2"
                >
                  <BadgeIndianRupee className="mr-2 text-[rgb(var(--color-purple))]" />
                  UPI Transaction Id
                </label>
                <input
                  type="text"
                  id="upiTransectionId"
                  min="1"
                  className="neo-input"
                  {...register("upiTransectionId", {
                    required: "UPI Transaction ID is required",
                  })}
                />
                {errors.upiTransectionId && (
                  <p className="text-[rgb(var(--color-primary))] mt-1">
                    {errors.upiTransectionId.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="neo-button-primary w-full text-center text-xl py-4"
          >
            Submit Registration
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Registration;
