import type { NextApiHandler } from 'next'

import axios from 'axios'

import { generateMD5Hash } from '@helpers/generate-hash'

const handler: NextApiHandler = async (req, resp) => {
	const ts = new Date().getTime()
	const hash = generateMD5Hash()

	const { offset, limit } = req.query

	try {
		const marvelRequest = await axios.get('https://gateway.marvel.com/v1/public/characters', {
			params: {
				apikey: process.env.MARVEL_PUBLIC_KEY,
				hash,
				ts,
				offset,
				limit,
			},
		})

		resp.status(200).send(marvelRequest.data)
	} catch (error) {
		resp.status(500).send(error)
	}
}

export default handler
