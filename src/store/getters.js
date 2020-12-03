const getters = {
  sidebar: state => state.app.sidebar,
  groupbar: state => state.app.groupbar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  user_name: state => state.user.user_name,
  user_id: state => state.user.user_id,
  abbr_name: state => state.user.abbr_name,
  langs: state => state.langs.availableLangs,
  timezone: state => state.user.timezone,
  preference: state => state.user.preferences
}


export default getters
