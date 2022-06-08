import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'popover-dropdown',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@carbonaut/popover-dropdown',
      directivesProxyFile: '../angular-workspace/projects/popover-dropdown/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/popover-dropdown/src/lib/stencil-generated/index.d.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
