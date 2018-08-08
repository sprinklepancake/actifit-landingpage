export default {
  user (state) {
    return state.user
  },
  userTokens (state) {
    return state.userTokens
  },
  transactions (state) {
    return state.transactions
  },
  userCount (state) {
    return state.userCount
  },
  tokensDistributed (state) {
    return state.tokensDistributed
  },
  rewardedActivityCount (state) {
    return state.rewardedActivityCount
  },
  leaderboard (state) {
    return state.leaderboard
  },
  reports (state) {
    return state.reports
  },
  moreReportsAvailable (state) {
    return state.moreReportsAvailable
  },
  userReports (state) {
    return state.userReports
  },
  moreUserReportsAvailable (state) {
    return state.moreUserReportsAvailable
  }
}