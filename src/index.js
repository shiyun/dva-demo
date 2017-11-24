import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
// import ReactDOM from 'react-dom';
import { message } from 'antd';
// import { config } from 'utils';

const browserHistory = createHistory();

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.error(e.message, 3);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
const App = app.start('#root');
// ReactDOM.render(<App />, document.getElementById('root'));
