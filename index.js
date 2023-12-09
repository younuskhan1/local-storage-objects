const getInputValueById = (id) => {
    const inputField = document.getElementById(id);
    const inputText = inputField.value;
    inputField.value = "";
    return inputText;
}

const getElementsOflocalStorage = () => {

    const product = getInputValueById("product-name");
    const number = getInputValueById("product-number");

    if (product === "" || number === "") {
        return alert("Please fill up the input fields at first.");
    } else if (!isNaN(product) || isNaN(number)) {
        return alert("product name field receives a textual value and product number field receives a numeric value.");
    }
    setElementsOfLocalStorage(product, number);
}

const setElementsOfLocalStorage = (product, number) => {

    const listItems = getItemsFromLocalStorage();
    listItems[product] = number;
    localStorage.setItem("listItems", JSON.stringify(listItems));
    // console.log(listItems);
    displayDataFromLS();
}


const dataContainer = document.getElementById("data-container");

const displayDataFromLS = () => {
    const localStorageData = getItemsFromLocalStorage();
    dataContainer.innerText = "";
    for (let storageData in localStorageData) {
        // console.log(data);
        const serial = dataContainer.childElementCount;
        const dataLi = document.createElement("li");
        dataLi.classList.add("data-list");
        dataLi.innerText = `${serial + 1}. ${storageData} : ${localStorageData[storageData]}`;
        dataContainer.appendChild(dataLi);
    }
}

const getItemsFromLocalStorage = () => {
    return localStorage.getItem("listItems") ? JSON.parse(localStorage.getItem("listItems")) : {};
}
// To show the elements of local storage you have two options :
// The first one : you can add eventListener to the browser like below.

// window.addEventListener("DOMContentLoaded", displayDataFromLS);

// The second one : you can call the function globally by default like below.

displayDataFromLS();