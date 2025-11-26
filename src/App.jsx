
import { Route, Routes } from 'react-router-dom';


import AdminAuth from './admin/pages/Auth/AdminAuth';

function App() {
  return (
    <div className="App">

      
      <Routes>
        <Route
          path="/admin-login"
          element={<AdminAuth />}
        />
        <Route path="/admin"
         element={<h1>Admin Dashboard Page</h1>} />

      </Routes>

    </div>
  );
}

export default App;
