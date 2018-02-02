webpackJsonp([1],{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(8);
__webpack_require__(31);
// Import the application modules.
var app_component_1 = __webpack_require__(32);
var ROOT = document.querySelector(".container");
// To bootstrap the application, all we're going to do is render the root component 
// on the main page.
ReactDOM.render(React.createElement(app_component_1.AppComponent, null), ROOT);


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(2);
// Import the application modules.
var add_contact_form_component_1 = __webpack_require__(33);
var contact_list_component_1 = __webpack_require__(34);
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


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(2);
var AddContactFormComponent = /** @class */ (function (_super) {
    __extends(AddContactFormComponent, _super);
    // I initialize the add contact form component.
    function AddContactFormComponent(props) {
        var _this = _super.call(this, props) || this;
        // ---
        // PRIVATE METHODS.
        // ---
        // I handle the delete click.
        // --
        // CAUTION: Using an instance-property to define the function so that we don't lose 
        // the "this" context when the method reference is passed into the React element.
        _this.handleSubmit = function (event) {
            // Stop the native form submission behavior.
            event.preventDefault();
            if (_this.state.name) {
                _this.props.onSubmit(_this.state.name);
                _this.setState({
                    name: ""
                });
            }
        };
        // I handle the exposure of the input element on the DOM.
        // --
        // CAUTION: Using an instance-property to define the function so that we don't lose 
        // the "this" context when the method reference is passed into the React element.
        _this.handleInputRef = function (element) {
            _this.input = element;
        };
        // I handle the one-way data flow change to the form input.
        _this.handleValue = function (event) {
            // CAUTION: I need to cast the React.FormEvent<HTMLInputElement> event type to
            // be an ANY since the native EventTarget interface doesn't appear to support 
            // "value" (on target) at this time. So, by casting to ANY, I am essentially 
            // side-stepping type-safety in order to access the input value.
            _this.setState({
                name: event.target.value
            });
        };
        _this.state = {
            name: ""
        };
        return _this;
        //this.input = null;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I get called once the component has been mounted on the DOM (and the Element
    // references have been made available).
    AddContactFormComponent.prototype.componentDidMount = function () {
        this.input.focus();
    };
    // I render the component.
    AddContactFormComponent.prototype.render = function () {
        return (React.createElement("div", { className: "add-contact" },
            React.createElement("h3", { className: "add-contact__title" }, "Add New Contact"),
            React.createElement("form", { onSubmit: this.handleSubmit, className: "add-contact__form" },
                React.createElement("input", { type: "text", ref: this.handleInputRef, value: this.state.name, onChange: this.handleValue, placeholder: "Jane Doe...", className: "add-contact__input" }),
                React.createElement("button", { type: "submit", className: "add-contact__button", disabled: !this.state.name }, "Add Contact"))));
    };
    return AddContactFormComponent;
}(React.Component));
exports.AddContactFormComponent = AddContactFormComponent;


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Import the core React modules.
// --
// CAUTION: DO NOT REMOVE - Even though this doesn't appear to be referenced, it will be
// referenced in the transpiled code (which creates React.createElement() expressions).
var React = __webpack_require__(2);
var contact_list_item_component_1 = __webpack_require__(35);
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


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(2);
var ContactListItemComponent = /** @class */ (function (_super) {
    __extends(ContactListItemComponent, _super);
    function ContactListItemComponent() {
        // ---
        // PUBLIC METHODS.
        // ---
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ---
        // PRIVATE METHODS.
        // ---
        // I handle the delete click.
        // --
        // CAUTION: Using an instance-property to define the function so that we don't lose 
        // the "this" context when the method reference is passed into the React element.
        _this.handleClick = function (event) {
            _this.props.onDelete(_this.props.contact);
        };
        return _this;
    }
    // I render the component.
    ContactListItemComponent.prototype.render = function () {
        return (React.createElement("div", { title: "Contact ID " + this.props.contact.id, className: "contact-list__item" },
            React.createElement("div", { className: "contact-list__name" }, this.props.contact.name),
            React.createElement("div", { className: "contact-list__actions" },
                React.createElement("a", { onClick: this.handleClick, className: "contact-list__action" }, "Delete"))));
    };
    return ContactListItemComponent;
}(React.Component));
exports.ContactListItemComponent = ContactListItemComponent;


/***/ })

},[30]);
//# sourceMappingURL=home.js.map