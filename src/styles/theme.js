
const cssTheme = {
  'Theme-V1'() {
    let root = document.documentElement;
    root.style.setProperty('--nice-text-color', 'black');
  },
  'Theme-V2'() {
    let root = document.documentElement;
    root.style.setProperty('--nice-text-color', 'red');
  }
}
export default cssTheme