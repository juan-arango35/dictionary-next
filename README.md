

## DICCIONARIO EN INGLES

APLICA LOS COMANDOS:

```bash
git clone git@github.com:juan-arango35/dictionary-next.git
# luego
cd dictionaryapi
npm install
# luego
git fetch origin dictionaryOK
#luego
git checkout dictionaryOK
#luego 
npm run dev
```

abrir [http://localhost:3000](http://localhost:3000) .

## SI SALE UN ERROR

```bahs
# modificar next.config.ts a next.config.ts 
# agrega esto:

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;



```

