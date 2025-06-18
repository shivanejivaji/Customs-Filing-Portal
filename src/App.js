import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { Filings } from './Filings';
import { Customers } from './Customers';
import { Help } from './Help';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/filings" element={<Filings />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
