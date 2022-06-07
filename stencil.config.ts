import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'popover-dropdown',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'popover-dropdown',
      directivesProxyFile: './angular-workspace/stencil-library/src/components.d.ts',
      directivesArrayFile: './angular-workspace/stencil-library/src/index.ts'
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
