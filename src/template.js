import Mustache from "mustache";

const { lookup } = Mustache.Context.prototype;

Mustache.Context.prototype.lookup = function (name) {
    const [prop, ...pipe] = name.split(/ *\| */);
    const value = lookup.call(this, prop);
    return value
        ? pipe.reduce(
              (value, filter) => filters[filter](value),
              lookup.call(this, prop)
          )
        : value;
};

export const filters = {
    kebabCase(value) {
        return value
            .replace(/([A-Z])/g, (ignore, letter) => "-" + letter.toLowerCase())
            .replace(/[\s\-]+/g, "-")
            .replace(/^-+/, "");
    },
    camelCase(value) {
        return this.kebabCase(value).replace(/-(\w)/g, (ignore, letter) =>
            letter.toUpperCase()
        );
    },
    pascalCase(value) {
        value = this.camelCase(value);
        return value[0].toUpperCase() + value.slice(1);
    },
};

/**
 *
 * @param {string} content : ;
 * @param {Object<string,any>} data
 * @param {{tags:string[]}} config
 * @returns {string}
 */
export default function template(content, data, config) {
    return Mustache.render(content, data, {}, config);
}
