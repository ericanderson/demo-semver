import * as semver from 'semver';

/** 
 * @template {keyof typeof semver} A
 * @param a {A} 
 * @returns {typeof semver[A]}
 *
 * */
function mk(a) {
    return (...args) => {
        console.log(`${a}(${args.map(x=>x.toString()).join(", ")}) = ${semver[a](...args)}`);
    }
}

const gt = mk('gt');
const satisfies = mk('satisfies');

gt("1.2.0-beta.3", "1.2.0-rc.1");
satisfies("1.2.0-beta.3", "^1.2.0-rc.1");
satisfies("1.2.0-beta.3", "^1.2.0-beta.4");
satisfies("1.2.0-beta.3", "^1.2.0-beta.3");
satisfies("1.2.0-rc.3", "^1.2.0-beta.3");
