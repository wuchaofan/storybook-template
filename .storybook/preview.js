import cssTheme from '../src/styles/theme'


// Function to obtain the intended theme
const getTheme = (themeName) => {
  cssTheme[themeName]();
}

const withThemeProvider=(Story,context)=>{
  getTheme(context.globals.theme);
  return Story()

}

export const decorators = [withThemeProvider];

const customViewports = {
  '1440x963': {
    name: '1440x963',
    styles: {
      width: '1440px',
      height: '963px',
    },
  },
  '1280x801': {
    name: '1280x801',
    styles: {
      width: '1280px',
      height: '801px',
    },
  },
};


export const parameters = {
  viewport: { viewports: customViewports },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: '主题',
    description: '主题',
    defaultValue: 'Theme-V1',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['Theme-V1', 'Theme-V2'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};


