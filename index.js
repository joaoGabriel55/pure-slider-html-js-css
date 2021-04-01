const inputLeft = document.getElementById("input-left");
const inputRight = document.getElementById("input-right");
const minValue = document.getElementById("min-value");
const maxValue = document.getElementById("max-value");

const thumbLeft = document.querySelector(".slider > .thumb.left");
const thumbRight = document.querySelector(".slider > .thumb.right");
const range = document.querySelector(".slider > .range");


const setLeftValue = () => {
  const _this = inputLeft
  const min = parseInt(_this.min)
  const max = parseInt(_this.max)
  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1)

  minValue.innerHTML = _this.value

  const percent = ((_this.value - min) / (max - min)) * 100
  thumbLeft.style.left = `${percent-5}%`
  range.style.left = `${percent-5}%`
}
setLeftValue()

const setRightValue = () => {
  const _this = inputRight
  const min = parseInt(_this.min)
  const max = parseInt(_this.max)
  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1)

  maxValue.innerHTML = _this.value

  const percent = ((_this.value - min) / (max - min)) * 100;
  thumbRight.style.right = `${(100 - percent)}%`
  range.style.right = `${(100 - percent)}%`
}
setRightValue()

inputLeft.addEventListener('input', setLeftValue)
inputRight.addEventListener('input', setRightValue)

inputLeft.addEventListener('mouseover', () => {
  // thumbLeft.classList.add("hover")
})

inputLeft.addEventListener('mouseout', () => {
  // thumbLeft.classList.remove("hover")
})

inputLeft.addEventListener('mousedown', () => {
  // thumbLeft.classList.add("active")
})

inputLeft.addEventListener('mouseup', () => {
  thumbLeft.classList.remove("active")
})

inputRight.addEventListener('mouseover', () => {
  // thumbRight.classList.add("hover")
})

inputRight.addEventListener('mouseout', () => {
  // thumbRight.classList.remove("hover")
})

inputRight.addEventListener('mousedown', () => {
  // thumbRight.classList.add("active")
})

inputRight.addEventListener('mouseup', () => {
  // thumbRight.classList.remove("active")
})




