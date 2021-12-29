const config = import.meta.globEager('./**.ts')

let messages: any = {}
messages = {}
Object.keys(config).forEach((key) => {
	const name: any = key.match(/^\.\/([\s\S]+)\/([\s\S]+)\.ts$/)
	const keyName = name[1]
	const valueName = name[2]
	const value: any = {}
	value[`${valueName}`] = config[key].default
	messages[keyName] = value
})

export default messages
