import Timeline from "@/components/timeline";
import { EmailEvent, MeetingEvent, PhoneCallEvent } from "../types";
// import Image from "next/image";

export default function JFDI() {
  const provider = {
    name: "JFDI",
    url: "https://jfdi.com",
    contacts: ["bob", "alice"],
  };

  const events = [
    {
      date: new Date("2021-06-01T09:00:00Z"),
      type: "phone-call",
      phoneNumber: "555-1234",
      direction: "outgoing",
      notes: "discuss the project",
      contacts: ["bob"],
    } as PhoneCallEvent,
    {
      date: new Date("2021-06-01T10:00:00Z"),
      type: "meeting",
      location: "office",
      notes: "discuss the project",
      contacts: ["alice"],
    } as MeetingEvent,
    {
      date: new Date("2021-06-01T11:00:00Z"),
      type: "email",
      subject: "project proposal",
      body: "attached is the project proposal",
      contacts: ["bob"],
    } as EmailEvent,
  ];

  return <Timeline provider={provider} events={events} />;
}
