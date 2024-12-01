import { api } from './api'

export const wordsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getWords: builder.query({
			query: () => ({
				url: '/words',
				method: 'GET',
			}),
		})
	}),
})