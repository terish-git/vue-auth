
        const state = {
            user: null,
        }
        const getters = {
            user: (state) => {
                return state.user;
            }
        }
        const actions = {
            // async fetchSearchResult ({ commit }, searchItem) {
                 
            //     const res = await Vue.axios.get('user')
            //     const results = res.data.hits
            //     commit('updateSearchResults', results)
            // },
            // async fetchSearchItem ({ commit }, item) {
            //     commit('updateSearchItem', item)
            // }

            user(context, user) {
                context.commit('user', user);
            }
        }
        const mutations = {
            // updateSearchResults: (state, results) => {
            //     state.searchResults = results
            // },
            // updateSearchItem: (state, item) => {
            //     state.searchParam = item
            // }
            user(state, user) {
                state.user = user;
            }
        }
        export default {
            state,
            getters,
            actions,
            mutations
        }