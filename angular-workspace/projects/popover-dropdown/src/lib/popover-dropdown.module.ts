import { NgModule } from '@angular/core';
import { defineCustomElements } from '@carbonaut/popover-dropdown/loader';

import { PopoverDropdown } from './stencil-generated/components';

defineCustomElements(window);

@NgModule({
  imports: [],
  exports: [PopoverDropdown],
  declarations: [PopoverDropdown],
})
export class WebComponentsModule {}