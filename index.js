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

gt("1.2.0-beta.3", "1.2.0-rc.1"); // = false

// beta does not satisfy rc
satisfies("1.2.0-beta.3", "^1.2.0-rc.1"); // = false

satisfies("1.2.0-beta.3", "^1.2.0-beta.4"); // = false


satisfies("1.2.0-beta.3", "^1.2.0-beta.3"); // = true

// rc satisifes beta cause its higher
satisfies("1.2.0-rc.3", "^1.2.0-beta.3"); // = true

// enforces ^ stays within pre-release versions
satisfies("1.3.0-beta.3", "^1.2.0-beta.3"); // = false
