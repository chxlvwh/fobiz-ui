import '../src/styles/index.scss'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
    Story => {
        return <div style={{margin: '20px'}}><Story /></div>
    }
]
