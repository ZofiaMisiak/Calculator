{
    console.log("Hello! Welcome in currency calculator");

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.6709;
        const rateCHF = 4.7437;
        const rateGBP = 5.2892;
        const rateUSD = 4.3970;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "CHF":
                return amount / rateCHF;

            case "GBP":
                return amount / rateGBP;

            case "USD":
                return amount / rateUSD;

        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-amountPLN");
        const currencySelectionElement = document.querySelector(".js-currencySelection");


        const amount = +amountElement.value;
        const currency = currencySelectionElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}