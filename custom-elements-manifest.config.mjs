import { customElementJetBrainsPlugin } from "custom-element-jet-brains-integration";

/**
 * Generate manifest file for demo of all components
 */
const options = {
  outdir: "www/",
  packageJson: true,
  stencil: true,
  globs: ['src/components/**/*.tsx'],
};

export default {
  ...options,
  plugins: [
    // Special manifest for jetbrains
    customElementJetBrainsPlugin({...options, outdir: 'dist/' })
  ],
};
