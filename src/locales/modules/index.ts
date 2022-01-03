const config = import.meta.globEager('./**.ts')

let messages: any = {}
messages = {}
console.log(config)
Object.keys(config).forEach((key) => {
	const name: any = key.match(/^\.\/([\s\S]+)\/([\s\S]+)\.ts$/)
	const keyName = name[1]
	const valueName = name[2]
	const value = config[key].default || {}
	if (!messages[keyName]) {
		messages[keyName] = {}
		messages[keyName][valueName] = value
	} else {
		messages[keyName][valueName] = value
	}
})
console.log(messages)
export default messages
