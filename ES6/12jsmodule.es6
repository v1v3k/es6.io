//*********************//*********************//*********************//*********************

// Named Export
export const apiKey = 'abc123';

export const url = 'http://wesbos.com';

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'snickers';

export { age as old, dog };


//*********************//*********************//*********************//*********************

import slug from 'slug';
import { url } from './config';
import md5 from 'md5';

export default function User(name, email, website) {
  return { name, email, website };
}

export function createURL(name) {
  return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
  const hash = md5(email.toLowerCase());
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
  return photoURL;
}
