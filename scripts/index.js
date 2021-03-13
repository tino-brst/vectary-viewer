import { VctrApi } from 'https://www.vectary.com/viewer-api/v1/api.js'
import { logError, getRandomColor } from './utils.js'

main()

async function main() {
  const viewer = new VctrApi('vectary-viewer', logError)
  await viewer.init()

  viewer.enableAnnotations(true)

  const rocketCamera = await viewer.getCameraByName('RocketCamera')
  const backCamera = await viewer.getCameraByName('BackCamera')
  const rocket = await viewer.getObjectByName('Rocket')
  const largeAsteroid = await viewer.getObjectByName('Asteroid_Large_1')

  const annotation = await viewer.addAnnotation({
    name: 'Rocket',
    text: 'Extremely vital and informative annotation',
    objectName: rocket.name,
  })
  let isAnnotationExpanded = false

  const switchToRocketViewButton = document.getElementById('switch-view-rocket')
  const switchToBackViewButton = document.getElementById('switch-view-back')
  const changeMaterialColorButton = document.getElementById('change-material-color')
  const toggleAnnotationButton = document.getElementById('toggle-annotation')

  switchToRocketViewButton.addEventListener('click', () => {
    viewer.switchView(rocketCamera.name)
  })

  switchToBackViewButton.addEventListener('click', () => {
    viewer.switchView(backCamera.name)
  })

  changeMaterialColorButton.addEventListener('click', () => {
    viewer.updateMaterial(largeAsteroid.material, { color: getRandomColor() })
  })

  toggleAnnotationButton.addEventListener('click', () => {
    isAnnotationExpanded = !isAnnotationExpanded
    viewer.expandAnnotationsById([annotation.id], isAnnotationExpanded, false)
  })
}
