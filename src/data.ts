import { Event, FAQ, Sponsor, TeamMember } from "./types";

export const events: Event[] = [
  {
    id: "1",
    title: "Solo Singing",
    date: "05-04-2025",
    time: "first half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149698/mesmerizer/webp/event_thumbnail/hraviuxgtexv4kzualxe.webp",
    location: "New Seminar Hall",
    tagline: "bela bose tumi pacho ki sunte...?",
    code: "ARIA ARENA",
    entryFees: "90",
    coordinators: [
      {
        name: "Rudranil Das",
        contact: "62957 21439",
      },
      {
        name: "Surya Mandal",
        contact: "62893 31982",
      },
    ],
    rules: [
      "Performance Duration: Each participant will have a maximum of 4 minutes on stage.",
      "Accompaniment: Participants may perform with either a guitar or an instrumental track.",
      "Theme: Open – showcase your creativity and unique style!",
      "Rule Changes: The Organizing Committee reserves the right to modify rules if necessary.",
      "Registration: Late registrations will not be accepted. Ensure timely entry.",
    ],
    teamSize: {
      min: 1,
      max: 1,
    },
  },
  {
    id: "2",
    title: "Face Painting",
    date: "05-04-2025",
    time: "first half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149694/mesmerizer/webp/event_thumbnail/l8v0ekbpvhlxnm9cwhnn.webp",
    location: "Class Room",
    tagline: "ye chand sa raushan chehra...",
    code: "SHADE SHIFTERS",
    entryFees: "80",
    coordinators: [
      {
        name: "Anusuya Pan",
        contact: "90027 36700",
      },
      {
        name: "Ridhima Das",
        contact: "98324 62703",
      },
    ],
    rules: [
      "Eligibility: Participants must carry their college identity card with an official letterhead from their respective institution.",
      "Team Composition: Each team will consist of 2 members – one member will paint on the other’s face.",
      "Time Limit: Participants will have 90 minutes to complete their artwork.",
      "Theme: Teams are free to choose any theme, but using the internet or any external aid is strictly prohibited.",
      "Restrictions: Stickers, pre–drawn stencils, templates, or any makeup items are not allowed.",
      "Paint Type: Only non–toxic face paints are permitted.",
      "Materials: Participants must bring their own painting supplies, including paints, brushes, and other necessary items.",
    ],
    teamSize: {
      min: 2,
      max: 2,
    },
  },
  {
    id: "3",
    title: "Quiz",
    date: "05-04-2025",
    time: "first half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149696/mesmerizer/webp/event_thumbnail/lpzcny8v3k8lwjqnwyrk.webp",
    location: "Language Lab",
    tagline: "tu mere se zada janti hai kya.!!",
    code: "WIT WIZARDRY",
    entryFees: "80",
    coordinators: [
      {
        name: "Sohom Basak",
        contact: "93824 82742",
      },
      {
        name: "Arpan Biswas",
        contact: "90076 31646",
      },
    ],
    rules: [
      "Participation: Teams of 2 or less are allowed to participate. Single participants will be teamed up, or else refunded",
      "Cross college teams are allowed. On spot registration will also be going on the day of the event.",
      "Qualification round: Prelims consisting of 16 questions will be conducted. A total of 6 team will be selected for the final round. Final round will have standard pounce and bounce rules",
      "The Quiz Master's decision will be final on the day of the event",
    ],
    teamSize: {
      min: 1,
      max: 2,
    },
  },
  {
    id: "4",
    title: "Debate",
    date: "05-04-2025",
    time: "second half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149692/mesmerizer/webp/event_thumbnail/bvslk7qhhv3hzgbplxla.webp",
    location: "Language Lab",
    tagline: "india wants to know...!",
    code: "CLASH OF COMEBACKS",
    entryFees: "90",
    coordinators: [
      {
        name: "Mrittika Majumder",
        contact: "90737 19658",
      },
      {
        name: "Ashutosh Roy",
        contact: "96931 86464",
      },
      {
        name: "Ritam Bhattacharya",
        contact: "90513 05376",
      },
    ],
    rules: [
      "Maximum Team Members: 2 members per team.",
      "Mode of Communication: English.",
      "Topic Assignment: Topics will be assigned on the spot; judges will decide whether the team will argue for or against the topic.",
      "Suggested Topics: Relevant topics related to the genre will be provided the day before the debate.",
      "Time Allotment: 3 minutes for thinking or researching. 5-7 minutes for the pitch.",
      "Research Devices: Mobile phones are allowed only for research purposes. No other devices are permitted.",
      "Disqualification Criteria: Use of obligating language or any form of misbehavior will result in disqualification.",
      "No Interruption: No interruptions allowed while an individual is pitching.",
    ],
    teamSize: {
      min: 2,
      max: 2,
    },
  },
  {
    id: "5",
    title: "Talent Show",
    date: "05-04-2025",
    time: "second half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149700/mesmerizer/webp/event_thumbnail/lggwofhrrmskfjhvhcif.webp",
    location: "APC Hall",
    tagline: "kya hai tere dil ke andar?",
    code: "SPOTLIGHT HEIST",
    entryFees: "90",
    coordinators: [
      {
        name: "Sohom Samaddar",
        contact: "87776 06198",
      },
      {
        name: "ARGHADIP HAZRA",
        contact: "89103 77337",
      },
      {
        name: "Md. jahiruddin",
        contact: "62979 89730",
      },
    ],
    rules: [
      "Performance Type: We welcome all forms of individual talent.",
      "Time Limit: Participants will have 3 minutes to showcase their talent. For stand-up performances, the time limit is extended to 5 minutes. Exceeding the time limit may result in a deduction of marks.",
      "Performance Restrictions: Any kind of singing, dancing, or beatboxing performances are not allowed.",
      "Judging Criteria: Uniqueness, Entertainment Value, Visual Appeal, Clarity, and Impact on the Audience.",
      "Languages Allowed: English, Hindi, and Bengali.",
      "Props: Participants are responsible for their own props, as no assistance will be provided by the hosts.",
      "Content Guidelines: Avoid vulgarity or harsh insinuations. Only light-hearted satire and humor are expected.",
    ],
    teamSize: {
      min: 1,
      max: 1,
    },
  },
  {
    id: "6",
    title: "Short Film",
    date: "05-04-2025",
    time: "second half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149697/mesmerizer/webp/event_thumbnail/kv3jcxprdyxlyaeoxg4d.webp",
    location: "APC Hall",
    tagline: "jab life ho out of control camera ko karke roll…",
    code: "ABSOLUTE CINEMA",
    entryFees: "250",
    coordinators: [
      {
        name: "Navonil Ganguly",
        contact: "90313 57982",
      },
      {
        name: "Subhodeep Kundu",
        contact: "78668 85451",
      },
    ],
    rules: [
      "Duration: The film should be a minimum of 3 minutes and a maximum of 5 minutes, including title and credits.",
      "Cinematography: Both mobile and camera cinematography are allowed. Editing can be done using either a computer or mobile device.",
      "Final Output Resolution: From 1080p upto 2160p HD in 16:9 landscape format.",
      "Output Format: MP4 format.",
      "Submission Requirements: Teams must submit the final film along with the unedited raw footage used for scrutiny till 03.04.2025, 11:59 PM.",
      "Prohibited Content: The film should not contain controversial topics, nudity, violence, racism, religious discrimination, or caste discrimination.",
      "Team Size: 2-7 members per team.",
      "Rule Changes: Rules are subject to change at the discretion of the Organizing Committee.",
    ],
    teamSize: {
      min: 2,
      max: 7,
    },
  },
  {
    id: "7",
    title: "Eastern Solo Dance",
    date: "06-04-2025",
    time: "first half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149693/mesmerizer/webp/event_thumbnail/b5nseicgzrbtafpqhpvj.webp",
    location: "Boys Common Room",
    tagline: "chance pe dance marle...",
    code: "GRACE AND GRIN",
    entryFees: "90",
    coordinators: [
      {
        name: "Sayan Majumder",
        contact: "62894 84442",
      },
      {
        name: "Soumili Halder",
        contact: "97338 38247",
      },
    ],
    rules: [
      "Performance Duration: Each participant will have a maximum of 3 minutes + 30 Seconds on stage.",
      "Dance Forms: Any classical or creative dance form is allowed.",
      "Costume, Props & Makeup: Participants must arrange their own costumes, props, and makeup. Hazardous props, such as fire, are strictly prohibited.",
      "Music: Participants must bring their music track on a pendrive and keep a backup on a phone.",
      "Registration: Late registrations will not be accepted. Ensure timely submission of entries.",
      "Judging Criteria: Participants will be judged on the basis of their creativity, choreography and costumes.",
    ],
    teamSize: {
      min: 1,
      max: 1,
    },
  },
  {
    id: "8",
    title: "Beatboxing Battle",
    date: "06-04-2025",
    time: "second half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149690/mesmerizer/webp/event_thumbnail/vbpsslv9gpb9ou0rk2rn.webp",
    location: "Seminar Hall",
    tagline: "Beat Pe Bawaal, Hasi Bemisaal!...",
    code: "DEXTER",
    entryFees: "90",
    coordinators: [
      {
        name: "Aritra Ghosh",
        contact: "74395 70995",
      },
      {
        name: "Saptarshi Dutta",
        contact: "90832 87666",
      },
    ],
    rules: [
      "Participant Type: This is an individual competition.",
      "Soundtracks: No pre-recorded beatboxing on the soundtrack is allowed.",
      "Opponent Selection: Opponents will be chosen through a random draw.",
      "Judging: A panel of expert judges will determine the winner.",
      "Rule Changes: The Organizing Committee reserves the right to modify rules if necessary.",
      "Registration: Late registrations will not be accepted. Ensure timely entry.",
    ],
    teamSize: {
      min: 1,
      max: 1,
    },
  },
  {
    id: "9",
    title: "Street Dance Battle",
    date: "06-04-2025",
    time: "second half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149699/mesmerizer/webp/event_thumbnail/iqt2co6amfkyunaiddzj.webp",
    location: "Boys Common Room",
    tagline: "Nachte na janle uthon beka...",
    code: "NATYA NINJAS",
    entryFees: "80",
    coordinators: [
      {
        name: "Syamantak Roy",
        contact: "89274 08876",
      },
      {
        name: "Baishali Dhar",
        contact: "94334 00028",
      },
    ],
    rules: [
      "Song Selection: Songs will be played on the spot by a judge or cultural coordinator.",
      "Opponent Selection: Opponents will be chosen through a random draw.",
      "Performance Duration: Each battle will last 30 seconds to 1 minute.",
      "Costume Requirement: Participants are not required to wear specific costumes.",
      "Rule Changes: The Organizing Committee reserves the right to modify rules if necessary.",
      "Registration: Late registrations will not be accepted. Ensure timely entry.",
    ],
    teamSize: {
      min: 1,
      max: 1,
    },
  },
  {
    id: "10",
    title: "Creative Group Dance",
    date: "06-04-2025",
    time: "first half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149691/mesmerizer/webp/event_thumbnail/sromq6ajzrkoeibvxnkm.webp",
    location: "Boys Common Room",
    tagline: "Dance like nobody’s watchig... but we all know we’re judging.",
    code: "FUN FIASKO",
    entryFees: "Registration Fee: 170, Extra Member: 25",
    coordinators: [
      {
        name: "Megha Mondal",
        contact: "62903 71533",
      },
      {
        name: "Shibangi Banerjee",
        contact: "91233 30680",
      },
    ],
    rules: [
      "Performance Duration: Each team will have a maximum of 5 minutes for their performance.",
      "Team Size: Each team can have up to 6 members.",
      "Dance Forms: Participants may perform in Classical, Western, folk or any other creative dance form.",
      "Costume, Props & Makeup: Teams are responsible for arranging their own costumes, props, and makeup. Use of hazardous props, such as fire, is strictly prohibited.",
      "Music: Teams must bring their music track on a pendrive and keep a backup on a phone.",
      "Theme: Fiction Comic",
      "Team Eligibility: Crossover teams are not allowed – all participants must be from the same college.",
      "Registration: Late registrations will not be accepted. Ensure timely submission of entries.",
    ],
    teamSize: {
      min: 2,
      max: 6,
    },
  },
  {
    id: "11",
    title: "Fashion Show",
    date: "06-04-2025",
    time: "second half",
    image:
      "https://res.cloudinary.com/dnttjhsvd/image/upload/v1743149695/mesmerizer/webp/event_thumbnail/bowjt2cge0thnpm7hkqx.webp",
    location: "Boys Common Room",
    tagline: "kaun hai wo jo mujhe murke nehi dekha!!",
    code: "VOGUE VORTEX",
    entryFees: "300",
    coordinators: [
      {
        name: "Shramana Bhattacharya",
        contact: "87775 80029",
      },
      {
        name: "Swatick Nandy",
        contact: "91236 47752",
      },
    ],
    rules: [
      "Team Composition: Each team can have a maximum of 9-10 participants. Only one team per college is allowed.",
      "Rounds: There will be only one round – no preliminaries.",
      "Performance Duration: Each team will have 8 minutes (+ 30 seconds) on stage.",
      "Content Guidelines: Vulgarity is strictly prohibited. Any inappropriate content will lead to disqualification.",
      "Team Eligibility: Crossover teams are not allowed – all participants must be from the same college.",
      "Theme: Fiction Comic",
      "Dress & Makeup Room: A dedicated room will be provided for preparations.",
      "Rule Changes: The Organizing Committee reserves the right to modify rules if necessary.",
      "Registration: Late registrations will not be accepted. Ensure timely entry.",
    ],
    teamSize: {
      min: 6,
      max: 10,
    },
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Festival Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    social: {
      instagram: "alexrivera",
      linkedin: "alexrivera",
      twitter: "alexrivera",
    },
  },
  // Add more team members...
];

export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9",
    tier: "platinum",
  },
  // Add more sponsors...
];

export const faqs: FAQ[] = [
  {
    question: "How can I register for events?",
    answer:
      "You can register through our online registration form available on each event's page.",
  },
  // Add more FAQs...
];
