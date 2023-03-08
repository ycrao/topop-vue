topop-vue
---------


### usage

```bash
# requirements: node >= 16 <using nvm for multi-version node management>
# skeleton see: https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application
npm init vue@latest
# ...

# install deps
cd topop-vue
npm install -g pnpm
pnpm i

# DX
pnpm dev

# unit test
pnpm test:unit
# e2e test
pnpm test:e2e:dev

# git-hook husky, see https://typicode.github.io/husky/#/?id=manual
pnpm dlx husky-init && pnpm install # pnpm

# commitizen
pnpm install commitizen -D
pnpm install cz-conventional-changelog -D
pnpm install cz-customizable -D
npx git-cz
pnpm dlx git-cz
```