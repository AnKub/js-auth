class User {
  static USER_ROLE = {
    USER: 1,
    ADMIN: 2,
    DEVELOPER: 3,
  }
  static #list = []

  constructor({ email, password, role }) {
    this.email = email
    this.password = password
    this.role = role
  }
  static #coverRole = (role) => {}
}

module.exports = {
  User,
}
