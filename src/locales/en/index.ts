const config = import.meta.globEager('./modules/*.ts');

const messages: Recordable = {};
Object.keys(config).forEach((key) => {
  const name: RegExpMatchArray = key.match(/^\.\/([\s\S]+)\/([\s\S]+)\.ts$/) || [];
  const valueName = name[2];
  const value = config[key].default || {};
  messages[valueName] = value;
});

export const name = 'English';

export default messages;
