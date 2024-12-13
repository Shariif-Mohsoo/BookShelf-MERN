import ReactDOM from 'react-dom/client';
import {BrowserRouter} from'react-router-dom';

import './index.css';
import App from "./App";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
<BrowserRouter>
<App />
</BrowserRouter>
);
