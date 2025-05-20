// next-intl.config.ts

const nextIntl = require('next-intl/plugin')('./src/i18n.ts');

module.exports = nextIntl({
  // басқа конфигтеріңіз (locales, defaultLocale БОЛМАУЫ керек!)
});
