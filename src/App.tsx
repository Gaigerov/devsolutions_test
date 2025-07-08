import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import './index.scss';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/results" element={<ResultsPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;