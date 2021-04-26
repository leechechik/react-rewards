const PI = Math.PI
const defaultColors = [
  '#A45BF1',
  '#25C6F6',
  '#72F753',
  '#F76C88',
  '#F5F770'
]

const createElements = (root, elementCount, elementSize, zIndex, colors) => (
  Array
    .from({ length: elementCount })
    .map((_, index) => {
      const jbs = '<title>JB-logo</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M25.933038,14.3238275 C25.7387042,16.4537105 23.8943659,18.0994463 21.7585268,18.0994463 C19.4292706,18.0994463 17.5849323,16.1637692 17.5849323,13.8405921 L17.5849323,13.6472979 C17.1962646,13.5497391 16.3226789,13.453092 15.5462601,13.6472979 L15.5462601,13.8405921 C15.5462601,16.1637692 13.7019218,18.0994463 11.3717489,18.0994463 C9.23682651,18.0994463 7.39157155,16.4537105 7.19815436,14.3238275 C7.19815436,14.3238275 6.80948665,14.2280922 6.80948665,13.8405921 C6.80948665,13.453092 7.19815436,13.3555332 7.19815436,13.3555332 C7.39157155,11.2274737 9.23682651,9.58173798 11.3717489,9.58173798 C13.4104211,9.58173798 15.0613422,10.9366207 15.4490932,12.7756506 C16.3226789,12.5823565 16.9047638,12.5823565 17.6820992,12.7756506 C18.1670172,10.9366207 19.8179383,9.58173798 21.7585268,9.58173798 C23.8943659,9.58173798 25.7387042,11.2274737 25.933038,13.3555332 C25.933038,13.3555332 26.3217058,13.453092 26.3217058,13.8405921 C26.3217058,14.3238275 25.933038,14.3238275 25.933038,14.3238275 M17.9726833,18.2927404 C18.2641841,18.2927404 18.5556849,18.4860346 18.5556849,18.9701818 C18.6528518,20.5183587 17.5849323,21.099153 16.5170127,21.099153 C15.4490932,21.099153 14.3811737,20.4207998 14.3811737,18.9701818 C14.3811737,18.6793288 14.4783406,18.5826817 14.5755075,18.4860346 C14.6726745,18.3893875 14.8670083,18.2927404 14.9641752,18.2927404 C15.2547593,18.2927404 15.5462601,18.4860346 15.5462601,18.9701818 C15.5462601,19.2601231 15.6434271,19.454329 15.8377609,19.6476232 C16.0311781,19.7442702 16.225512,19.8409173 16.4198458,19.8409173 C16.9047638,19.8409173 17.3905984,19.5500643 17.3905984,18.9701818 C17.3905984,18.5826817 17.6820992,18.2927404 17.9726833,18.2927404 Z M11.3720239,10.9367119 C13.0220283,10.9367119 14.2842817,12.2915946 14.2842817,13.9373304 C14.2842817,15.5830661 13.0220283,16.9370371 11.3720239,16.9370371 C9.72201948,16.9370371 8.45976609,15.5830661 8.45976609,13.9373304 C8.45976609,12.2915946 9.72201948,10.9367119 11.3720239,10.9367119 Z M21.7588018,10.9367119 C23.4088063,10.9367119 24.6710597,12.2915946 24.6710597,13.9373304 C24.6710597,15.5830661 23.4088063,16.9370371 21.7588018,16.9370371 C20.1087974,16.9370371 18.846544,15.5830661 18.846544,13.9373304 C18.846544,12.2915946 20.1087974,10.9367119 21.7588018,10.9367119 Z M30.7868011,17.0345048 C29.3311305,17.324446 28.166044,17.4210931 27.0981245,17.324446 L27.0981245,14.5180335 C27.0981245,8.22685525 25.2537862,0 16.5170127,0 C7.87740619,0 5.93590097,8.22685525 5.93590097,14.3238275 L5.93590097,17.0345048 C2.34439132,17.1311519 -0.85936729,18.4860346 0.208552247,20.7125646 C1.08213793,22.5506828 4.28589654,19.9375644 5.54723326,20.7125646 C7.48873848,22.0665356 3.8000619,24.1964186 2.82930929,24.970507 C1.76138975,25.7445955 1.5670559,27.0028311 2.15005746,27.6802725 C3.60664471,29.3260082 5.74156712,27.0028311 6.22648509,26.4229486 C8.45949109,23.9064773 11.274582,24.0022126 10.4009963,27.1961253 C9.81891141,29.4226553 10.3038294,30.3900379 11.0802481,30.777538 C11.9538338,31.1650382 13.8962557,31.2616852 14.0905896,29.2293611 C14.2840067,27.5836254 14.3811737,26.5195957 15.1575924,25.8421543 C16.5170127,24.679654 18.5556849,24.970507 19.1377698,26.8095369 C19.3321036,27.4878901 19.8179383,30.0034496 20.3028562,30.4875968 C21.079275,31.2616852 22.9236133,30.8741851 23.2151141,30.0034496 C23.6028651,28.841861 22.4377787,27.0028311 22.3415284,25.9378896 C22.2443615,24.0997715 23.9915328,23.8089184 24.6717013,24.970507 C26.5151229,28.0677726 29.5245477,28.841861 30.2047162,26.906184 C30.883968,25.0671541 28.0688771,24.7772128 27.2915417,22.9381829 C26.7094568,21.099153 30.1075493,21.099153 31.5632198,20.4207998 C33.8933928,19.3576819 33.2132243,16.4537105 30.7868011,17.0345048" id="JB-logo" fill="#0DD19C"></path></g>'
      const element = document.createElement('span')
      const color = colors[index % colors.length]
      element.innerHTML =  '' + '<svg>' + jbs + '</svg>';
      element.style.width = `${elementSize}px`
      element.style.height = `${elementSize}px`
      element.style.position = 'absolute'
      element.style.zIndex = zIndex
      root.appendChild(element)
      return element
    })
)

