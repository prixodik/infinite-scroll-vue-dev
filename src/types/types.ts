/**
 * Интерфейс объекта пользователя.
 * @interface User
 */
export interface User {
  /**
   * Имя пользователя.
   * @type {Object}
   * @property {string} first - Имя.
   * @property {string} last - Фамилия.
   */
  name: {
    first: string;
    last: string;
  };
  /**
   * Фото пользователя.
   * @type {Object}
   * @property {string} large - URL большого фото.
   */
  picture: {
    large: string;
  };
  /**
   * Email пользователя.
   * @type {string}
   */
  email: string;
}

/**
 * Представляет пользователя API.
 * @interface APIUser
 */
export interface APIUser {
  /**
   * Пол пользователя.
   * @type {string}
   */
  gender: string;
  /**
   * Имя пользователя.
   * @type {Object}
   * @property {string} title - Заголовок.
   * @property {string} first - Имя.
   * @property {string} last - Фамилия.
   */
  name: {
    title: string;
    first: string;
    last: string;
  };
  /**
   * Местоположение пользователя.
   * @type {Object}
   * @property {Object} street - Улица.
   * @property {number} street.number - Номер дома.
   * @property {string} street.name - Название улицы.
   * @property {string} city - Город.
   * @property {string} state - Штат.
   * @property {string} country - Страна.
   * @property {number} postcode - Почтовый индекс.
   * @property {Object} coordinates - Координаты.
   * @property {string} coordinates.latitude - Широта.
   * @property {string} coordinates.longitude - Долгота.
   * @property {Object} timezone - Часовой пояс.
   * @property {string} timezone.offset - Смещение.
   * @property {string} timezone.description - Описание.
   */
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  /**
   * Email пользователя.
   * @type {string}
   */
  email: string;
  /**
   * Данные для входа пользователя.
   * @type {Object}
   * @property {string} uuid - UUID.
   * @property {string} username - Имя пользователя.
   * @property {string} password - Пароль.
   * @property {string} salt - Соль.
   * @property {string} md5 - MD5 хэш.
   * @property {string} sha1 - SHA-1 хэш.
   * @property {string} sha256 - SHA-256 хэш.
   */
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  /**
   * Дата рождения пользователя.
   * @type {Object}
   * @property {string} date - Дата.
   * @property {number} age - Возраст.
   */
  dob: {
    date: string;
    age: number;
  };
  /**
   * Дата регистрации пользователя.
   * @type {Object}
   * @property {string} date - Дата.
   * @property {number} age - Возраст на момент регистрации.
   */
  registered: {
    date: string;
    age: number;
  };
  /**
   * Телефон пользователя.
   * @type {string}
   */
  phone: string;
  /**
   * Мобильный телефон пользователя.
   * @type {string}
   */
  cell: string;
  /**
   * Идентификатор пользователя.
   * @type {Object}
   * @property {string} name - Имя.
   * @property {string|null} value - Значение.
   */
  id: {
    name: string;
    value: string | null;
  };
  /**
   * Фото пользователя.
   * @type {Object}
   * @property {string} large - URL большого фото.
   * @property {string} medium - URL среднего фото.
   * @property {string} thumbnail - URL миниатюры.
   */
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  /**
   * Национальность пользователя.
   * @type {string}
   */
  nat: string;
}
