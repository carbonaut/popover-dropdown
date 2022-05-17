import { Component, Host, h, Prop, State } from '@stencil/core';

export interface Language {
  label: string;
  callback: () => any;
}

@Component({
  tag: 'language-toggle',
  styleUrl: 'language-toggle.css',
  shadow: true,
})
export class LanguageToggle {
  @Prop() languages: Language[];

  @Prop() currentLanguage: string;

  @State() selectedLanguage: string = undefined;

  @State() isOpened: boolean = false;

  componentWillLoad() {
    this.languages.map(item => {
      if (item.label === this.currentLanguage) {
        this.selectedLanguage = item.label;
      }
    });
  }

  open() {
    this.isOpened = true;
  }

  changeLanguage(label: string, callback: () => any) {
    this.selectedLanguage = label;
    this.isOpened = false;

    callback();
  }

  render() {
    return (
      <Host>
        <button class="e-language__button" onClick={() => this.open()}>
          {this.selectedLanguage}
        </button>
        {this.isOpened ? (
          <div class="e-language__tooltip">
            {this.languages.map(item => (item.label === this.selectedLanguage ? '' : <div onClick={() => this.changeLanguage(item.label, item.callback)}>{item.label}</div>))}
          </div>
        ) : (
          ''
        )}
      </Host>
    );
  }
}
