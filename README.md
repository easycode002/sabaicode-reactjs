### Skeleton use Reactjs + TypeScript + TailwindCSS
#### install package `react router dom`
> [!NOTE]
> The react-router-dom package contains bindings for using React Router in web applications
```
npm i react-router-dom
```

#### To be install `Jest` for run test in project
###### Project react without `Typescript` run this command
```
npm install --save-dev jest
```

###### Project react with `Typescript` run this command
```
npm install --save-dev ts-jest @types/jest
```

###### After install dependencies, You will also need a Jest configuration file. You can create a jest.config.js file in your project root with the following content:
```
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
};
```

> After setting up Jest and the configuration, you should be able to run your tests using:
```
npm run test
```

#### To be install `React Fast Marquee` the project
> [!NOTE]
> React Fast Marquee is a lightweight React component that harnesses the power of CSS animations to create silky smooth marquees.
###### Installation
If you're using npm, in the command prompt run:
```
npm install react-fast-marquee --save
```
If you're using yarn, run:
```
yarn add react-fast-marquee
```
###### Usage marquee
To use the component, first import Marquee into your file:
```
import Marquee from "react-fast-marquee";
```
