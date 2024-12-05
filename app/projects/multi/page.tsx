import Timeline from "@/components/timeline";
import { EmailEvent, MeetingEvent, PhoneCallEvent, Quote } from "../types";
// import Image from "next/image";

export default function Multi() {
  const provider = {
    name: "BOBS Gutters",
    url: "https://jfdi.com",
    contacts: ["bob", "alice"],
  };

  const quote = {
    range: [1000, 2000],
    scope: "gutters",
  } as Quote;

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

  return (
    <div style={{ display: "flex", gap: 6 }}>
      <Timeline
        provider={provider}
        events={events}
        compact={true}
        quote={quote}
      />
      <Timeline
        provider={provider}
        events={events}
        compact={true}
        quote={quote}
      />
      <Timeline
        provider={provider}
        events={events}
        compact={true}
        quote={quote}
      />
    </div>
  );
}
