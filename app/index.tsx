import { registerRootComponent } from 'expo';
import App from './(tabs)/App';

// Esta función asegura que la app se registre correctamente
// tanto en Expo Go como en build nativo
registerRootComponent(App);