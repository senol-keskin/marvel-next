import MD5 from 'crypto-js/md5'

export const generateMD5Hash = () => {
	const ts = new Date().getTime()
	return MD5(ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY).toString()
}
