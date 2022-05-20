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
  @Prop() options: Option[];

  @Prop() currentOption: string;

  @State() selectedOption: string = undefined;

  @State() isOpened: boolean = false;

  componentWillLoad() {
    this.options.map(item => {
      if (item.label === this.currentOption) {
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

  changeOption(label: string, callback: () => any) {
    this.selectedOption = label;
    this.isOpened = false;

    callback();
  }

  render() {
    return (
      <Host>
        <p class="e-option__description" onClick={() => this.open()}>
          {this.selectedOption}
        </p>
        {this.isOpened ? (
          <div class="e-option__tooltip">
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
