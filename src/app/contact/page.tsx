import styles from "./Contact.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";


export const metadata = {
  title: "Contact Mike Donovan",
};

export default function Contact() {
  return (
    <section className={styles.Contact}>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> <a href="mailto:mike@mikedonovan.dev">mike@mikedonovan.dev</a></p>
        <p><strong>Phone:</strong> <a href="tel:+13609368442">+1-360-936-8442</a></p>
        <p><strong>Location:</strong> Apache Junction, Arizona, USA</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/the-mike-donovan" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/eggborne" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </div>
      <ContactForm />
    </section>
  );
}
