async function callAPI(CURRENCY_CODE) {
    const baseURL = "https://v6.exchangerate-api.com/v6/71d0d9072451bae18657a9ec/latest/${CURRENCY_CODE}"
    const resp = await fetch(baseUrl);
    const body = await resp.body();
}


export defualt callAPI;