import { createBrowserHistory } from "history";

declare global {
    interface Window {
        ga: any;
    }
}

const history = createBrowserHistory();
history.listen((location: any) => {
    if (!window.ga) return;
    window.ga("set", "page", location.pathname + location.search);
    window.ga("send", "pageview");
});
export default history;
