#!/usr/bin/env bash

rm -rf ./dist

bun generate-proxy-packages.ts

pnpm build

for f in typechain/*/*.d.ts; do
  dest="dist/${f#/typechain/}"
  [ -f "$dest" ] || cp "$f" "$dest"
done

for file in ./dist/src/common/*.d.ts; do
  filename_full=$(basename -- "$file")
  filename=${filename_full%.d.ts}
  if [ -d "./dist/src/common/$filename" ]; then
    echo "./dist/src/common/${filename%}/index.d.ts"
    mv "$file" "./dist/src/common/${filename%}/index.d.ts"
  fi
done

for file in ./dist/src/exchanges/*.d.ts; do
  filename_full=$(basename -- "$file")
  filename=${filename_full%.d.ts}
  if [ -d "./dist/src/exchanges/$filename" ]; then
    echo "./dist/src/exchanges/${filename%}/index.d.ts"
    cp "$file" "./dist/src/exchanges/${filename%}/index.d.ts"
  fi
done

cp ./package.json ./dist/

git clean -f src router generated typechain
