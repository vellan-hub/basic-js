import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let name = [];
  if (members !== null && members !== undefined) {
		for (let i = 0; i < members.length; i ++) {
			if (typeof(members[i]) === 'string') {
				name.push(members[i].trim().toUpperCase().split('', 1));
			}
		}
	name.sort();
  return name.join('');
} else {
  return false;
}
}
