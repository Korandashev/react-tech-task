import {reports, tags} from './data/reports';

export default function configureFakeBackend() {
    let realFetch = window.fetch;

    window.fetch = function (url, opts) {
        const {method, data} = opts;

        return new Promise((resolve, reject) => {
            setTimeout(handleRoute, 200);

            function ok(body) {
                resolve({ok: true, json: () => Promise.resolve(body)});
            }

            function error(message) {
                resolve({status: 400, text: () => Promise.resolve(JSON.stringify({message}))});
            }

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/reports/list') && method === 'GET':
                        return getReportsList(data);
                    case url.endsWith('/reports/tags') && method === 'GET':
                        return getReportsTagsList(data);
                    default:
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            function getReportsList(data) {
                const {lang, search, tags} = data;
                const result = reports
                    .filter(x => lang && lang.length ? lang.includes(x.lang) : true)
                    .filter(x => tags && tags.length ? x.tags.map(tag => tag.id).every(t => tags.includes(t)) : true)
                    .filter(x => search ? `${x.title} ${x.author}`.toLowerCase().includes(search) : true);
                return ok(result);
            }

            function getReportsTagsList() {
                return ok(tags);
            }
        });
    }
}