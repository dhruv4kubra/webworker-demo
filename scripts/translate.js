/* eslint-disable */
const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const globSync = glob.sync;
const mkdirpSync = mkdirp.sync;
const MESSAGES_PATTERN = './build/messages/**/*.json';
const LANG_DIR = './build/lang/';
const SRC_DIR = './src/translations/';

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
const defaultMessages = globSync(MESSAGES_PATTERN)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }

      collection[id] = defaultMessage;
    });

    return collection;
  }, {});

mkdirpSync(SRC_DIR);
// fs.writeFileSync(`${LANG_DIR}en-US.json`, JSON.stringify(defaultMessages, null, 2));
fs.writeFileSync(`${SRC_DIR}en-US.json`, JSON.stringify(defaultMessages, null, 2));