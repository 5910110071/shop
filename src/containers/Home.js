import React, { Component } from 'react';
import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor";
import Footer from "../components/Footer";
import axios from "axios"
import Category from "./Category"

import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { categoriesFetch, productsFetch, productsFetchFromCategory } from "../actions/"


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { products: "" };
    this.getProductFromCategory = this.getProductFromCategory.bind(this)
  }

  componentDidMount() {
    /*this.setState({products : [
      { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
      { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
      { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
      { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
      { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
      { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  ]})*/

    // axios.get("http://localhost:3001/products").then(res=>{
    //   this.setState({
    //     products : res.data
    //   })
    // })
    this.props.categoriesFetch()
    this.props.productsFetch()

  }
  getProductFromCategory(id) {
    this.props.productsFetchFromCategory(id)
    //console.log(id)

  }

  render() {
    console.log("this.props.products", this.props.products)
    return (
      <div>
        <Header />
        <Category categories={this.props.categories } onGetProductFromCategory = {this.getProductFromCategory} />
        <Monitor products={this.props.products} />
        <Footer company="Olanlab" email="olan@olanlab.com" />
      </div>
    );
  }
}

function mapStateToProps({ products, categories }) {
  //console.log("categories",categories)
  return { products, categories }
}

export default connect(mapStateToProps, { productsFetch, categoriesFetch, productsFetchFromCategory })(Home);
