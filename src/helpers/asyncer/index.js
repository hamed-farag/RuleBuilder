export default function asyncer(promise) {
    return promise.then((response) => [response, undefined]).catch((error) => Promise.resolve([undefined, error]));
}
