export const delay = (ms = 1000) : Promise<unknown> => new Promise((resolve) => {
  setTimeout(resolve, ms);
})

export const tempoParaSegundos = (defaultTime: string) : number => {
  const [hourString = '0', minuteString = '0', secondString = '0'] = defaultTime.split(':')
  const timeSeconds = (parseInt(hourString) * 3600) + (parseInt(minuteString) * 60) + parseInt(secondString)
  return timeSeconds
}