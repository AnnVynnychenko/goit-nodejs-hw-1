import * as contactsInfo from "./contacts.js";
import yargs from "yargs";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contactsInfo.listContacts();
      return console.table(contactsList);
    case "get":
      const getContactById = await contactsInfo.getContactById(id);
      return console.log(getContactById);
    case "add":
      const addContact = await contactsInfo.addContact(name, email, phone);
      return console.log(addContact);
    case "remove":
      const removeContact = await contactsInfo.removeContact(id);
      return console.log(removeContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
