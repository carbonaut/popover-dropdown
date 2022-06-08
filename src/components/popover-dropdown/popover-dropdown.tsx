import { Component, Host, h, Prop, State } from '@stencil/core';

export interface Option {
  label: string;
  callback: () => any;
}

@Component({
  tag: 'popover-dropdown',
  styleUrl: 'popover-dropdown.css',
  shadow: true,
})
export class PopoverDropdown {
  /**
   * The options list of the popover.
   * @type {Option[]}
   */
  @Prop() options: Option[];

  /**
   * The first option to be displayed, if it's empty it'll show the first one on options array.
   * @type {string}
   */
  @Prop() firstOption: string = undefined;

  /**
   * The icon displayed at the right side of the popover description. It uses ionicons v6 icons.
   * @type {string}
   */
  @Prop() icon: string = undefined;

  /**
   * The icon displayed at the right side of the popover description, it'll substitute the icon property if set.
   * @type {string}
   */
  @Prop() svg: string = undefined;

  /**
   * Boolean property to set the popover dropdown to be displayed on top of the description.
   * @type {boolean}
   */
  @Prop() upwards: boolean = false;

  @State() selectedOption: string = undefined;

  @State() isOpened: boolean = false;

  componentWillLoad() {
    if (!this.firstOption) {
      this.firstOption = this.options[0].label;
    }

    this.options.map(item => {
      if (item.label === this.firstOption) {
        this.selectedOption = item.label;
      }
    });
  }

  open() {
    if (this.isOpened) {
      this.isOpened = false;
      return;
    }

    this.isOpened = !this.isOpened;
  }

  changeOption(label: string, callback: any) {
    this.selectedOption = label;
    this.isOpened = false;

    callback();
  }

  render() {
    return (
      <Host>
        {this.isOpened ? <div class="e-option__backdrop" onClick={() => this.open()}></div> : ''}
        <p class={this.isOpened ? 'e-option__description e-option__description--active' : 'e-option__description'} onClick={() => this.open()}>
          {this.selectedOption}
          {this.icon && !this.svg ? <ion-icon class="e-option__icon" name={this.icon}></ion-icon> : ''}
          {this.svg ? <img class="e-option__svg" src={this.svg} /> : ''}
        </p>
        {this.isOpened ? (
          <div class={this.upwards ? 'e-option__tooltip e-option__tooltip--upwards' : 'e-option__tooltip'}>
            {this.options.map(item =>
              item.label === this.selectedOption ? (
                ''
              ) : (
                <div class="e-option__tooltip-item" onClick={() => this.changeOption(item.label, item.callback)}>
                  {item.label}
                </div>
              ),
            )}
          </div>
        ) : (
          ''
        )}
      </Host>
    );
  }
}
