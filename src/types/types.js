export {};
/**
 * Интерфейс для данных пользователя.
 * @interface User
 * @typedef {Object} User
 * @property {Object} name Имя пользователя.
 * @property {string} name.first
 * @property {string} name.last
 * @property {Object} picture Фото пользователя.
 * @property {string} picture.large
 * @property {string} email Email пользователя.
 */
/**
 * Интерфейс для данных, возвращаемых API.
 * @interface APIUser
 * @typedef {Object} APIUser
 * @property {string} gender
 * @property {Object} name
 * @property {string} name.title
 * @property {string} name.first
 * @property {string} name.last
 * @property {Object} location
 * @property {Object} location.street
 * @property {number} location.street.number
 * @property {string} location.street.name
 * @property {string} location.city
 * @property {string} location.state
 * @property {string} location.country
 * @property {number} location.postcode
 * @property {Object} location.coordinates
 * @property {string} location.coordinates.latitude
 * @property {string} location.coordinates.longitude
 * @property {Object} location.timezone
 * @property {string} location.timezone.offset
 * @property {string} location.timezone.description
 * @property {string} email
 * @property {Object} login
 * @property {string} login.uuid
 * @property {string} login.username
 * @property {string} login.password
 * @property {string} login.salt
 * @property {string} login.md5
 * @property {string} login.sha1
 * @property {string} login.sha256
 * @property {Object} dob
 * @property {string} dob.date
 * @property {number} dob.age
 * @property {Object} registered
 * @property {string} registered.date
 * @property {number} registered.age
 * @property {string} phone
 * @property {string} cell
 * @property {Object} id
 * @property {string} id.name
 * @property {string | null} id.value
 * @property {Object} picture
 * @property {string} picture.large
 * @property {string} picture.medium
 * @property {string} picture.thumbnail
 * @property {string} nat
 */
