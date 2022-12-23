/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import "tailwindcss/tailwind.css";

import './index.css';
import App from './App';

/**
 * Entry Point
 */

render(
    () => (
        <Router>
          <App />
        </Router>
    ), 
    document.getElementById('root') as HTMLElement
);
