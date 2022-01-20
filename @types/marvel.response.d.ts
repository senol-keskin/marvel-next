type GetCharsResponse = {
	data: {
		count: number
		limit: number
		offset: number
		results: {
			id: string | number
			name: string
			description: string
			modified: Date['toLocaleDateString']
			thumbnail: {
				path: string
				extension: 'jpg' | 'png'
			}
			resourceURI: string
			comics: {
				available: number
				collectionURI: string
				items: {
					resourceURI: string
					name: string
				}[]
				returned: number
			}
			series: {
				available: number
				collectionURI: string
				items: {
					resourceURI: string
					name: string
				}[]
				returned: number
			}
			stories: {
				available: number
				collectionURI: string
				items: 
					{
						resourceURI: string
						name: string
						type: string
					}[]
				
				returned: number
			}
			events: {
				available: number
				collectionURI: string
				items: {
					resourceURI: string
					name: string
				}[]

				returned: number
			}
			urls: {
				type: string
				url: string
			}[]
		}[]
	}
}
