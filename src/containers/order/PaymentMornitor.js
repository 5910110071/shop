import React, { Component } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer' 
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"

import { ordersFetch, orderDelete, paymentFetch } from '../../actions'
import axios from "axios"
class PaymentMornitor extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.paymentFetch()
        
        // axios.get("http://localhost:3002/orders").then(res =>{
        //     console.log("res.data",res.data)
        // })

    }
    showOrders() {
        return this.props.payments && Array.isArray(this.props.payments) && this.props.payments.map(order => {
            const date = new Date(order.orderDate)
            return (
                <div key={order.id} className="col-md-12">
                    <hr/>
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>
                    </p>
                    <button onClick = {() => this.props.history.push('/paymentOrderConfirm/'+order.id)}>แจ้งชำระเงิน</button>
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (
                                <div key={record.product.product_id}>
                                    <img src={record.product.product_thumbnail} class="card-img-top img-thumbnail mb-2 mr-2 " Style="width: 100px;" alt="..." />{record.product.product_name} x {record.quantity} = {record.product.product_price * record.quantity}
                                </div>
                            )
                        })}
                    </ul>
                    <p className="title text-right">ยอมรวม {order.totalPrice}</p>
                   
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>รายการที่ยังไม่ชำระเงิน</h1>
                    <div className="row">
                        {this.showOrders()}
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}
function mapStateToprops({ payments }) {
    console.log("payments",payments)
    return { payments }
}
export default withRouter(connect(mapStateToprops, { paymentFetch })(PaymentMornitor))