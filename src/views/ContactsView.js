import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import Container from "../components/Container/Container";

export default function ContactsView() {
  return (
    <Container>
      <h1 className="title"> Phonebook </h1>
      <h2 className="subtitle">Add new contact</h2>
      <ContactForm />
      <h2 className="subtitle">Find contact</h2>
      <Filter />
      <h2 className="subtitle">Contact list</h2>
      <ContactList />
    </Container>
  );
}
