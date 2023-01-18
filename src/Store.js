import { useState } from "react";
import Buttons from "./Buttons";
import { dataStore } from "./dataStore";
import Products from "./Products";

function Store() {

    const [product, setProduct] = useState(dataStore);
    const filtering = (searchTerm) => {
        const newProduct = dataStore.filter(item => item.searchTerm === searchTerm);
        setProduct(newProduct);
    }
    return(
        <div className="storeContainer">
            <Buttons filtering = { filtering }/>
            <Products product = { product }/>
        </div>
    )
}

export default Store;