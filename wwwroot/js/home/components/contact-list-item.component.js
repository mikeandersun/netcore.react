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
//# sourceMappingURL=contact-list-item.component.js.map