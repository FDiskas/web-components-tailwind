import { Config } from '@stencil/core';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConf from './tailwind.config';

import tailwind, { tailwindHMR, setPluginConfigurationDefaults } from 'stencil-tailwind-plugin';
import { inlineSvg } from 'stencil-inline-svg';

setPluginConfigurationDefaults({
  tailwindConf,
  tailwindCssPath: './src/styles/tailwind.css',
  postcss: {
    plugins: [tailwindcss(), autoprefixer()],
  },
  stripComments: true,
  minify: true,
});

export const config: Config = {
  namespace: 'mediq-ui',
  buildEs5: 'prod',
  srcDir: 'src',
  validatePrimaryPackageOutputTarget: true,
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
      isPrimaryPackageOutputTarget: true,
      empty: true,
    },
    {
      type: 'docs-readme',
      footer: '*Built with love! ❤️*',
    },
    // For vscode intellisense
    {
      type: 'docs-vscode',
      file: './.vscode/custom-elements.json',
    },
    // Demo page
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      empty: false,
    },
  ],
  plugins: [inlineSvg(), tailwind(), tailwindHMR()],
  testing: {
    browserHeadless: 'shell',
  },
  devServer: {
    // tailwind styles will not change without a full page reload
    reloadStrategy: 'pageReload',
  },
};
