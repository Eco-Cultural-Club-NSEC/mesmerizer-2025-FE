// import { motion } from "framer-motion";
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
import Card from "../components/Card";
import Button2 from "../components/Button2";

interface RegistrationForm {
  eventTitle: string;
  participantNames: { name: string }[];
  email: string;
  whatsappNumber: string;
  alternatePhone: string;
  college: string;
  paySS: File | null;
  upiTransectionId: string;
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
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   className="pt-24 pb-16 registration-container"
    // >
    <section className="pt-24 pb-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <div
        className="h-screen w-full fixed top-0 left-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/pics/Events.webp")',
        }}
      ></div>
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-5xl font-black mb-4">Register Now</h1>
        <p className="text-xl">
          Every great achievement begins with showing up&ndash;participation
          itself is a victory
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 relative z-10"
      >
        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="neo-card bg-gradient-to-br from-[rgb(var(--color-secondary))]/5 to-transparent"
        > */}
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
                  {...register("eventTitle", {
                    required: "Please select an event",
                  })}
                  value={event?.title}
                  onChange={(v) => {
                    setEvent(events.find((e) => e.title === v.target.value));
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
              {errors.eventTitle && (
                <p className="text-[rgb(var(--color-primary))] mt-2">
                  {errors.eventTitle.message}
                </p>
              )}
            </div>
          </div>
        </Card>
        {/* </motion.div> */}

        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="neo-card bg-gradient-to-br from-[rgb(var(--color-primary))]/5 to-transparent"
        > */}
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
                  {/* <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={addParticipant}
                    className="cursor-pointer"
                  > */}
                  <div
                    className="pt-1 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 active:scale-75"
                    onClick={addParticipant}
                  >
                    <BadgePlus className="text-[rgb(var(--color-primary))] text-lg" />
                  </div>
                  {/* </motion.div> */}
                </div>
                <input
                  type="text"
                  id={`participant${index}`}
                  placeholder="Enter Name"
                  className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
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
              <label
                htmlFor="whatsappNumber"
                className="flex items-center mb-2"
              >
                <Phone className="mr-2 text-[rgb(var(--color-accent))]" />
                Whatsapp Number
              </label>
              <input
                type="tel"
                id="whatsappNumber"
                placeholder="Enter Whatsapp Number"
                className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
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
                className="flex items-center mb-2"
              >
                <Phone className="mr-2 text-[rgb(var(--color-accent))]" />
                Alternate Phone Number
              </label>
              <input
                type="tel"
                id="alternatePhone"
                placeholder="Enter Alternate Phone Number"
                className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
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
              <label htmlFor="college" className="flex items-center mb-2">
                <Building2 className="mr-2 text-[rgb(var(--color-purple))]" />
                College/University
              </label>
              <input
                type="text"
                id="college"
                placeholder="Enter College/University"
                className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
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
        </Card>
        {/* </motion.div> */}

        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="neo-card bg-gradient-to-br from-[rgb(var(--color-accent))]/5 to-transparent"
        > */}
        <Card className="hover:shadow-none">
          <h2 className="text-2xl mb-6">Payment Information</h2>
          <div className="space-y-6">
            <FileUploadField
              control={control}
              name="paySS"
              label="Upload Screenshot"
              error={errors.paySS}
              required={true}
              // className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
            />

            <div>
              <label
                htmlFor="upiTransectionId"
                className="flex items-center mb-2"
              >
                <BadgeIndianRupee className="mr-2 text-[rgb(var(--color-purple))]" />
                UPI Transaction Id
              </label>
              <input
                type="text"
                id="upiTransectionId"
                min="1"
                placeholder="Enter UPI Transaction Id"
                className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
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
        </Card>
        {/* </motion.div> */}

        {/* <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="neo-button-primary w-full text-center text-xl py-4"
        > */}
        <Button2 type="submit" className="w-full text-center text-xl py-4">
          Submit Registration
        </Button2>
        {/* </motion.button> */}
      </form>
    </section>
    // </motion.div>
  );
};

export default Registration;
