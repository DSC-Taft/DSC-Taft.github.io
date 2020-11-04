# DSC Taft Website

## How to Run The Site

1. Make sure you are inside the `dsc-website` folder
2. `npm install` to install all dependencies
3. After the installation is done, run `gatsby develop` on your terminal
4. You can now view the site in `localhost:8000` if no errors occurred.

### Common Fix(es)

if building the gatsby develop environment was unsuccessful, you can do the ff:

1. delete `node_modules` folder and `package-lock.json`
2. Do another npm install but this time, `npm install --unsafe-perm`

## Deploying the Site

1. Make sure you are inside the `dsc-website` folder
2. `npm run deploy`
3. Currently, this results for the site to build at the `gh-pages` branch.
