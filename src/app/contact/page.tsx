import styles from "./Contact.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import contactData from '@/contact.json';

export const metadata = {
  title: "Contact Mike Donovan",
};

export default function Contact() {
  return (
    <section className={styles.Contact}>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> <a href={`mailto:mike@${contactData.email}`}>{contactData.email}</a></p>
        <p><strong>Phone:</strong><a href={`tel:${contactData.phone}`}>{contactData.phone}</a></p>
        <p><strong>Location:</strong> {contactData.location.city}, {contactData.location.state}, {contactData.location.country}</p>
        <p><strong>LinkedIn:</strong> <a href={contactData.socials.linkedin} target="_blank" rel="noopener noreferrer">{contactData.socials.linkedin.split('/').pop()}</a></p>
        <p><strong>GitHub:</strong> <a href={contactData.socials.github} target="_blank" rel="noopener noreferrer">{contactData.socials.github.split('/').pop()}</a></p>
      </div>
      <ContactForm />
    </section>
  );
}
