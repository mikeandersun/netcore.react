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
//# sourceMappingURL=add-contact-form.component.js.map