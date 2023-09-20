export const asd = (a = 'es6 default') => {
  const pars = document.querySelector('p')

  console.log(a)

  if (pars) {
    pars.style.transform = 'rotate(90deg) translateX(100px)'
    pars.style.display = 'inline-block'
  }
}
