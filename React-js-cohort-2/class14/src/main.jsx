import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostContext from './components/PostContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<PostContext>
    <App />
</PostContext>
)
