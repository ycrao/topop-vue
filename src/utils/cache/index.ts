import Cookies from 'js-cookie'

interface ICache {
  get: (sKey: string) => string|null|undefined,
  set: (sKey: string, sData: any) => void
  remove: (sKey: string) => void
}

class CookieCache implements ICache {
  get(sKey: string) {
    return Cookies.get(sKey)
  }

  set(sKey: string, sData: string) {
    return Cookies.set(sKey, sData, {})
  }

  remove(sKey: string) {
    return Cookies.remove(sKey, {})
  }

}

class LocalStorageCache implements ICache {
  get(sKey: string) {
    return localStorage.getItem(sKey)
  }

  set(sKey: string, sData: string) {
    return localStorage.setItem(sKey, sData)
  }

  remove(sKey: string) {
    return localStorage.removeItem(sKey)
  }
}

export {
  CookieCache,
  LocalStorageCache,
}
