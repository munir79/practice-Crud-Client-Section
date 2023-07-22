
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddUsers from './Components/AddUsers';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/users/add',
      element:<AddUsers></AddUsers>
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
