import React, {PureComponent} from 'react';
import Productslist from "./Products/Productslist";
import products from "../data/products/products.json";
import './../styles/App.scss';

export default class App extends PureComponent {
    constructor(props) {
        super(props)
    }
    render(){
        return (

            <div className="products-container">
                <div className="center">
                        <div className="title-container">
                           Ты сегодня покормил кота?
                        </div>
                    <Productslist products = {products}/>
                </div>
            </div>
        )
    }
}


