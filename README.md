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

# commitizen & commitlint
pnpm install commitizen cz-conventional-changelog cz-customizable -D
pnpm install @commitlint/cli @commitlint/config-conventional -D
# using git-cz by npx
npx git-cz
# or by pnpm dlx
pnpm dlx git-cz


```