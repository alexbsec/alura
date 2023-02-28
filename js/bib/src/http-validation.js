import chalk from 'chalk';

function extractLinksOnly(list) {
    const onlyLinks = list.map((linkObj) => Object.values(linkObj).join());
    return onlyLinks;
}

async function checkStatusCode(urlArr) {
    const arrStatus = await Promise.all(
        urlArr.map(async (url) => {
            try {
                const response = await fetch(url);
                return response.status;
            } catch (err) {
                return handleHTTPError(err);
            }
        })
    );
    return arrStatus;
}

function handleHTTPError(err) {
    if (err.cause.code === 'ENOTFOUND') {
        return 'Domain does not exist.';
    } else {
        return 'Unexpected error occured when trying to connect to URL.'
    }

}

async function validateList(list) {
    const httpLinks = extractLinksOnly(list);
    const status = await checkStatusCode(httpLinks);
    return list.map((obj, index) => ({
        ...obj,
        status: status[index]
    }));
} 

export default validateList;