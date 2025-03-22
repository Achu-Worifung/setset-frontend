import {
  CircleHelp,
  Home,
  MonitorCheck,
  ShieldAlert,
  ThumbsUp,
  TimerReset,
  Users,
  UsersRound,
  Voicemail,
  WalletMinimal,
} from "lucide-react";

import Settings from "@/lib/settings";

import {
  AppointmentsData,
  BusinessStat,
  BusinessInfo,
  CallRecording,
  FaqData,
  MetricsData,
  BusinessCard,
  sideBarPageProp,
  ReportData,
} from "./types";

export const metricsData: MetricsData = {
  callMinutes: { minutes: 100227, difference: -1.4 },
  moneySaved: { money: 601194, difference: 2.5 },
  timeSaved: { time: 100227, difference: 1.8 },
  newCallers: { callers: 66813, difference: -0.5 },
  appointmentsBooked: { appointments: 57267, difference: 0.7 },
  satisfactionScore: { score: 9.7, difference: 0.3 },
};

export const chartData: AppointmentsData[] = [
  { date: "2024-04-01", booked: 222, transferred: 150 },
  { date: "2024-04-02", booked: 97, transferred: 180 },
  { date: "2024-04-03", booked: 167, transferred: 120 },
  { date: "2024-04-04", booked: 242, transferred: 260 },
  { date: "2024-04-05", booked: 373, transferred: 290 },
  { date: "2024-04-06", booked: 301, transferred: 340 },
  { date: "2024-04-07", booked: 245, transferred: 180 },
  { date: "2024-04-08", booked: 409, transferred: 320 },
  { date: "2024-04-09", booked: 59, transferred: 110 },
  { date: "2024-04-10", booked: 261, transferred: 190 },
  { date: "2024-04-11", booked: 327, transferred: 350 },
  { date: "2024-04-12", booked: 292, transferred: 210 },
  { date: "2024-04-13", booked: 342, transferred: 380 },
  { date: "2024-04-14", booked: 137, transferred: 220 },
  { date: "2024-04-15", booked: 120, transferred: 170 },
  { date: "2024-04-16", booked: 138, transferred: 190 },
  { date: "2024-04-17", booked: 446, transferred: 360 },
  { date: "2024-04-18", booked: 364, transferred: 410 },
  { date: "2024-04-19", booked: 243, transferred: 180 },
  { date: "2024-04-20", booked: 89, transferred: 150 },
  { date: "2024-04-21", booked: 137, transferred: 200 },
  { date: "2024-04-22", booked: 224, transferred: 170 },
  { date: "2024-04-23", booked: 138, transferred: 230 },
  { date: "2024-04-24", booked: 387, transferred: 290 },
  { date: "2024-04-25", booked: 215, transferred: 250 },
  { date: "2024-04-26", booked: 75, transferred: 130 },
  { date: "2024-04-27", booked: 383, transferred: 420 },
  { date: "2024-04-28", booked: 122, transferred: 180 },
  { date: "2024-04-29", booked: 315, transferred: 240 },
  { date: "2024-04-30", booked: 454, transferred: 380 },
  { date: "2024-05-01", booked: 165, transferred: 220 },
  { date: "2024-05-02", booked: 293, transferred: 310 },
  { date: "2024-05-03", booked: 247, transferred: 190 },
  { date: "2024-05-04", booked: 385, transferred: 420 },
  { date: "2024-05-05", booked: 481, transferred: 390 },
  { date: "2024-05-06", booked: 498, transferred: 520 },
  { date: "2024-05-07", booked: 388, transferred: 300 },
  { date: "2024-05-08", booked: 149, transferred: 210 },
  { date: "2024-05-09", booked: 227, transferred: 180 },
  { date: "2024-05-10", booked: 293, transferred: 330 },
  { date: "2024-05-11", booked: 335, transferred: 270 },
  { date: "2024-05-12", booked: 197, transferred: 240 },
  { date: "2024-05-13", booked: 197, transferred: 160 },
  { date: "2024-05-14", booked: 448, transferred: 490 },
  { date: "2024-05-15", booked: 473, transferred: 380 },
  { date: "2024-05-16", booked: 338, transferred: 400 },
  { date: "2024-05-17", booked: 499, transferred: 420 },
  { date: "2024-05-18", booked: 315, transferred: 350 },
  { date: "2024-05-19", booked: 235, transferred: 180 },
  { date: "2024-05-20", booked: 177, transferred: 230 },
  { date: "2024-05-21", booked: 82, transferred: 140 },
  { date: "2024-05-22", booked: 81, transferred: 120 },
  { date: "2024-05-23", booked: 252, transferred: 290 },
  { date: "2024-05-24", booked: 294, transferred: 220 },
  { date: "2024-05-25", booked: 201, transferred: 250 },
  { date: "2024-05-26", booked: 213, transferred: 170 },
  { date: "2024-05-27", booked: 420, transferred: 460 },
  { date: "2024-05-28", booked: 233, transferred: 190 },
  { date: "2024-05-29", booked: 78, transferred: 130 },
  { date: "2024-05-30", booked: 340, transferred: 280 },
  { date: "2024-05-31", booked: 178, transferred: 230 },
  { date: "2024-06-01", booked: 178, transferred: 200 },
  { date: "2024-06-02", booked: 470, transferred: 410 },
  { date: "2024-06-03", booked: 103, transferred: 160 },
  { date: "2024-06-04", booked: 439, transferred: 380 },
  { date: "2024-06-05", booked: 88, transferred: 140 },
  { date: "2024-06-06", booked: 294, transferred: 250 },
  { date: "2024-06-07", booked: 323, transferred: 370 },
  { date: "2024-06-08", booked: 385, transferred: 320 },
  { date: "2024-06-09", booked: 438, transferred: 480 },
  { date: "2024-06-10", booked: 155, transferred: 200 },
  { date: "2024-06-11", booked: 92, transferred: 150 },
  { date: "2024-06-12", booked: 492, transferred: 420 },
  { date: "2024-06-13", booked: 81, transferred: 130 },
  { date: "2024-06-14", booked: 426, transferred: 380 },
  { date: "2024-06-15", booked: 307, transferred: 350 },
  { date: "2024-06-16", booked: 371, transferred: 310 },
  { date: "2024-06-17", booked: 475, transferred: 520 },
  { date: "2024-06-18", booked: 107, transferred: 170 },
  { date: "2024-06-19", booked: 341, transferred: 290 },
  { date: "2024-06-20", booked: 408, transferred: 450 },
  { date: "2024-06-21", booked: 169, transferred: 210 },
  { date: "2024-06-22", booked: 317, transferred: 270 },
  { date: "2024-06-23", booked: 480, transferred: 530 },
  { date: "2024-06-24", booked: 132, transferred: 180 },
  { date: "2024-06-25", booked: 141, transferred: 190 },
  { date: "2024-06-26", booked: 434, transferred: 380 },
  { date: "2024-06-27", booked: 448, transferred: 490 },
  { date: "2024-06-28", booked: 149, transferred: 200 },
  { date: "2024-06-29", booked: 103, transferred: 160 },
  { date: "2024-06-30", booked: 446, transferred: 400 },
];

