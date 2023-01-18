import { useState } from "react";

function Products({ product }) {

    const [showText, setShowText] = useState(false)

    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }

    return(
        <div className="productsContainer">
            {product.map((item => {
                const { id, name, describe, price, image, showMore} = item;
                return(
                    <div className="product" key={ id }>
                        <div>
                            <img className="productImage" src={ image } alt='productImage'/>
                        </div>
                        <div className="productDescribe">
                            <h3>{ name }</h3>
                            <p>{ showMore ? describe : describe.substring(0, 170) + '...'}
                            <button onClick={ () => showTextClick(item)}>
                                {showMore ? 'Свернуть' : 'Читать'}
                            </button>
                            </p>
                        </div>
                        <div className="buyProduct">
                            <p>{ price } ₽</p>
                            <button>Купить</button>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Products;