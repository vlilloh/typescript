import {
  playwrightLauncher,
} from '@web/test-runner-playwright';

export default {
  browsers: [
    playwrightLauncher({ product: `chromium` }),
    playwrightLauncher({ product: `firefox` }),
    playwrightLauncher({ product: `webkit` }),
  ],
  coverage: true,
  files: `packages/*/test/*.test.js`,
  nodeResolve: true,
  playwright: true,
};