import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import AxiosAdapter from './adapters/AxiosAdapter';
import QueryStringAdpter from './adapters/QueryStringAdapter';
import router from './routes';
import Services from './services/Services';

const httpClient: AxiosAdapter = new AxiosAdapter();
const baseURL: string = 'https://pokeapi.co/api/v2/';
const queryString: QueryStringAdpter = new QueryStringAdpter();
const services: Services = new Services(httpClient, baseURL, queryString);

const app = createApp(App);
app.provide("services", services);
app.use(router)
app.mount('#app');
