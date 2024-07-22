/**
 * @interface User
 * @description Represents a user
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
 * @interface APIUser
 * @description Represents a user
 */
export interface APIUser {
	gender: string;
	name: {
	  title: string;
	  first: string;
	  last: string;
	};
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
	email: string;
	login: {
	  uuid: string;
	  username: string;
	  password: string;
	  salt: string;
	  md5: string;
	  sha1: string;
	  sha256: string;
	};
	dob: {
	  date: string;
	  age: number;
	};
	registered: {
	  date: string;
	  age: number;
	};
	phone: string;
	cell: string;
	id: {
	  name: string;
	  value: string | null;
	};
	picture: {
	  large: string;
	  medium: string;
	  thumbnail: string;
	};
	nat: string;
  }
