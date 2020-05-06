import React, { Component } from 'react';
import { productFetch } from "../../actions"
import { connect } from "react-redux"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

class ProductDetail extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id)
            console.log("this.props.match.params.id", this.props.match.params.id)
        }
    }



    render() {

        return (

            <div>
                <Header />

                <div className="container">
                    
                        

                        {this.props.products.map(product => {
                            return (
                                <div className="card mb-3 ">
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={product.product_thumbnail} className="card-img" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{product.product_name}</h5>
                                                <p className="card-text">{product.product_detail}</p>
                                                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    

                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({ products }) {
    console.log("products", products)
    return { products }
}

export default connect(mapStateToProps, { productFetch })(ProductDetail)