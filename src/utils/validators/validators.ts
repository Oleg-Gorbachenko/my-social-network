export const required = (value: string | number) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: Array<number>) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}

export const minLengthCreator = (minLength: number) => (value: Array<number>) => {
    if (value.length <= minLength) return 'Need more symbols'
    return undefined
}