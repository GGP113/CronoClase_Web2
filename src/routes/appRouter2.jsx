import App from '../App'
import FormularioEstudiante from '../pages/FormularioEstudiante'
import { FormularioProfesor } from '../pages/FormularioProfesor'
import { InicioSesion } from '../pages/InicioSesion'
import { PanelCargaActividades } from '../pages/PanelCargaActividades'
import { PanelProfesor } from '../pages/PanelProfesor'

export const appRouter2 = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/formulario-estudiante",
        element: <FormularioEstudiante />
    },
    {
        path: "/formulario-profesor",
        element: <FormularioProfesor />
    },
    {
        path: "/inicio-sesion",
        element: <InicioSesion />
    },
    {
        path: "/panel-carga-actividades",
        element: <PanelCargaActividades />
    },
    {
        path: "/panel-profesor",
        element: <PanelProfesor />
    }
]