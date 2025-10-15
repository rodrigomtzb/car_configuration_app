import { Platform } from 'react-native';
import { create } from 'zustand';

export type CarModel = {
  id: string;
  name: string;
  model: string; // ruta al archivo .glb
  colors: string[];
  interiors: string[];
  occupants: number[];
};

type State = {
  selectedModel: CarModel | null;
  color: string | null;
  interior: string | null;
  occupants: number | null;
  setModel: (m: CarModel) => void;
  setColor: (c: string) => void;
  setInterior: (i: string) => void;
  setOccupants: (n: number) => void;
  reset: () => void;
};

export const useCarStore = create<State>((set) => ({
  selectedModel: null,
  color: null,
  interior: null,
  occupants: null,

  setModel: (model) => {
    // ✅ Normalizar ruta del modelo (importante en React Native)
    const normalizedModel = normalizeModelPath(model.model);

    set({
      selectedModel: { ...model, model: normalizedModel },
      color: model.colors?.[0] ?? null,
      interior: model.interiors?.[0] ?? null,
      occupants: model.occupants?.[0] ?? null,
    });
  },

  setColor: (color) => set({ color }),
  setInterior: (interior) => set({ interior }),
  setOccupants: (n) => set({ occupants: n }),

  reset: () =>
    set({
      selectedModel: null,
      color: null,
      interior: null,
      occupants: null,
    }),
}));

// 🔧 Función auxiliar para normalizar rutas .glb
function normalizeModelPath(path: string): string {
  if (!path) return '';

  // Si la ruta es relativa, ajustarla a un formato válido para el runtime
  if (path.startsWith('./') || path.startsWith('../')) {
    // Si usas bundler de React Native (Metro), necesitas usar `require()` en vez de path literal.
    // Pero en casos dinámicos (como carga 3D por WebView o GLView), basta con mantener la ruta relativa.
    return Platform.OS === 'web' ? path.replace(/^(\.\/)+/, '/assets/') : path;
  }

  // Si ya es absoluta o remota (por ejemplo, URL HTTP)
  return path;
}