import Button from "./button";
import Card from "./card";

const components = [
    Button,
    Card,
]

const install = function(Vue) {
    if(install.installed) return;
    components.forEach(item => {
        Vue.component(item.name, item);
    })
}

const API = {
    install,

}

export default API;