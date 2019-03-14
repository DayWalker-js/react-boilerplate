import React, {PureComponent} from 'react';
import Product from '../Product/index';
import './style.scss';
import pluralize from "pluralize-ru";




export default class Productslist extends PureComponent {
    constructor(props) {
        super(props);
    }
    render () {
        const productElemets = this.props.products.map((product, index)  =>
            <div className="products-container-content__item"
                 key = {product.id}>
                <Product product={product} /></div>
        )

        return (
            <div className="products-container-content">
                {productElemets}
            </div>

        )
    }



}

/*
const jsonObject = {
    data: [
        {
            id: 1,
            title: "сказачное заморское явство",
            qnt: 0
        }
    ]
}
*/


/*class App extends Component {
    get items() {
        return jsonObject.data.map(item => (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <strong>{item.qnt}</strong> {pluralize(item.qnt, 'порций', 'порция', 'порция', 'порций')}
            </div>
        ))
    }
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                {this.items}
            </div>

        );
    }
}*/
/*
export default App;*/


