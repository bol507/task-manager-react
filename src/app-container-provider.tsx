import App from "./App"
import AppRouter from "./core/routes/app-routes"


const AppContainerProvider = () => {
  return (
    <AppRouter>
      <App />
    </AppRouter>
  )
}

export default AppContainerProvider