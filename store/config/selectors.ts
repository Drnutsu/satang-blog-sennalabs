import get from 'lodash/get'

export const config = (state: any) => get(state, 'config', {})

export const currency = (state: any) => get(state, 'config.currency', {})

export const language = (state: any) => get(state, 'config.language', {})

