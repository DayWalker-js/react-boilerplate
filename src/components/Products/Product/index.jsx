import React, {PureComponent} from 'react';
import classnames from 'classnames';
import './style.scss';
import pluralize from "pluralize-ru";


export default  class Product extends PureComponent{

    constructor(props) {
        super(props)

        this.state = {
            available: true,
            selected: false,
            hover: false
        }
    }

    componentWillUpdate() {
        console.log('will update')
    }
    get getProductAvaible() {
        const {product: {available}} = this.props;
        return available > 0;
    }

    get getClassNames() {
        const {selected, hover} = this.state;
        return classnames("product-item", {
            [`product-item_available`]: this.getProductAvaible,
            [`product-item_not-available`]: !this.getProductAvaible,
            [`product-item_selected`]: selected,
            [`product-item_selected-hover`]: hover
        });
    }
    getPortionsString = (data) => {
        return pluralize(data, 'порций', 'порция', 'порции', 'порций');
    }
    getPresentString = (data) => {
        return pluralize(data, 'мышь', 'мышей', 'мыши', 'мышей');
    }
    clickHandler = () => {
        if(this.getProductAvaible) {
            this.setState(prevState => ({
                selected: !prevState.selected,
                hover: !prevState.selected
            }));
        }
    }

    mouseLeaveHandler = () => {
        this.setState(prevState => ({
            hover: prevState.selected
        }))
    }
    render() {
        const {product} = this.props;
        return (
            <div className={this.getClassNames}
                 onClick={this.clickHandler}
                 onMouseLeave={this.mouseLeaveHandler}
            >
                <div className="product-item-title">
                    <p>{product.title}</p>
                </div>
                <div className="product-item__description">
                    <h4>{product.name}</h4>
                    <h5>{product.nameDescription}</h5>
                    <p><strong>{product.qntPortions}</strong> {this.getPortionsString(product.qntPortions)}</p>
                    <p><strong>{product.qntPresent}</strong> {this.getPresentString(product.qntPresent)} {product.descriptionPresent}</p>
                    <p>{product.sentiment && product.sentiment}</p>
                    <p className="product-item__weight"><span>{product.weight}</span> {product.weightUnit}</p>
                    <div className="product-item__image"><img src={product.imageUrl}/></div>
                </div>
            </div>
        )
    }


}

