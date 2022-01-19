export const generateMarvelImageUrl = ({
	path,
	extension,
}: GetCharsResponse['data']['results'][0]['thumbnail']): string => `${path}.${extension}`
