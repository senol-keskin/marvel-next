import type { UseInfiniteQueryResult, UseInfiniteQueryOptions } from 'react-query'

import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

type UseGetCharParams = (
	//	offset: number,
	options?: UseInfiniteQueryOptions<GetCharsResponse, null, GetCharsResponse>,
) => UseInfiniteQueryResult<GetCharsResponse>

export const useGetChars: UseGetCharParams = (options) => {
	return useInfiniteQuery<GetCharsResponse, null, GetCharsResponse>(
		['charlist'],
		async ({ pageParam = 0 }) => {
			console.log(pageParam)
			const response = await axios.get('/api/get-chars', {
				params: {
					offset: pageParam,
					limit: 30,
				},
			})

			return response.data
		},
		options,
	)
}
