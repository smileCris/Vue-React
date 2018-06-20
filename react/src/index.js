import React from 'react';
import ReactDOM from 'react-dom';
import App from './router';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./router', () => {
        const NextApp = require('./router').default
        ReactDOM.render(
            <NextApp />,
            document.getElementById('root')
        )
    })
}
