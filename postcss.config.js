/* eslint-disable no-undef */
module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: 'default'
    },
    '@fullhuman/postcss-purgecss': {
      mode: 'all',
      content: ['./hugo_stats.json'],
      dynamicAttributes: [
        'aria-current', 
        'data-anim', 
        'href', 
        'role', 
        'type'
      ],
      safelist: {
        standard: [
          'show',
          'fade',
          /-backdrop$/,
          /^is-/,
          /^has-/,
          /^js-/
        ]
      },
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.classes);
      }
    }
  }
};
