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

# git hook
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm
```