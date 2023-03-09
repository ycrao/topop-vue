import { URLSearchParams } from 'url'


const parseQuery = (searchStr: string) => {
  return new URLSearchParams(searchStr)
}



export {
  parseQuery
}
