import '../assets/styles/components/Contact.scss';
import ContactForm from '../components/ContactForm';
import useSeo from '../hooks/useSeo';

const Contact = () => {
  useSeo({
    title: 'Contact',
    description:
      "Do you like the things I do? Obvious yes! so don't doubt in contact me",
  });
  return (
    <>
      <main>
        <section className="contact">
          <div>
            <h1>Contact</h1>
            <p>
              Do you like the things I do? Obvious yes! so don't doubt in
              contact me.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>
    </>
  );
};
export default Contact;
