import { FormEvent } from "react";

export default function Form() {

    return (
        <form className="form" onSubmit={evt => sendForm(evt)}>
            <fieldset>
                <label htmlFor="cartValue">Cart Value</label>
                <input type="number" id="cartValue" step=".01"></input>
                <h5>€</h5>
            </fieldset>
            <fieldset>
                <label htmlFor="deliveryDistance">Delivery Distance </label>
                <input type="number" id="deliveryDistance"></input>
                <h5>m</h5>
            </fieldset>
            <fieldset>
                <label htmlFor="amountItems">Amounts of items</label>
                <input type="number" id="amountItems"></input>
            </fieldset>
            <fieldset>
                <label htmlFor="time">Time</label>
                <input id="time" type="date"></input>
            </fieldset>
            <button type="submit">Calculate delivery price</button>
        </form>

    )
}

const sendForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { cartValue, deliveryDistance, amountItems, time } = event.target as typeof event.target & {
        cartValue: { value: number }
        deliveryDistance: { value: string }
        amountItems: { value: string }
        time: { value: string }
    }

    await fetch('http://localhost:8080/deliveryFee', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "value": (cartValue.value * 100),
            "delivery_distance": deliveryDistance.value,
            "number_of_items": amountItems.value,
            "time": time.value
        })
    })
        .then(response => response.json())
        .then(responseJson => {

            updateeliveryFee(responseJson.delivery_fee);
        })
}

function updateeliveryFee(Dfee: any) {
    let fee = document.getElementById('fee') as HTMLInputElement;
    fee.innerHTML = "Delivery price : " + Dfee / 100 + "€";
}

