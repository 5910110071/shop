import React, { Component } from "react"

import { connect } from "react-redux"

import CommentForm from "./CommentForm"

import { commentPost  } from '../../actions'

class Comment extends Component {

    componentDidMount(){

    }
   
    onSubmit(formValues) {
       
        formValues.user_id = this.props.user._id
        formValues.user_name = this.props.user.user_name
        formValues.user_image = this.props.user.user_image
        formValues.product_id = this.props.products.product_id
        formValues.Rating = 5
        this.props.commentPost(formValues,this.props.product_id)
    }
    render() {
        const { formValues } = this.props;
        return (
            <div>
                <div className="container" style={{ minHeight: '79vh', backgroundColor: '#f5f5f5' }}>
                    {/* <h2 className="text-center pt-3" >ลงทะเบียน</h2> */}
                    <CommentForm onCommentSubmit={() => this.onSubmit(formValues)} />
                </div>
            </div>
        )
    }
}
function mapStateToProps({ form , user , products  }) {
    return { formValues: form.commentForm ? form.commentForm.values : null , user ,products}
}
export default connect(mapStateToProps,{commentPost })(Comment)