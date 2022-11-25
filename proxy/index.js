const target = {
    name: "Jane",
};

const handler = {
    get(target, keyName) {
        console.log(`get trap was called ${keyName}`)
        return "whatever";
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.name);
