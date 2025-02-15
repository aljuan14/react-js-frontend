import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from "./components/UserList";
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="add" element={<AddUser />}></Route>
        <Route path="edit/:id" element={<EditUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
