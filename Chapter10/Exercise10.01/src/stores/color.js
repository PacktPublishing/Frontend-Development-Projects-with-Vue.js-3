import { defineStore } from 'pinia'

export const useColorStore = defineStore({
  id: 'color',
  state: () => ({
    red: 0, 
    blue: 0, 
    green: 0
  })
})
