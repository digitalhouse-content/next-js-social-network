export type StrapiPaginationType = {
    "pageCount": number,
    "total": number,
    "page": number,
    "pageSize": number
}

export type StrapiResultType<T> = {
    "data": T[],
    "meta": {
        pagination: StrapiPaginationType
    }
}