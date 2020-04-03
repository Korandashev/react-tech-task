import reports from './data/reports';

export default function configureFakeBackend() {
    let realFetch = window.fetch;

    window.fetch = function (url, opts) {
        const {method} = opts;
        const body = opts.body && JSON.parse(opts.body);

        return new Promise((resolve, reject) => {
            setTimeout(handleRoute, 500);

            function ok(body) {
                resolve({ok: true, json: () => Promise.resolve(JSON.stringify(body))});
            }

            function error(message) {
                resolve({status: 400, text: () => Promise.resolve(JSON.stringify({message}))});
            }

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/reports/list') && method === 'GET':
                        return getReportsList();
                    default:
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            function getReportsList() {
                return ok(reports);
            }
        });
    }
}