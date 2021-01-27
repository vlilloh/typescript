import { createBasicConfig } from '@open-wc/building-rollup';
import html from '@web/rollup-plugin-html';
import merge from 'deepmerge';
import copy from 'rollup-plugin-copy';

export default merge(
  createBasicConfig(),
  {
    input: `index.html`,
    plugins: [
      html(),
      copy({
        targets: [
          {
            src: [
              `assets`,
              `nowc`,
              `manifest.json`,
              `push-manifest.json`,
            ],
            dest: `dist`,
          },
        ],
      }),
    ],
  },
);