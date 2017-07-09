import getters from './getters'

const state={
  header:true,
  footer:true,
  center:true,
  payment:true,
  edit:true
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
  },
  showCenter(state){
    state.center=true
  },
  hideCenter(state){
    state.center=false
  },
  showPayment(state){
    state.payment=true
  },
  hidePayment(state){
    state.payment=false
  },
  showEdit(state){
    state.edit=true
  },
  hideEdit(state){
    state.edit=false
  }
}
export default {
  state,
  mutations,
  getters
}