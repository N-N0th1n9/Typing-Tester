import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { RootState } from '..'

const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('authentication', `Bearer ${token}`)
    }
    return headers
  },
})

export const api = createApi({
	baseQuery: baseQuery,
	tagTypes: ['Words'],
	endpoints: () => ({}),
})
