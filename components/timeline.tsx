"use client";

import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { TimeLineEvent, Provider } from "@/app/types";

export interface TimelineProps {
  provider: Provider;
  events: TimeLineEvent[];
}

export default function Timeline({ provider, events }: TimelineProps) {
  return (
    <VerticalTimeline layout="1-column-left">
      {events.map((event: TimeLineEvent) => {
        // switch on the event type
        switch (event.type) {
          case "phone-call":
            return (
              <VerticalTimelineElement
                key={event.date.toISOString()}
                className="vertical-timeline-element--work"
                date={event.date.toISOString()}
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FaPhone />}
              >
                <h3 className="vertical-timeline-element-title">Phone Call</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {event.phoneNumber}
                </h4>
                <p>{event.notes}</p>
              </VerticalTimelineElement>
            );
          case "meeting":
            return (
              <VerticalTimelineElement
                key={event.date.toISOString()}
                className="vertical-timeline-element--work"
                date={event.date.toISOString()}
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FaUserFriends />}
              >
                <h3 className="vertical-timeline-element-title">Meeting</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {event.location}
                </h4>
                <p>{event.notes}</p>
              </VerticalTimelineElement>
            );
          case "email":
            return (
              <VerticalTimelineElement
                key={event.date.toISOString()}
                className="vertical-timeline-element--work"
                date={event.date.toISOString()}
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FaEnvelope />}
              >
                <h3 className="vertical-timeline-element-title">Email</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {event.subject}
                </h4>
                <p>{event.body}</p>
              </VerticalTimelineElement>
            );
          default:
            throw new Error(`Unknown event type: ${event}`);
        }
      })}
    </VerticalTimeline>
  );
}
//   return (
//     <VerticalTimeline>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//         date="2011 - present"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         icon={<FaBuilding />}
//       >
//         <h3 className="vertical-timeline-element-title">Creative Director</h3>
//         <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//         <p>
//           Creative Direction, User Experience, Visual Design, Project
//           Management, Team Leading
//         </p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="2010 - 2011"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         icon={<FaBuilding />}
//       >
//         <h3 className="vertical-timeline-element-title">Art Director</h3>
//         <h4 className="vertical-timeline-element-subtitle">
//           San Francisco, CA
//         </h4>
//         <p>
//           Creative Direction, User Experience, Visual Design, SEO, Online
//           Marketing
//         </p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="2008 - 2010"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         icon={<FaBuilding />}
//       >
//         <h3 className="vertical-timeline-element-title">Web Designer</h3>
//         <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
//         <p>User Experience, Visual Design</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="2006 - 2008"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         icon={<FaBuilding />}
//       >
//         <h3 className="vertical-timeline-element-title">Web Designer</h3>
//         <h4 className="vertical-timeline-element-subtitle">
//           San Francisco, CA
//         </h4>
//         <p>User Experience, Visual Design</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="April 2013"
//         iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//         icon={<FaSchoolFlag />}
//       >
//         <h3 className="vertical-timeline-element-title">
//           Content Marketing for Web, Mobile and Social Media
//         </h3>
//         <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//         <p>Strategy, Social Media</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="November 2012"
//         iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//         icon={<FaSchoolFlag />}
//       >
//         <h3 className="vertical-timeline-element-title">
//           Agile Development Scrum Master
//         </h3>
//         <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//         <p>Creative Direction, User Experience, Visual Design</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--education"
//         date="2002 - 2006"
//         iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//         icon={<FaSchoolFlag />}
//       >
//         <h3 className="vertical-timeline-element-title">
//           Bachelor of Science in Interactive Digital Media Visual Imaging
//         </h3>
//         <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
//         <p>Creative Direction, Visual Design</p>
//       </VerticalTimelineElement>
//       <VerticalTimelineElement
//         iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
//         icon={<FaStar />}
//       />
//     </VerticalTimeline>
//   );
// }