export const initialNotifications = [
  {
    id: 1,
    type: "message",
    title: "New Message from achu",
    content: "Hey! Are we still on for the meeting?",
    time: "2 mins ago",
    img: "https://th.bing.com/th/id/OIP.47NEVXcBGruaDflMzJAsDwAAAA?rs=1&pid=ImgDetMain",
    read: false,
  },
  {
    id: 2,
    type: "alert",
    title: "System Update",
    content: "We've detected unsuall activities on your account.",
    time: "10 mins ago",
    img: "https://th.bing.com/th/id/R.a54aae27898553c7865346e0ca2a9ceb?rik=G%2bPKqgYavMXWAQ&pid=ImgRaw&r=0",
    read: false,
  },
  {
    id: 3,
    type: "friend_request",
    title: "New Friend Request",
    content: "Jordan sent you a friend request.",
    time: "30 mins ago",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    read: true,
  },
  {
    id: 4,
    type: "mention",
    title: "You were mentioned!",
    content: "Sophia mentioned you in a comment.",
    time: "1 hour ago",
    img: "https://cdn-icons-png.flaticon.com/512/2958/2958783.png",
    read: false,
  },
  {
    id: 5,
    type: "reminder",
    title: "Event Reminder",
    content: "Don't forget about the project deadline tomorrow!",
    time: "3 hours ago",
    img: "https://cdn-icons-png.flaticon.com/512/716/716225.png",
    read: true,
  },
];
const iconStyles =
  "lg:h-10 lg:w-10 text-white dark:text-black h-8 w-8 bg-black dark:bg-white rounded-lg p-2";
export const faqsData: FaqData[] = [
  {
    id: "1",
    question: "How accurate is the AI understanding customer inquiries?",
    answer:
      "Our AI is trained with advanced speech recognition and natural language processing (NLP), achieving an average accuracy rate of 90-95%. However, accuracy can vary based on background noise, accents, and industry-specific terms.",
    frequency: 32,
    icon: <Voicemail className={iconStyles} />,
    timeRangeStart: "4:00 PM",
    timeRangeEnd: "6:00 PM",
  },
  {
    id: "2",
    question: "Can AI handle bookings, cancellations, and reschedules?",
    answer:
      "Yes! The AI is designed to automate appointment management. It can:\nSchedule new bookings based on availability,\nCancel existing appointments upon request,\nReschedule based on open time slots,\nAll updates sync with the business's calendar and CRM system.",
    frequency: 22,
    icon: <TimerReset className={iconStyles} />,
    timeRangeStart: "6:00 PM",
    timeRangeEnd: "8:00 PM",
  },
  {
    id: "3",
    question: "How accurate is the AI in understanding customer inquiries?",
    answer:
      'If the AI detects low confidence in its response or the caller requests a human agent, it will: Transfer the call to an available representative, Send a detailed summary of the conversation to the agent, Log the request in the dashboard under "Escalated Calls" for review. Businesses can customize escalation thresholds and triggers in the settings.',
    frequency: 18,
    icon: <Users className={iconStyles} />,
    timeRangeStart: "4:00 PM",
    timeRangeEnd: "9:30 PM",
  },
  {
    id: "4",
    question: "How accurate is the AI in understanding customer inquiries?",
    answer:
      "Our AI is trained with advanced speech recognition and natural language processing (NLP), achieving an average accuracy rate of 90-95%. However, accuracy can vary based on background noise, accents, and industry-specific terms.",
    frequency: 32,
    icon: <WalletMinimal className={iconStyles} />,
    timeRangeStart: "9:00 AM",
    timeRangeEnd: "10:00 AM",
  },
  {
    id: "5",
    question: "How accurate is the AI in understanding customer inquiries?",
    answer:
      "Our AI is trained with advanced speech recognition and natural language processing (NLP), achieving an average accuracy rate of 90-95%. However, accuracy can vary based on background noise, accents, and industry-specific terms.",
    frequency: 32,
    icon: <MonitorCheck className={iconStyles} />,
    timeRangeStart: "10:00 AM",
    timeRangeEnd: "12:00 PM",
  },
  {
    id: "6",
    question: "What is the average time saved per call?",
    answer:
      " On average, our AI saves businesses 2-3 minutes per call. This time is spent on repetitive tasks like verifying customer information, scheduling appointments, and answering common questions. Over time, these minutes add up to significant cost and time savings.",
    frequency: 32,
    icon: <TimerReset className={iconStyles} />,
    timeRangeStart: "4:00 PM",
    timeRangeEnd: "6:00 PM",
  },
];

const testData: BusinessStat = {
  callMinutes: 123456,
  moneySaved: 601194,
  satisfaction: 5.5,
  newCallers: 6789,
};

//Metric Card for this test business
const BusinessIconStyles =
  "lg:h-14 lg:w-14 text-white dark:text-black h-12 w-12 bg-black dark:bg-white rounded-lg p-3";
const cards: BusinessCard[] = [
  {
    id: "money-saved",
    icon: <WalletMinimal className={BusinessIconStyles}/>,
    title: "Money Saved",
    value: testData.moneySaved,
  },
  {
    id: "satisfaction",
    icon: <ThumbsUp className={BusinessIconStyles}/>,
    title: "Satisfaction",
    value: testData.satisfaction,
  },
  {
    id: "minutes-saved",
    icon: <TimerReset className={BusinessIconStyles}/>,
    title: "Minutes Saved",
    value: testData.callMinutes,
  },
  {
    id: "new-callers",
    icon: <UsersRound className={BusinessIconStyles}/>,
    title: "New Callers",
    value: testData.newCallers,
  },
];

