
function ExchangeRates(props) {
    return (
        {Object.entries(props.exchange).map((key, value) => (
            <p>{key}: {value}</p>
        ))}
    )
}

export default ExchangeRates;