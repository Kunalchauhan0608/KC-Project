import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Book Your Free Digital Marketing Consultation",
  description: "Get in touch with Shreeji Marketers for a free SEO and marketing audit. Talk to our experts about growing your business with data-driven digital marketing.",
};

export default function ContactPage() {
  return <ContactClient />;
}
