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
   * The icon displayed at the right side of the popover description.
   * @type {string}
   */
  @Prop() icon: string = undefined;

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
        <div class={this.isOpened ? 'e-option__container e-option__container--active' : 'e-option__container'} onClick={() => this.open()}>
          <p class="e-option__description">{this.selectedOption}</p>
          {this.icon ? <img class="e-option__icon" src={this.icon} /> : ''}
        </div>
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
