export const UserModule = {
    namespaced: true,

    state: {
        user: null
      },
    
      // mutations are functions that change/effect the STATE
      mutations: {
    
        SET_USER(state, user) {
          state.user = user;
        }
    
      },
    
      //actions are functions that you call throughout your application that call mutation
      actions: {
    
        setUser({commit}, user){
          commit('SET_USER', user);
        }
      },
        
}