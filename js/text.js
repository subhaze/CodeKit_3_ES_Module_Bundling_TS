export const upper = (text='') => text.toUpperCase();
export const title = (text='') => text
	.toLowerCase()
	.split(' ')
	.map( s => `${s[0].toUpperCase()}${s.slice(1)}`)
	.join(' ');