"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core React modules.
// --
// CAUTION: DO NOT REMOVE - Even though this doesn't appear to be referenced, it will be
// referenced in the transpiled code (which creates React.createElement() expressions).
var React = require("react");
var contact_list_item_component_1 = require("./contact-list-item.component");
// NOTE: We are using a Function instead of a Class here because this is a stateless 
// component that doesn't need to expose any additional methods. As such, we can provide
// what is essential just the render() method. The props are still type-checked against
// the Props {} interface.
function ContactListComponent(props) {
    var contactListItemNodes = props.contacts.map(function (contact) {
        return (React.createElement(contact_list_item_component_1.ContactListItemComponent, { key: contact.id, contact: contact, onDelete: props.onDelete }));
    });
    return (React.createElement("div", { className: "contact-list" }, contactListItemNodes));
}
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map