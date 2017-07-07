import getters from './getters'

const state={
  header:true,
  footer:true
}
const mutations={
  showHeader(state){
    state.header=true
  },
  hideHeader(state){
    state.header=false
  },
  showFooter(state){
    state.footer=true
  },
  hideFooter(state){
    state.footer=false
  }
}
export default {
  state,
  mutations,
  getters
}