import 'tailwindcss/tailwind.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import faEnvelope from '@fortawesome/free-solid-svg-icons/faEnvelope';
import faPhone from '@fortawesome/free-solid-svg-icons/faPhone';
import faAt from '@fortawesome/free-solid-svg-icons/faAt';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Alpine from 'alpinejs';
import axios from 'axios';
import moment from 'moment';
import variables from './variables';

library.add(faEnvelope, faPhone, faAt, faGithub);
dom.watch();

window.Alpine = Alpine;
window.axios = axios;
window.moment = moment;

/* Object.keys(variables).forEach((key) => {
  Alpine.data(key, () => (variables[key]));
}); */
Alpine.data('variables', () => variables);

// eslint-disable-next-line no-console
console.log(`
  As u can see, i make this cv using tailwind & alpine as core program.\n

  I am only used custom css to add (.) point suffix inside list element LOL.
`);


/* axios.get('/partials/head.html').then((response) => {
  console.log(response);
});
 */

Alpine.start();
