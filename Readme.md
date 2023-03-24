//useQuery Provides:
1. data,
2. isError,
3. error,
4. isLoading,
5. isFetching,
6. isFetched,
7. isSuccess,
8. isStale,
9. isPaused,
10. status,
11. failureCount,
12. failureReason,
13. refetch,
14. isPlaceholderData,
15. isPreviousData,
16. isInitialLoading etc.

//query cache
- default cache time- 5 minutes
- stores as key: query key, identifier: fetcher func

//third arguments on useQuery:
{
    cacheTime: number //default is 5 minutes               ---- cache

    staleTime: number // default is 0 minutes              ---- stale

    refetchOnMount: bool or string // default is true,
     allows use of "always"                                --- default

    refetchOnWindowFocus: bool // default is true          ---- default 

    refetchInterval: number //default is false             ---- polling

    refetchIntervalInBackground: bool //default is false   ---- polling
}

userEvents
// enabled => false //not allowing fetching on mount then use refetch()

selectors in tanstack reactQuery