const cards2: BusinessCard[] = [
  {
    id: "money-saved",
    icon: <WalletMinimal className={BusinessIconStyles}/>,
    title: "Money Saved",
    value: testData.moneySaved,
  },
  {
    id: "satisfaction",
    icon: <ThumbsUp className={BusinessIconStyles}/>,
    title: "Satisfaction",
    value: testData.satisfaction,
  },
  {
    id: "minutes-saved",
    icon: <TimerReset className={BusinessIconStyles}/>,
    title: "Minutes Saved",
    value: 1000000,
  },
  {
    id: "new-callers",
    icon: <UsersRound className={BusinessIconStyles}/>,
    title: "New Callers",
    value: testData.newCallers,
  },
];

//Test data for business

export const business: BusinessInfo[] = [
  {
    id: "1",
    title: "Business Name 1",
    content: "Description 1",
    cards: cards,
  },
  {
    id: "2",
    title: "Business Name 2",
    content: "Description 2",
    cards: cards,
  },
  {
    id: "3",
    title: "Business Name 3",
    content: "Description 3",
    cards: cards,
  },
  {
    id: "4",
    title: "Business Name 4",
    content: "Description 4",
    cards: cards,
  },
  {
    id: "5",
    title: "Business Name 5",
    content: "Description 5",
    cards: cards,
  },
  {
    id: "6",
    title: "Business Name 6",
    content: "Description 6",
    cards: cards,
  },
  {
    id: "7",
    title: "Business Name 7",
    content: "Description 7",
    cards: cards2,
  },
  {
    id: "8",
    title: "Business Name 8",
    content: "Description 8",
    cards: cards,
  },
  {
    id: "9",
    title: "Business Name 9",
    content: "Description 9",
    cards: cards,
  },
  {
    id: "10",
    title: "Business Name 10345",
    content: "Description 10",
    cards: cards,
  },
  {
    id: "11",
    title: "Business Name 11",
    content: "Description 11",
    cards: cards,
  },
];

export const items: sideBarPageProp[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Recordings & Transcripts",
    url: "/recordings-and-transcripts",
    icon: Voicemail,
  },
  {
    title: "FAQs",
    url: "/faqs",
    icon: CircleHelp,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: ShieldAlert,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];


export const reportsData: ReportData[] = [
  {
    id: "1",
    title: "AI did not transfer call to an agent",
    description: "The AI system failed to transfer the call to a human agent despite multiple attempts.",
    date: "2023-10-01",
    status: "Pending",
  },
  {
    id: "2",
    title: "Incorrect response from AI",
    description: "The AI provided an incorrect response to a customer query regarding account balance.",
    date: "2023-10-02",
    status: "Resolved",
  },
  {
    id: "3",
    title: "AI system downtime",
    description: "The AI system was down for 2 hours, causing delays in customer service.",
    date: "2023-10-03",
    status: "Pending",
  },
  {
    id: "4",
    title: "AI misinterpreted customer request",
    description: "The AI misinterpreted a customer's request for a refund and provided incorrect information.",
    date: "2023-10-04",
    status: "Resolved",
  },
];


