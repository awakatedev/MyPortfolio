import '../assets/styles/components/Contact.scss';
import ContactForm from '../components/ContactForm';
import useSeo from '../hooks/useSeo';

const Contact = () => {
  useSeo({
    title: 'Contact',
    description:
      "Do you like the things I do? Fantastic, so write me and let's work together!",
  });
  return (
    <>
      <main>
        <section className="contact">
          <div>
            <h1>Contact</h1>
          </div>
          <ContactForm />
        </section>
      </main>
    </>
  );
};
export default Contact;
