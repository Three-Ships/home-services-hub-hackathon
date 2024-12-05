export default interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface Provider {
  name: string;
  url: string;
  contacts: string[];
}

export interface Quote {
  range: [number, number];
  scope: string;
}

export interface EventBase {
  date: Date;
  notes?: string;
  duration?: number;
  contacts: string[];
  quote_update?: Quote;
}

export interface PhoneCallEvent extends EventBase {
  type: "phone-call";
  phoneNumber: string;
  duration?: number;
  direction: "incoming" | "outgoing";
}

export interface MeetingEvent extends EventBase {
  type: "meeting";
  location: "home" | "office" | "store";
}

export interface EmailEvent extends EventBase {
  type: "email";
  subject: string;
  body: string;
}

export type TimeLineEvent = PhoneCallEvent | MeetingEvent | EmailEvent;
