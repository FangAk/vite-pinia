import { defineStore } from 'pinia'
export const useDate = defineStore({
    id: 'data',
    state: () => ({
        list: [],
    }),
})