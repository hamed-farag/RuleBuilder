export default function asyncer(promise: Promise<any>) {
    return promise
        .then((response: Response) => [response, undefined])
        .catch((error: Error) => Promise.resolve([undefined, error]));
}
