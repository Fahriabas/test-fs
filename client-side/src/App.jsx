
import { RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import router from './routes'
import store from './stores';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App(){
  return (
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
