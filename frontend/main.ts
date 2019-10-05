import index from "./index";
let module:any;
index.createOnLoad();
if (module.hot) {
    module.hot.accept();
}