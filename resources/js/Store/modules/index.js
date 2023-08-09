import Vue from 'vue';

const requireModule = require.context("./", true, /\.js$/); //extract js files inside modules folder
const modules = {};

requireModule.keys().forEach(fileName => {
    if (fileName === "./index.js" || /lang/.test(fileName) || /routes/.test(fileName) || /.ignore./.test(fileName)) return; //reject the index.js file

    const moduleName = fileName.split('/')[1];

    modules[moduleName] = requireModule(fileName).default;

    const ComponentContext = require.context('./', true, /\.vue$/i, 'lazy');

    ComponentContext.keys().forEach((componentFilePath) => {
        const namespace = componentFilePath.split('/')[1];

        if (namespace === moduleName) {
            const componentPath = componentFilePath.split('/').pop();
            const componentName = componentPath.split('.')[0];

            const kebabize = str => {
                return str.split('').map((letter, idx) => {
                    return letter.toUpperCase() === letter
                    ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
                    : letter;
                }).join('');
            };

            // Vue.component(kebabize(componentName), require(`/${moduleName}/${componentPath}`));
            Vue.component(kebabize(componentName), () => ComponentContext(`./${moduleName}/${componentPath}`));
            // console.log(app.component(kebabize(componentName), `./Store/modules/${moduleName}/${componentPath}`));
        }
    });
});

export default modules;