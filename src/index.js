import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// non-js-code works, as behind the scenes it is transformed before delivered to the browser (e.g. <App />)
ReactDOM.render(<App />, document.getElementById('root'));
