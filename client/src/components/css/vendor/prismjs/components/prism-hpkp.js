/**
 * Original by Scott Helme.
 *
 * Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/
 */

Prism.languages.hpkp = {
  'directive': {
    pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
    alias: 'keyword'
  },
  'safe': {
    pattern: /\d{7,}/,
    alias: 'selector'
  },
  'unsafe': {
    pattern: /\d{1,6}/,
    alias: 'function'
  }
};
