## Issues and solutions

- [GIST file](https://gist.github.com/abdullahceylan/a3738c184abd1e79ccecaad6f53b0ffe)

## Reference Links
- [`eas.json` parameters and schema](https://github.com/expo/eas-cli/blob/1637573d7287dffc2965f8c6090aefc06f1b1759/packages/eas-json/schema/eas.schema.json#L130)

## To create eas.json
If you don't have `eas-cli`, you need to install first:

```
npm install -g eas-cli
```
then 

```
eas build:configure
```

## To run on Android TV
1. `yarn prebuild:android`
2. `yarn android`

## EAS Build for Testing

```
eas build --profile preview --platform android
```

### Environment variables
#### **Development**
Create `.env` file or you can rename `.env.example` file as `.env`.

#### **Production**
Variables from `.env` **will not be loaded** upon production build with `eas build`. 

In order to add environment variables, you need to use `eas secret:create` command. https://docs.expo.dev/build-reference/variables/#adding-secrets-with-eas-cli
