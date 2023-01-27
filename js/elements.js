// Variáveis
const btnPlay = document.getElementById("play")
const btnStop = document.querySelector(".stop")
const btnReset = document.querySelector(".reset")
const btnAddTime = document.querySelector(".add-time")
const btnReduceTime = document.querySelector(".reduce-time")
const lightMode = document.querySelector('.lightModeOn')
const darkMode = document.querySelector('.lightModeOff')

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const forestSoundVolume = document.querySelector('#volume-forest')
const rainSoundVolume = document.querySelector('#volume-rain')
const commerceSoundVolume = document.querySelector('#volume-commerce')
const bonfireSoundVolume = document.querySelector("#volume-bonfire")

export {
  btnPlay,
  btnStop,
  btnReset,
  btnAddTime,
  btnReduceTime,
  minutesDisplay,
  secondsDisplay,
  darkMode,
  lightMode,
  forestSoundVolume,
  rainSoundVolume,
  commerceSoundVolume,
  bonfireSoundVolume
}
