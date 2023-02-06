import { defineStore } from 'pinia'
export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: 'John Doe',
    })
    ,
    persist: {
        enabled: true
    }
})