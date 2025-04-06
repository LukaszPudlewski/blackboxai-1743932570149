import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
  const { nodes, materials } = useGLTF('/owl.glb')
  return (
    <group {...props} dispose={null}>
      <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} rotation={[Math.PI /-1, 5, 2]} />
    </group>
    </group>
  )
}

useGLTF.preload('/owl.glb')
