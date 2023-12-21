# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# How to load it locally?

You may have vite project to load the project. Make sure you have the latest installed version of `node`, `pnpm` and `git bash` .

## Step 1:

Open git bash terminal and create vite project :

`pnpm create vite <your folder name> `

or if you don't want to create a new folder for the project jus type this:

`pnpm create vite . `

## Step 2:

Select "React" using arrow keys and click Enter

## Step 3:

Select "JavaScript + SWC" using arrow keys and click Enter again

## Step 4:

After installing, type:

`cd <your folder name>`

and

`pnpm install`

## Step 5:

Replace the files from the project to your folder and you can use the project locally and edit it as you wish

# If you just want to see the result

I will stay here the [CodeSandbox link](https://codesandbox.io/p/github/baidikov-roman-mi/react-calculator/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqfkt1o400062a667i3smts3%2522%252C%2522sizes%2522%253A%255B43.6804553449233%252C56.3195446550767%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqfkt1o300022a66pgvxemhr%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqfkt1o300042a6696qh66sg%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqfkt1o400052a66rfqg33ts%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqfkt1o300022a66pgvxemhr%2522%253A%257B%2522id%2522%253A%2522clqfkt1o300022a66pgvxemhr%2522%252C%2522activeTabId%2522%253A%2522clqfkxtoe00ub2a66zp1nm8tz%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqfkt1o300012a66sjx9fzma%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.eslintrc.cjs%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Ftasks.json%2522%252C%2522id%2522%253A%2522clqfkxtoe00ub2a66zp1nm8tz%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clqfkt1o400052a66rfqg33ts%2522%253A%257B%2522id%2522%253A%2522clqfkt1o400052a66rfqg33ts%2522%252C%2522activeTabId%2522%253A%2522clqfkxos200rn2a66fq6np8ga%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clqfkxos200rn2a66fq6np8ga%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clqfkt1o300042a6696qh66sg%2522%253A%257B%2522id%2522%253A%2522clqfkt1o300042a6696qh66sg%2522%252C%2522activeTabId%2522%253A%2522clqfkt4jg004s2a66osl7nkn9%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqfkt1o300032a66dlczjxj2%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clqfktf78000pegia8gkc96kr%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clqfkt4jg004s2a66osl7nkn9%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522CSB_RUN_OUTSIDE_CONTAINER%253D1%2520devcontainer%2520templates%2520apply%2520--template-id%2520%255C%2522ghcr.io%252Fdevcontainers%252Ftemplates%252Fjavascript-node%255C%2522%2520--template-args%2520%27%257B%257D%27%2520--features%2520%27%255B%255D%27%2522%252C%2522id%2522%253A%2522clqfkv3f100cx2a66dgsh3qwm%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) where you can see the result.