export const callRecordingsData: CallRecording[] = [
  {
    "id": "1",
    "date": "2025-02-01",
    "category": "Booking",
    "confidenceScore": 9.5,
    "duration": "0:00",
    "recordingUrl": "https://actions.google.com/sounds/v1/cartoon/rainstick_slow.ogg",
    "transcriptUrl": "https://example.com/recording1.pdf"
  },
  {
    "id": "2",
    "date": "2025-02-02",
    "category": "Cancellation",
    "confidenceScore": 9.6,
    "duration": "1:07",
    "recordingUrl": "https://example.com/recording2.mp3",
    "transcriptUrl": "https://example.com/recording2.pdf"
  },
  {
    "id": "3",
    "date": "2025-02-03",
    "category": "Reschedule",
    "confidenceScore": 9.7,
    "duration": "2:14",
    "recordingUrl": "https://example.com/recording3.mp3",
    "transcriptUrl": "https://example.com/recording3.pdf"
  },
  {
    "id": "4",
    "date": "2025-02-04",
    "category": "General Inquiry",
    "confidenceScore": 9.8,
    "duration": "3:21",
    "recordingUrl": "https://example.com/recording4.mp3",
    "transcriptUrl": "https://example.com/recording4.pdf"
  },
  {
    "id": "5",
    "date": "2025-02-05",
    "category": "Booking",
    "confidenceScore": 9.9,
    "duration": "4:28",
    "recordingUrl": "https://example.com/recording5.mp3",
    "transcriptUrl": "https://example.com/recording5.pdf"
  },
  {
    "id": "6",
    "date": "2025-02-06",
    "category": "Cancellation",
    "confidenceScore": 9.5,
    "duration": "5:35",
    "recordingUrl": "https://example.com/recording6.mp3",
    "transcriptUrl": "https://example.com/recording6.pdf"
  },
  {
    "id": "7",
    "date": "2025-02-07",
    "category": "Reschedule",
    "confidenceScore": 9.6,
    "duration": "6:42",
    "recordingUrl": "https://example.com/recording7.mp3",
    "transcriptUrl": "https://example.com/recording7.pdf"
  },
  {
    "id": "8",
    "date": "2025-02-08",
    "category": "General Inquiry",
    "confidenceScore": 9.7,
    "duration": "7:49",
    "recordingUrl": "https://example.com/recording8.mp3",
    "transcriptUrl": "https://example.com/recording8.pdf"
  },
  {
    "id": "9",
    "date": "2025-02-09",
    "category": "Booking",
    "confidenceScore": 9.8,
    "duration": "8:56",
    "recordingUrl": "https://example.com/recording9.mp3",
    "transcriptUrl": "https://example.com/recording9.pdf"
  },
  {
    "id": "10",
    "date": "2025-02-10",
    "category": "Cancellation",
    "confidenceScore": 9.9,
    "duration": "9:03",
    "recordingUrl": "https://example.com/recording10.mp3",
    "transcriptUrl": "https://example.com/recording10.pdf"
  },
  {
    "id": "11",
    "date": "2025-02-11",
    "category": "Reschedule",
    "confidenceScore": 9.5,
    "duration": "0:10",
    "recordingUrl": "https://example.com/recording11.mp3",
    "transcriptUrl": "https://example.com/recording11.pdf"
  },
  {
    "id": "12",
    "date": "2025-02-12",
    "category": "General Inquiry",
    "confidenceScore": 9.6,
    "duration": "1:17",
    "recordingUrl": "https://example.com/recording12.mp3",
    "transcriptUrl": "https://example.com/recording12.pdf"
  },
  {
    "id": "13",
    "date": "2025-02-13",
    "category": "Booking",
    "confidenceScore": 9.7,
    "duration": "2:24",
    "recordingUrl": "https://example.com/recording13.mp3",
    "transcriptUrl": "https://example.com/recording13.pdf"
  },
  {
    "id": "14",
    "date": "2025-02-14",
    "category": "Cancellation",
    "confidenceScore": 9.8,
    "duration": "3:31",
    "recordingUrl": "https://example.com/recording14.mp3",
    "transcriptUrl": "https://example.com/recording14.pdf"
  },
  {
    "id": "15",
    "date": "2025-02-15",
    "category": "Reschedule",
    "confidenceScore": 9.9,
    "duration": "4:38",
    "recordingUrl": "https://example.com/recording15.mp3",
    "transcriptUrl": "https://example.com/recording15.pdf"
  },
  {
    "id": "16",
    "date": "2025-02-16",
    "category": "General Inquiry",
    "confidenceScore": 9.5,
    "duration": "5:45",
    "recordingUrl": "https://example.com/recording16.mp3",
    "transcriptUrl": "https://example.com/recording16.pdf"
  },
  {
    "id": "17",
    "date": "2025-02-17",
    "category": "Booking",
    "confidenceScore": 9.6,
    "duration": "6:52",
    "recordingUrl": "https://example.com/recording17.mp3",
    "transcriptUrl": "https://example.com/recording17.pdf"
  },
  {
    "id": "18",
    "date": "2025-02-18",
    "category": "Cancellation",
    "confidenceScore": 9.7,
    "duration": "7:59",
    "recordingUrl": "https://example.com/recording18.mp3",
    "transcriptUrl": "https://example.com/recording18.pdf"
  },
  {
    "id": "19",
    "date": "2025-02-19",
    "category": "Reschedule",
    "confidenceScore": 9.8,
    "duration": "8:06",
    "recordingUrl": "https://example.com/recording19.mp3",
    "transcriptUrl": "https://example.com/recording19.pdf"
  },
  {
    "id": "20",
    "date": "2025-02-20",
    "category": "General Inquiry",
    "confidenceScore": 9.9,
    "duration": "9:13",
    "recordingUrl": "https://example.com/recording20.mp3",
    "transcriptUrl": "https://example.com/recording20.pdf"
  },
  {
    "id": "21",
    "date": "2025-02-21",
    "category": "Booking",
    "confidenceScore": 9.5,
    "duration": "0:20",
    "recordingUrl": "https://example.com/recording21.mp3",
    "transcriptUrl": "https://example.com/recording21.pdf"
  },
  {
    "id": "22",
    "date": "2025-02-22",
    "category": "Cancellation",
    "confidenceScore": 9.6,
    "duration": "1:27",
    "recordingUrl": "https://example.com/recording22.mp3",
    "transcriptUrl": "https://example.com/recording22.pdf"
  },
  {
    "id": "23",
    "date": "2025-02-23",
    "category": "Reschedule",
    "confidenceScore": 9.7,
    "duration": "2:34",
    "recordingUrl": "https://example.com/recording23.mp3",
    "transcriptUrl": "https://example.com/recording23.pdf"
  },
  {
    "id": "24",
    "date": "2025-02-24",
    "category": "General Inquiry",
    "confidenceScore": 9.8,
    "duration": "3:41",
    "recordingUrl": "https://example.com/recording24.mp3",
    "transcriptUrl": "https://example.com/recording24.pdf"
  },
  {
    "id": "25",
    "date": "2025-02-25",
    "category": "Booking",
    "confidenceScore": 9.9,
    "duration": "4:48",
    "recordingUrl": "https://example.com/recording25.mp3",
    "transcriptUrl": "https://example.com/recording25.pdf"
  },
  {
    "id": "26",
    "date": "2025-02-26",
    "category": "Cancellation",
    "confidenceScore": 9.5,
    "duration": "5:55",
    "recordingUrl": "https://example.com/recording26.mp3",
    "transcriptUrl": "https://example.com/recording26.pdf"
  },
  {
    "id": "27",
    "date": "2025-02-27",
    "category": "Reschedule",
    "confidenceScore": 9.6,
    "duration": "6:02",
    "recordingUrl": "https://example.com/recording27.mp3",
    "transcriptUrl": "https://example.com/recording27.pdf"
  },
  {
    "id": "28",
    "date": "2025-02-28",
    "category": "General Inquiry",
    "confidenceScore": 9.7,
    "duration": "7:09",
    "recordingUrl": "https://example.com/recording28.mp3",
    "transcriptUrl": "https://example.com/recording28.pdf"
  },
  {
    "id": "29",
    "date": "2025-02-01",
    "category": "Booking",
    "confidenceScore": 9.8,
    "duration": "8:16",
    "recordingUrl": "https://example.com/recording29.mp3",
    "transcriptUrl": "https://example.com/recording29.pdf"
  },
  {
    "id": "30",
    "date": "2025-02-02",
    "category": "Cancellation",
    "confidenceScore": 9.9,
    "duration": "9:23",
    "recordingUrl": "https://example.com/recording30.mp3",
    "transcriptUrl": "https://example.com/recording30.pdf"
  },
  {
    "id": "31",
    "date": "2025-02-03",
    "category": "Reschedule",
    "confidenceScore": 9.5,
    "duration": "0:30",
    "recordingUrl": "https://example.com/recording31.mp3",
    "transcriptUrl": "https://example.com/recording31.pdf"
  },
  {
    "id": "32",
    "date": "2025-02-04",
    "category": "General Inquiry",
    "confidenceScore": 9.6,
    "duration": "1:37",
    "recordingUrl": "https://example.com/recording32.mp3",
    "transcriptUrl": "https://example.com/recording32.pdf"
  },
  {
    "id": "33",
    "date": "2025-02-05",
    "category": "Booking",
    "confidenceScore": 9.7,
    "duration": "2:44",
    "recordingUrl": "https://example.com/recording33.mp3",
    "transcriptUrl": "https://example.com/recording33.pdf"
  },
  {
    "id": "34",
    "date": "2025-02-06",
    "category": "Cancellation",
    "confidenceScore": 9.8,
    "duration": "3:51",
    "recordingUrl": "https://example.com/recording34.mp3",
    "transcriptUrl": "https://example.com/recording34.pdf"
  },
  {
    "id": "35",
    "date": "2025-02-07",
    "category": "Reschedule",
    "confidenceScore": 9.9,
    "duration": "4:58",
    "recordingUrl": "https://example.com/recording35.mp3",
    "transcriptUrl": "https://example.com/recording35.pdf"
  },
  {
    "id": "36",
    "date": "2025-02-08",
    "category": "General Inquiry",
    "confidenceScore": 9.5,
    "duration": "5:05",
    "recordingUrl": "https://example.com/recording36.mp3",
    "transcriptUrl": "https://example.com/recording36.pdf"
  },
  {
    "id": "37",
    "date": "2025-02-09",
    "category": "Booking",
    "confidenceScore": 9.6,
    "duration": "6:12",
    "recordingUrl": "https://example.com/recording37.mp3",
    "transcriptUrl": "https://example.com/recording37.pdf"
  },
  {
    "id": "38",
    "date": "2025-02-10",
    "category": "Cancellation",
    "confidenceScore": 9.7,
    "duration": "7:19",
    "recordingUrl": "https://example.com/recording38.mp3",
    "transcriptUrl": "https://example.com/recording38.pdf"
  },
  {
    "id": "39",
    "date": "2025-02-11",
    "category": "Reschedule",
    "confidenceScore": 9.8,
    "duration": "8:26",
    "recordingUrl": "https://example.com/recording39.mp3",
    "transcriptUrl": "https://example.com/recording39.pdf"
  },
  {
    "id": "40",
    "date": "2025-02-12",
    "category": "General Inquiry",
    "confidenceScore": 9.9,
    "duration": "9:33",
    "recordingUrl": "https://example.com/recording40.mp3",
    "transcriptUrl": "https://example.com/recording40.pdf"
  },
  {
    "id": "41",
    "date": "2025-02-13",
    "category": "Booking",
    "confidenceScore": 9.5,
    "duration": "0:40",
    "recordingUrl": "https://example.com/recording41.mp3",
    "transcriptUrl": "https://example.com/recording41.pdf"
  },
  {
    "id": "42",
    "date": "2025-02-14",
    "category": "Cancellation",
    "confidenceScore": 9.6,
    "duration": "1:47",
    "recordingUrl": "https://example.com/recording42.mp3",
    "transcriptUrl": "https://example.com/recording42.pdf"
  },
  {
    "id": "43",
    "date": "2025-02-15",
    "category": "Reschedule",
    "confidenceScore": 9.7,
    "duration": "2:54",
    "recordingUrl": "https://example.com/recording43.mp3",
    "transcriptUrl": "https://example.com/recording43.pdf"
  },
  {
    "id": "44",
    "date": "2025-02-16",
    "category": "General Inquiry",
    "confidenceScore": 9.8,
    "duration": "3:01",
    "recordingUrl": "https://example.com/recording44.mp3",
    "transcriptUrl": "https://example.com/recording44.pdf"
  },
  {
    "id": "45",
    "date": "2025-02-17",
    "category": "Booking",
    "confidenceScore": 9.9,
    "duration": "4:08",
    "recordingUrl": "https://example.com/recording45.mp3",
    "transcriptUrl": "https://example.com/recording45.pdf"
  },
  {
    "id": "46",
    "date": "2025-02-18",
    "category": "Cancellation",
    "confidenceScore": 9.5,
    "duration": "5:15",
    "recordingUrl": "https://example.com/recording46.mp3",
    "transcriptUrl": "https://example.com/recording46.pdf"
  },
  {
    "id": "47",
    "date": "2025-02-19",
    "category": "Reschedule",
    "confidenceScore": 9.6,
    "duration": "6:22",
    "recordingUrl": "https://example.com/recording47.mp3",
    "transcriptUrl": "https://example.com/recording47.pdf"
  },
  {
    "id": "48",
    "date": "2025-02-20",
    "category": "General Inquiry",
    "confidenceScore": 9.7,
    "duration": "7:29",
    "recordingUrl": "https://example.com/recording48.mp3",
    "transcriptUrl": "https://example.com/recording48.pdf"
  },
  {
    "id": "49",
    "date": "2025-02-21",
    "category": "Booking",
    "confidenceScore": 9.8,
    "duration": "8:36",
    "recordingUrl": "https://example.com/recording49.mp3",
    "transcriptUrl": "https://example.com/recording49.pdf"
  },
  {
    "id": "50",
    "date": "2025-02-22",
    "category": "Cancellation",
    "confidenceScore": 9.9,
    "duration": "9:43",
    "recordingUrl": "https://example.com/recording50.mp3",
    "transcriptUrl": "https://example.com/recording50.pdf"
  },
  {
    "id": "51",
    "date": "2025-02-23",
    "category": "Reschedule",
    "confidenceScore": 9.5,
    "duration": "0:50",
    "recordingUrl": "https://example.com/recording51.mp3",
    "transcriptUrl": "https://example.com/recording51.pdf"
  },
  {
    "id": "52",
    "date": "2025-02-24",
    "category": "General Inquiry",
    "confidenceScore": 9.6,
    "duration": "1:57",
    "recordingUrl": "https://example.com/recording52.mp3",
    "transcriptUrl": "https://example.com/recording52.pdf"
  },
  {
    "id": "53",
    "date": "2025-02-25",
    "category": "Booking",
    "confidenceScore": 9.7,
    "duration": "2:04",
    "recordingUrl": "https://example.com/recording53.mp3",
    "transcriptUrl": "https://example.com/recording53.pdf"
  },
  {
    "id": "54",
    "date": "2025-02-26",
    "category": "Cancellation",
    "confidenceScore": 9.8,
    "duration": "3:11",
    "recordingUrl": "https://example.com/recording54.mp3",
    "transcriptUrl": "https://example.com/recording54.pdf"
  },
  {
    "id": "55",
    "date": "2025-02-27",
    "category": "Reschedule",
    "confidenceScore": 9.9,
    "duration": "4:18",
    "recordingUrl": "https://example.com/recording55.mp3",
    "transcriptUrl": "https://example.com/recording55.pdf"
  },
  {
    "id": "56",
    "date": "2025-02-28",
    "category": "General Inquiry",
    "confidenceScore": 9.5,
    "duration": "5:25",
    "recordingUrl": "https://example.com/recording56.mp3",
    "transcriptUrl": "https://example.com/recording56.pdf"
  },
  {
    "id": "57",
    "date": "2025-02-01",
    "category": "Booking",
    "confidenceScore": 9.6,
    "duration": "6:32",
    "recordingUrl": "https://example.com/recording57.mp3",
    "transcriptUrl": "https://example.com/recording57.pdf"
  },
  {
    "id": "58",
    "date": "2025-02-02",
    "category": "Cancellation",
    "confidenceScore": 9.7,
    "duration": "7:39",
    "recordingUrl": "https://example.com/recording58.mp3",
    "transcriptUrl": "https://example.com/recording58.pdf"
  },
  {
    "id": "59",
    "date": "2025-02-03",
    "category": "Reschedule",
    "confidenceScore": 9.8,
    "duration": "8:46",
    "recordingUrl": "https://example.com/recording59.mp3",
    "transcriptUrl": "https://example.com/recording59.pdf"
  },
  {
    "id": "60",
    "date": "2025-02-04",
    "category": "General Inquiry",
    "confidenceScore": 9.9,
    "duration": "9:53",
    "recordingUrl": "https://example.com/recording60.mp3",
    "transcriptUrl": "https://example.com/recording60.pdf"
  },
  {
    "id": "61",
    "date": "2025-02-05",
    "category": "Booking",
    "confidenceScore": 9.5,
    "duration": "0:00",
    "recordingUrl": "https://example.com/recording61.mp3",
    "transcriptUrl": "https://example.com/recording61.pdf"
  },
  {
    "id": "62",
    "date": "2025-02-06",
    "category": "Cancellation",
    "confidenceScore": 9.6,
    "duration": "1:07",
    "recordingUrl": "https://example.com/recording62.mp3",
    "transcriptUrl": "https://example.com/recording62.pdf"
  },
  {
    "id": "63",
    "date": "2025-02-07",
    "category": "Reschedule",
    "confidenceScore": 9.7,
    "duration": "2:14",
    "recordingUrl": "https://example.com/recording63.mp3",
    "transcriptUrl": "https://example.com/recording63.pdf"
  },
  {
    "id": "64",
    "date": "2025-02-08",
    "category": "General Inquiry",
    "confidenceScore": 9.8,
    "duration": "3:21",
    "recordingUrl": "https://example.com/recording64.mp3",
    "transcriptUrl": "https://example.com/recording64.pdf"
  },
  {
    "id": "65",
    "date": "2025-02-09",
    "category": "Booking",
    "confidenceScore": 9.9,
    "duration": "4:28",
    "recordingUrl": "https://example.com/recording65.mp3",
    "transcriptUrl": "https://example.com/recording65.pdf"
  },
  {
    "id": "66",
    "date": "2025-02-10",
    "category": "Cancellation",
    "confidenceScore": 9.5,
    "duration": "5:35",
    "recordingUrl": "https://example.com/recording66.mp3",
    "transcriptUrl": "https://example.com/recording66.pdf"
  },
  {
    "id": "67",
    "date": "2025-02-11",
    "category": "Reschedule",
    "confidenceScore": 9.6,
    "duration": "6:42",
    "recordingUrl": "https://example.com/recording67.mp3",
    "transcriptUrl": "https://example.com/recording67.pdf"
  },
  {
    "id": "68",
    "date": "2025-02-12",
    "category": "General Inquiry",
    "confidenceScore": 9.7,
    "duration": "7:49",
    "recordingUrl": "https://example.com/recording68.mp3",
    "transcriptUrl": "https://example.com/recording68.pdf"
  },
  {
    "id": "69",
    "date": "2025-02-13",
    "category": "Booking",
    "confidenceScore": 9.8,
    "duration": "8:56",
    "recordingUrl": "https://example.com/recording69.mp3",
    "transcriptUrl": "https://example.com/recording69.pdf"
  },
  {
    "id": "70",
    "date": "2025-02-14",
    "category": "Cancellation",
    "confidenceScore": 9.9,
    "duration": "9:03",
    "recordingUrl": "https://example.com/recording70.mp3",
    "transcriptUrl": "https://example.com/recording70.pdf"
  },
  {
    "id": "71",
    "date": "2025-02-15",
    "category": "Reschedule",
    "confidenceScore": 9.5,
    "duration": "0:10",
    "recordingUrl": "https://example.com/recording71.mp3",
    "transcriptUrl": "https://example.com/recording71.pdf"
  },
  {
    "id": "72",
    "date": "2025-02-16",
    "category": "General Inquiry",
    "confidenceScore": 9.6,
    "duration": "1:17",
    "recordingUrl": "https://example.com/recording72.mp3",
    "transcriptUrl": "https://example.com/recording72.pdf"
  },
  {
    "id": "73",
    "date": "2025-02-17",
    "category": "Booking",
    "confidenceScore": 9.7,
    "duration": "2:24",
    "recordingUrl": "https://example.com/recording73.mp3",
    "transcriptUrl": "https://example.com/recording73.pdf"
  },
  {
    "id": "74",
    "date": "2025-02-18",
    "category": "Cancellation",
    "confidenceScore": 9.8,
    "duration": "3:31",
    "recordingUrl": "https://example.com/recording74.mp3",
    "transcriptUrl": "https://example.com/recording74.pdf"
  },
  {
    "id": "75",
    "date": "2025-02-19",
    "category": "Reschedule",
    "confidenceScore": 9.9,
    "duration": "4:38",
    "recordingUrl": "https://example.com/recording75.mp3",
    "transcriptUrl": "https://example.com/recording75.pdf"
  },
  {
    "id": "76",
    "date": "2025-02-20",
    "category": "General Inquiry",
    "confidenceScore": 9.5,
    "duration": "5:45",
    "recordingUrl": "https://example.com/recording76.mp3",
    "transcriptUrl": "https://example.com/recording76.pdf"
  },
  {
    "id": "77",
    "date": "2025-02-21",
    "category": "Booking",
    "confidenceScore": 9.6,
    "duration": "6:52",
    "recordingUrl": "https://example.com/recording77.mp3",
    "transcriptUrl": "https://example.com/recording77.pdf"
  },
  {
    "id": "78",
    "date": "2025-02-22",
    "category": "Cancellation",
    "confidenceScore": 9.7,
    "duration": "7:59",
    "recordingUrl": "https://example.com/recording78.mp3",
    "transcriptUrl": "https://example.com/recording78.pdf"
  },
  {
    "id": "79",
    "date": "2025-02-23",
    "category": "Reschedule",
    "confidenceScore": 9.8,
    "duration": "8:06",
    "recordingUrl": "https://example.com/recording79.mp3",
    "transcriptUrl": "https://example.com/recording79.pdf"
  },
  {
    "id": "80",
    "date": "2025-02-24",
    "category": "General Inquiry",
    "confidenceScore": 9.9,
    "duration": "9:13",
    "recordingUrl": "https://example.com/recording80.mp3",
    "transcriptUrl": "https://example.com/recording80.pdf"
  },
  {
    "id": "81",
    "date": "2025-02-25",
    "category": "Booking",
    "confidenceScore": 9.5,
    "duration": "0:20",
    "recordingUrl": "https://example.com/recording81.mp3",
    "transcriptUrl": "https://example.com/recording81.pdf"
  },
  {
    "id": "82",
    "date": "2025-02-26",
    "category": "Cancellation",
    "confidenceScore": 9.6,
    "duration": "1:27",
    "recordingUrl": "https://example.com/recording82.mp3",
    "transcriptUrl": "https://example.com/recording82.pdf"
  },
  {
    "id": "83",
    "date": "2025-02-27",
    "category": "Reschedule",
    "confidenceScore": 9.7,
    "duration": "2:34",
    "recordingUrl": "https://example.com/recording83.mp3",
    "transcriptUrl": "https://example.com/recording83.pdf"
  },
  {
    "id": "84",
    "date": "2025-02-28",
    "category": "General Inquiry",
    "confidenceScore": 9.8,
    "duration": "3:41",
    "recordingUrl": "https://example.com/recording84.mp3",
    "transcriptUrl": "https://example.com/recording84.pdf"
  },
  {
    "id": "85",
    "date": "2025-02-01",
    "category": "Booking",
    "confidenceScore": 9.9,
    "duration": "4:48",
    "recordingUrl": "https://example.com/recording85.mp3",
    "transcriptUrl": "https://example.com/recording85.pdf"
  },
  {
    "id": "86",
    "date": "2025-02-02",
    "category": "Cancellation",
    "confidenceScore": 9.5,
    "duration": "5:55",
    "recordingUrl": "https://example.com/recording86.mp3",
    "transcriptUrl": "https://example.com/recording86.pdf"
  },
  {
    "id": "87",
    "date": "2025-02-03",
    "category": "Reschedule",
    "confidenceScore": 9.6,
    "duration": "6:02",
    "recordingUrl": "https://example.com/recording87.mp3",
    "transcriptUrl": "https://example.com/recording87.pdf"
  },
  {
    "id": "88",
    "date": "2025-02-04",
    "category": "General Inquiry",
    "confidenceScore": 9.7,
    "duration": "7:09",
    "recordingUrl": "https://example.com/recording88.mp3",
    "transcriptUrl": "https://example.com/recording88.pdf"
  },
  {
    "id": "89",
    "date": "2025-02-05",
    "category": "Booking",
    "confidenceScore": 9.8,
    "duration": "8:16",
    "recordingUrl": "https://example.com/recording89.mp3",
    "transcriptUrl": "https://example.com/recording89.pdf"
  },
  {
    "id": "90",
    "date": "2025-02-06",
    "category": "Cancellation",
    "confidenceScore": 9.9,
    "duration": "9:23",
    "recordingUrl": "https://example.com/recording90.mp3",
    "transcriptUrl": "https://example.com/recording90.pdf"
  },
  {
    "id": "91",
    "date": "2025-02-07",
    "category": "Reschedule",
    "confidenceScore": 9.5,
    "duration": "0:30",
    "recordingUrl": "https://example.com/recording91.mp3",
    "transcriptUrl": "https://example.com/recording91.pdf"
  },
  {
    "id": "92",
    "date": "2025-02-08",
    "category": "General Inquiry",
    "confidenceScore": 9.6,
    "duration": "1:37",
    "recordingUrl": "https://example.com/recording92.mp3",
    "transcriptUrl": "https://example.com/recording92.pdf"
  },
  {
    "id": "93",
    "date": "2025-02-09",
    "category": "Booking",
    "confidenceScore": 9.7,
    "duration": "2:44",
    "recordingUrl": "https://example.com/recording93.mp3",
    "transcriptUrl": "https://example.com/recording93.pdf"
  },
  {
    "id": "94",
    "date": "2025-02-10",
    "category": "Cancellation",
    "confidenceScore": 9.8,
    "duration": "3:51",
    "recordingUrl": "https://example.com/recording94.mp3",
    "transcriptUrl": "https://example.com/recording94.pdf"
  },
  {
    "id": "95",
    "date": "2025-02-11",
    "category": "Reschedule",
    "confidenceScore": 9.9,
    "duration": "4:58",
    "recordingUrl": "https://example.com/recording95.mp3",
    "transcriptUrl": "https://example.com/recording95.pdf"
  },
  {
    "id": "96",
    "date": "2025-02-12",
    "category": "General Inquiry",
    "confidenceScore": 9.5,
    "duration": "5:05",
    "recordingUrl": "https://example.com/recording96.mp3",
    "transcriptUrl": "https://example.com/recording96.pdf"
  },
  {
    "id": "97",
    "date": "2025-02-13",
    "category": "Booking",
    "confidenceScore": 9.6,
    "duration": "6:12",
    "recordingUrl": "https://example.com/recording97.mp3",
    "transcriptUrl": "https://example.com/recording97.pdf"
  },
  {
    "id": "98",
    "date": "2025-02-14",
    "category": "Cancellation",
    "confidenceScore": 9.7,
    "duration": "7:19",
    "recordingUrl": "https://example.com/recording98.mp3",
    "transcriptUrl": "https://example.com/recording98.pdf"
  },
  {
    "id": "99",
    "date": "2025-02-15",
    "category": "Reschedule",
    "confidenceScore": 9.8,
    "duration": "8:26",
    "recordingUrl": "https://example.com/recording99.mp3",
    "transcriptUrl": "https://example.com/recording99.pdf"
  },
  {
    "id": "100",
    "date": "2025-02-16",
    "category": "General Inquiry",
    "confidenceScore": 9.9,
    "duration": "9:33",
    "recordingUrl": "https://example.com/recording100.mp3",
    "transcriptUrl": "https://example.com/recording100.pdf"
  },
  {
    "id": "101",
    "date": "2025-02-17",
    "category": "Booking",
    "confidenceScore": 9.5,
    "duration": "0:40",
    "recordingUrl": "https://example.com/recording101.mp3",
    "transcriptUrl": "https://example.com/recording101.pdf"
  },
  {
    "id": "102",
    "date": "2025-02-18",
    "category": "Cancellation",
    "confidenceScore": 9.6,
    "duration": "1:47",
    "recordingUrl": "https://example.com/recording102.mp3",
    "transcriptUrl": "https://example.com/recording102.pdf"
  },
  {
    "id": "103",
    "date": "2025-02-19",
    "category": "Reschedule",
    "confidenceScore": 9.7,
    "duration": "2:54",
    "recordingUrl": "https://example.com/recording103.mp3",
    "transcriptUrl": "https://example.com/recording103.pdf"
  },
  {
    "id": "104",
    "date": "2025-02-20",
    "category": "General Inquiry",
    "confidenceScore": 9.8,
    "duration": "3:01",
    "recordingUrl": "https://example.com/recording104.mp3",
    "transcriptUrl": "https://example.com/recording104.pdf"
  },
  {
    "id": "105",
    "date": "2025-02-21",
    "category": "Booking",
    "confidenceScore": 9.9,
    "duration": "4:08",
    "recordingUrl": "https://example.com/recording105.mp3",
    "transcriptUrl": "https://example.com/recording105.pdf"
  },
  {
    "id": "106",
    "date": "2025-02-22",
    "category": "Cancellation",
    "confidenceScore": 9.5,
    "duration": "5:15",
    "recordingUrl": "https://example.com/recording106.mp3",
    "transcriptUrl": "https://example.com/recording106.pdf"
  },
  {
    "id": "107",
    "date": "2025-02-23",
    "category": "Reschedule",
    "confidenceScore": 9.6,
    "duration": "6:22",
    "recordingUrl": "https://example.com/recording107.mp3",
    "transcriptUrl": "https://example.com/recording107.pdf"
  },
  {
    "id": "108",
    "date": "2025-02-24",
    "category": "General Inquiry",
    "confidenceScore": 9.7,
    "duration": "7:29",
    "recordingUrl": "https://example.com/recording108.mp3",
    "transcriptUrl": "https://example.com/recording108.pdf"
  },
  {
    "id": "109",
    "date": "2025-02-25",
    "category": "Booking",
    "confidenceScore": 9.8,
    "duration": "8:36",
    "recordingUrl": "https://example.com/recording109.mp3",
    "transcriptUrl": "https://example.com/recording109.pdf"
  },
  {
    "id": "110",
    "date": "2025-02-26",
    "category": "Cancellation",
    "confidenceScore": 9.9,
    "duration": "9:43",
    "recordingUrl": "https://example.com/recording110.mp3",
    "transcriptUrl": "https://example.com/recording110.pdf"
  },
  {
    "id": "111",
    "date": "2025-02-27",
    "category": "Reschedule",
    "confidenceScore": 9.5,
    "duration": "0:50",
    "recordingUrl": "https://example.com/recording111.mp3",
    "transcriptUrl": "https://example.com/recording111.pdf"
  },
  {
    "id": "112",
    "date": "2025-02-28",
    "category": "General Inquiry",
    "confidenceScore": 9.6,
    "duration": "1:57",
    "recordingUrl": "https://example.com/recording112.mp3",
    "transcriptUrl": "https://example.com/recording112.pdf"
  },
  {
    "id": "113",
    "date": "2025-02-01",
    "category": "Booking",
    "confidenceScore": 9.7,
    "duration": "2:04",
    "recordingUrl": "https://example.com/recording113.mp3",
    "transcriptUrl": "https://example.com/recording113.pdf"
  },
  {
    "id": "114",
    "date": "2025-02-02",
    "category": "Cancellation",
    "confidenceScore": 9.8,
    "duration": "3:11",
    "recordingUrl": "https://example.com/recording114.mp3",
    "transcriptUrl": "https://example.com/recording114.pdf"
  },
  {
    "id": "115",
    "date": "2025-02-03",
    "category": "Reschedule",
    "confidenceScore": 9.9,
    "duration": "4:18",
    "recordingUrl": "https://example.com/recording115.mp3",
    "transcriptUrl": "https://example.com/recording115.pdf"
  },
  {
    "id": "116",
    "date": "2025-02-04",
    "category": "General Inquiry",
    "confidenceScore": 9.5,
    "duration": "5:25",
    "recordingUrl": "https://example.com/recording116.mp3",
    "transcriptUrl": "https://example.com/recording116.pdf"
  },
  {
    "id": "117",
    "date": "2025-02-05",
    "category": "Booking",
    "confidenceScore": 9.6,
    "duration": "6:32",
    "recordingUrl": "https://example.com/recording117.mp3",
    "transcriptUrl": "https://example.com/recording117.pdf"
  },
  {
    "id": "118",
    "date": "2025-02-06",
    "category": "Cancellation",
    "confidenceScore": 9.7,
    "duration": "7:39",
    "recordingUrl": "https://example.com/recording118.mp3",
    "transcriptUrl": "https://example.com/recording118.pdf"
  },
  {
    "id": "119",
    "date": "2025-02-07",
    "category": "Reschedule",
    "confidenceScore": 9.8,
    "duration": "8:46",
    "recordingUrl": "https://example.com/recording119.mp3",
    "transcriptUrl": "https://example.com/recording119.pdf"
  },
  {
    "id": "120",
    "date": "2025-02-08",
    "category": "General Inquiry",
    "confidenceScore": 9.9,
    "duration": "9:53",
    "recordingUrl": "https://example.com/recording120.mp3",
    "transcriptUrl": "https://example.com/recording120.pdf"
  }
]
