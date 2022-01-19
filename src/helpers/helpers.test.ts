import { generateMD5Hash } from './generate-hash'
import { generateMarvelImageUrl } from './generate-image-url'

test('should generate hash properly', () => {
	const hash = generateMD5Hash()
	expect(hash.length).toBeGreaterThanOrEqual(30)
	expect(typeof hash).toBe('string')
})

test('should generate image url', () => {
	const result = generateMarvelImageUrl({
		path: 'http://image.cdn',
		extension: 'jpg',
	})

	expect(result).toEqual('http://image.cdn.jpg')
})
