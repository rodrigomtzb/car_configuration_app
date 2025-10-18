/*import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { EngineView, useEngine, SceneLoader, ArcRotateCamera, Vector3, Color3, HemisphericLight, MeshBuilder, PBRMaterial } from '@babylonjs/react-native';
import { Asset } from 'expo-asset';

export default function CarViewer3D({ modelSource, color = '#FFFFFF', autoRotate = false }: any) {
  const engine = useEngine();
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    let scene: any = null;
    let camera: any = null;

    const setup = async () => {
      if (!engine) return;
      scene = await engine.createScene();
      sceneRef.current = scene;

      const light = new HemisphericLight('hemi', new Vector3(0, 1, 0), scene);
      light.intensity = 0.9;

      camera = new ArcRotateCamera('arc', Math.PI / 2, Math.PI / 3, 5, Vector3.Zero(), scene);
      camera.attachControl(true);

      try {
        let modelUrl = modelSource;
        if (typeof modelSource === 'number') {
          const asset = Asset.fromModule(modelSource);
          await asset.downloadAsync();
          modelUrl = asset.localUri || asset.uri;
        }

        await SceneLoader.AppendAsync('', modelUrl, scene);

        scene.meshes.forEach((mesh: any) => {
          if (mesh.material && mesh.material.albedoColor) {
            try {
              mesh.material.albedoColor = Color3.FromHexString ? Color3.FromHexString(color) : new Color3(1,1,1);
            } catch (e) {}
          }
        });

        setSceneLoaded(true);
      } catch (err) {
        console.warn('Error loading model', err);
        const box = MeshBuilder.CreateBox('box', { size: 1 }, scene);
        const mat = new PBRMaterial('mat', scene);
        mat.albedoColor = Color3.FromHexString ? Color3.FromHexString(color) : new Color3(1,1,1);
        box.material = mat;
        setSceneLoaded(true);
      }

      if (autoRotate && camera) {
        scene.registerBeforeRender(() => {
          camera.alpha += 0.005;
        });
      }
    };

    setup();

    return () => {
      if (scene) scene.delete();
    };
  }, [engine, modelSource]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    try {
      scene.meshes.forEach((mesh: any) => {
        if (mesh.material && mesh.material.albedoColor) {
          mesh.material.albedoColor = Color3.FromHexString ? Color3.FromHexString(color) : new Color3(1,1,1);
        }
      });
    } catch (e) {}
  }, [color]);

  return (
    <View style={{ flex: 1, backgroundColor: 'transparent', borderRadius: 12, overflow: 'hidden' }}>
      {!sceneLoaded && <ActivityIndicator size="large" style={{ position: 'absolute', top: '45%', left: '45%' }} />}
      <EngineView style={{ flex: 1 }} />
    </View>
  );
}
*/