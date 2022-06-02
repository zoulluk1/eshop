# eshop

## Client:
  ### Instalace:
    $ cd client
    $ npm init vue@latest
    
      ✔ Project name: … <your-project-name>
      ✔ Add TypeScript? … No
      ✔ Add JSX Support? … No
      ✔ Add Vue Router for Single Page Application development? … Yes
      ✔ Add Pinia for state management? … Yes
      ✔ Add Vitest for Unit testing? … No
      ✔ Add Cypress for both Unit and End-to-End testing? … No
      ✔ Add ESLint for code quality? … No
      ✔ Add Prettier for code formating? … No

Scaffolding project in ./<your-project-name>...
Done
  ### nastavení projektu:
    $ npm install
    $ npm run dev
    $ npm run build

## Server:
  ### Instalace serveru:
    $ npx express-generator --hbs --view=hbs -f --git server
  ### nastavení serveru:
    $ cd server
    $ npm install
    $ npm run start
