import styles from "./Contact.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import contactData from '@/contact.json';

export const metadata = {
  title: "Contact Mike Donovan",
};

export default function Contact() {
  const formattedPhone = contactData.phone.replace(/\+1-(\d{3})-(\d{3})-(\d{4})/, "($1)-$2-$3");
  return (
    <section className={styles.Contact}>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <strong>Email:</strong>
        <p><a href={`mailto:${contactData.email}`}>{contactData.email}</a></p>
        <strong>Phone:</strong>
        <p><a href={`tel:${contactData.phone}`}>{formattedPhone}</a></p>
        <strong>Location:</strong>
        <p>{contactData.location.city}, {contactData.location.state}, {contactData.location.country}</p>
        <strong>LinkedIn:</strong>
        <p><a href={contactData.socials.linkedin} target="_blank" rel="noopener noreferrer">{contactData.socials.linkedin.split('/').pop()}</a></p>
        <strong>GitHub:</strong>
        <p><a href={contactData.socials.github} target="_blank" rel="noopener noreferrer">{contactData.socials.github.split('/').pop()}</a></p>
      </div>
      <ContactForm />
    </section>
  );
}