export const userActions = {
  login: (state, action) => {
    state.user = action.payload
  },
  logout: (state) => {
    state.user = null
  },
}
