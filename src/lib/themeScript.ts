export const THEME_STORAGE_KEY = "ak-theme";

/**
 * Runs in <head> before first paint so the page never flashes the wrong theme.
 * A saved choice wins; otherwise follow the operating system.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})();`;
