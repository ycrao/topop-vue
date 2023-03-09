import { describe, it, expect } from 'vitest'

import { parseQuery } from '../parseUtil'

describe('URLParam', () => {
  it('parse double question mark properly', () => {
    const searchStr = `?a=b&c=d&e=f?g=h&i=j`
    const params = parseQuery(searchStr)
    expect(params.get('e')).toEqual('f?g=h')
  })

  it('parse array key properly', () => {
    const searchStr = `?a=1&b=2&c=3&a=2`
    const params = parseQuery(searchStr)
    expect(params.get('a')).toEqual('1')
    expect(params.getAll('a')).toEqual(['1', '2'])
  })
})
