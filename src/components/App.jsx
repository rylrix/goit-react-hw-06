import "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

function App() {
  // const [searchItem, setSearchItem] = useState("");
  // const [contactArr, setContactArr] = useState(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   return savedContacts?.length ? savedContacts : [];
  // });

  const handleInputChange = (e) => {
    // setSearchItem(e.target.value);
  };

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contactArr));
  // }, [contactArr]);

  // const filteredContacts = contactArr.filter((item) =>
  //   item.name.toLowerCase().includes(searchItem.toLowerCase())
  // );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox
      // handleInputChange={handleInputChange}
      // searchItem={searchItem}
      />
      <ContactList />
    </div>
  );
}

export default App;