const radiansFrom = degrees => degrees * (PI / 180)

const generatePhysics = (angle, spread, startVelocity, random) => {
  const radAngle = radiansFrom(angle)
  const radSpread = radiansFrom(spread)
  return {
    x: 0,
    y: 0,
    wobble: random() * 10,
    velocity: (startVelocity * 0.5) + (random() * startVelocity),
    angle2D: -radAngle + ((0.5 * radSpread) - (random() * radSpread)),
    angle3D: -(PI / 4) + (random() * (PI / 2)),
    tiltAngle: random() * PI
  }
}

const updateFetti = (fetti, progress, decay, index) => {
  fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity
  fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity
  fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity
  fetti.physics.wobble += 0.05
  fetti.physics.velocity *= decay
  fetti.physics.y += 3.5
  fetti.physics.tiltAngle += 0.15

  const { x, y, tiltAngle, wobble } = fetti.physics
  const wobbleX = index % 2 === 0 ? x + (6 * Math.sin(wobble) + progress) : x + (12 * Math.cos(wobble) + progress)
  const wobbleY = y + (5 * Math.sin(wobble))
  const transform = `translate3d(${wobbleX}px, ${wobbleY}px, 0) rotate3d(1, 1, 1, ${tiltAngle}rad)`

  fetti.element.style.transform = transform
  fetti.element.style.scale = 1 - 0.2 * progress
  fetti.element.style.opacity = 1 - progress
}

const animate = (root, fettis, decay, lifetime) => {
  const totalTicks = lifetime
  let tick = 0

  const update = () => {
    fettis.forEach((fetti, index) => updateFetti(fetti, tick / totalTicks, decay, index))

    tick += 1
    if (tick < totalTicks) {
      window.requestAnimationFrame(update)
    } else {
      fettis.forEach((fetti) => {
        if (fetti.element.parentNode === root) {
          return root.removeChild(fetti.element)
        }
      })
    }
  }

  window.requestAnimationFrame(update)
}

const confetti = (root, {
  elementCount = 50,
  elementSize = 8,
  colors = defaultColors,
  angle = 90,
  spread = 45,
  decay = 0.9,
  lifetime = 200,
  startVelocity = 35,
  zIndex = 0,
  random = Math.random
} = {}) => {
  const elements = createElements(root, elementCount, elementSize, zIndex, colors)
  const fettis = elements.map((element) => ({
    element,
    physics: generatePhysics(angle, spread, startVelocity, random)
  }))

  animate(root, fettis, decay, lifetime)
}
export default confetti
