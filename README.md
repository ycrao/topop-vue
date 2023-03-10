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

# typescript check
pnpm type-check

# unit test
pnpm test:unit
# e2e test
pnpm test:e2e:dev

# git-hook husky, see https://typicode.github.io/husky/#/?id=manual
pnpm dlx husky-init && pnpm install # pnpm

# commitizen & commitlint
pnpm install commitizen cz-conventional-changelog cz-customizable -D
pnpm install @commitlint/cli @commitlint/config-conventional -D
git add something
# using global git-cz by pnpm dlx
pnpm dlx git-cz
# using git-cz in project
pnpm git-cz
./node_modules/.bin/git-cz

# commit message style, see .cz-config.js and https://github.com/conventional-changelog/commitlint/#what-is-commitlint
# type(scope?): subject
git commit -m "chore(deps): add commitlint"

# check message style
echo "chore(deps): add commitlint" | ./node_modules/.bin/commitlint

# stylelint
# using scss see: https://stylelint.io/user-guide/get-started
pnpm install stylelint stylelint-config-standard-scss -D
# using less
pnpm install stylelint stylelint-less stylelint-config-recommended-less -D
# rules see: https://stylelint.io/user-guide/rules
```

### reference

- [vite](https://vitejs.dev/)
- [vue 3](https://vuejs.org/)
- [VSCode](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) extension.
- [Cypress](https://www.cypress.io/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue Test Utils](https://test-utils.vuejs.org/) 
- [Vue Dev Tools](https://github.com/vuejs/devtools)
- more see [Awesome Vue](https://github.com/vuejs/awesome-vue)
