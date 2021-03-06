/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Option } from "./components/popover-dropdown/popover-dropdown";
export namespace Components {
    interface PopoverDropdown {
        /**
          * The first option to be displayed, if it's empty it'll show the first one on options array.
          * @type {string}
         */
        "firstOption": string;
        /**
          * The icon displayed at the right side of the popover description. It uses ionicons v6 icons.
          * @type {string}
         */
        "icon": string;
        /**
          * The options list of the popover.
          * @type {Option[]}
         */
        "options": Option[];
        /**
          * The icon displayed at the right side of the popover description, it'll substitute the icon property if set.
          * @type {string}
         */
        "svg": string;
        /**
          * Boolean property to set the popover dropdown to be displayed on top of the description.
          * @type {boolean}
         */
        "upwards": boolean;
    }
}
declare global {
    interface HTMLPopoverDropdownElement extends Components.PopoverDropdown, HTMLStencilElement {
    }
    var HTMLPopoverDropdownElement: {
        prototype: HTMLPopoverDropdownElement;
        new (): HTMLPopoverDropdownElement;
    };
    interface HTMLElementTagNameMap {
        "popover-dropdown": HTMLPopoverDropdownElement;
    }
}
declare namespace LocalJSX {
    interface PopoverDropdown {
        /**
          * The first option to be displayed, if it's empty it'll show the first one on options array.
          * @type {string}
         */
        "firstOption"?: string;
        /**
          * The icon displayed at the right side of the popover description. It uses ionicons v6 icons.
          * @type {string}
         */
        "icon"?: string;
        /**
          * The options list of the popover.
          * @type {Option[]}
         */
        "options"?: Option[];
        /**
          * The icon displayed at the right side of the popover description, it'll substitute the icon property if set.
          * @type {string}
         */
        "svg"?: string;
        /**
          * Boolean property to set the popover dropdown to be displayed on top of the description.
          * @type {boolean}
         */
        "upwards"?: boolean;
    }
    interface IntrinsicElements {
        "popover-dropdown": PopoverDropdown;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "popover-dropdown": LocalJSX.PopoverDropdown & JSXBase.HTMLAttributes<HTMLPopoverDropdownElement>;
        }
    }
}
