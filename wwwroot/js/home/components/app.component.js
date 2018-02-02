"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core React modules.
var React = require("react");
// Import the application modules.
var add_contact_form_component_1 = require("./add-contact-form.component");
var contact_list_component_1 = require("./contact-list.component");
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    // I initialize the app component.
    function AppComponent(props) {
        var _this = _super.call(this, props) || this;
        // ---
        // PRIVATE METHODS.
        // ---
        //// I get the next available ID from the given collection of contacts.
        //private getNextID( contacts: Contact[] ) : number {
        //	if ( contacts.length ) {
        //		//return( _.maxBy( contacts, "id" ).id + 1 );
        //	} else {
        //		return( 1 );
        //	}
        //}
        // I handle name emitted from the form component, adding a new contact.
        // --
        // CAUTION: Using an instance-property to define the function so that we don't lose
        // the "this" context when the method reference is passed into the React element.
        _this.handleAdd = function (name) {
            //// NOTE: Since the next state is based on the previous state, we need to use the
            //// callback-style invocation so that we can handle asynchronous state updates.
            //this.setState(
            //	( state: State, props: Props ) : Partial<State> => {
            //		return({
            //			contacts: [
            //				...state.contacts, 
            //				{
            //					id: this.getNextID( state.contacts ),
            //					name: name
            //				}
            //			]
            //		});
            //	}
            //);
        };
        // I handle the delete event emitted from the contact list, removing a contact.
        // --
        // CAUTION: Using an instance-property to define the function so that we don't lose
        // the "this" context when the method reference is passed into the React element.
        _this.handleDelete = function (contact) {
            //// NOTE: Since the next state is based on the previous state, we need to use the
            //// callback-style invocation so that we can handle asynchronous state updates.
            //this.setState(
            //	( state: State, props: Props ) : Partial<State> => {
            //		return({
            //			contacts: _.without( state.contacts, contact )
            //		});
            //	}
            //);
        };
        _this.state = {
            contacts: [
                { id: 1, name: "Kim" },
                { id: 2, name: "Sarah" },
                { id: 3, name: "Joanna" },
                { id: 4, name: "Libby" }
            ]
        };
        return _this;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I render the component.
    AppComponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null,
                "You Have ",
                this.state.contacts.length || "No",
                " Contacts"),
            React.createElement(contact_list_component_1.ContactListComponent, { contacts: this.state.contacts, onDelete: this.handleDelete }),
            React.createElement(add_contact_form_component_1.AddContactFormComponent, { onSubmit: this.handleAdd })));
    };
    return AppComponent;
}(React.Component));
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map