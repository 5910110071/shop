import React, { Component } from 'react';

import { commentFetch } from '../../actions'
import { connect } from "react-redux"

// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

import StarRatingComponent from 'react-star-rating-component';


class UserComment extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.commentFetch(this.props.product_id)
    }

    renderComment() {
        return (

            this.props.comments && this.props.comments.map(comment => {
                //console.log("{comment.user_name}", this.props.comments)
                return (
                    // <div className="col-12 mt-3">
                    //     <div className="card card-body" >
                    //         <div className="row ">
                    //             <div className="col-2 ">
                    //                 <img src={comment.user_image} class="card ml-2 mb-2 mt-2" Style="width: 100px;" />
                    //                 <p className="ml-2">{comment.user_name} </p>
                    //             </div>
                    //             <div className="col-8 border border-dark mt-2 mb-2">
                    //                 <p>
                    //                     {comment.comment}
                    //                 </p>
                    //             </div>
                    //             <div className="col-2 ">
                    //                 <i class="fas fa-star"></i>
                    //                 <h5>{comment.rating}</h5>
                    //                 <Box component="fieldset" mb={3} borderColor="transparent">
                    //                     <Typography component="legend">Read only</Typography>
                    //                     <Rating name="read-only" value={comment.rating} readOnly />
                    //                 </Box>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="card mb-3" Style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-3">
                                    <img src={comment.user_image} class="card-img mt-3 ml-3" alt="..." Style="width: 120px;" />
                                </div>
                                <div class="col-md-9">
                                    <div class="card-body">
                                        <h5 class="card-title">{comment.user_name}</h5>
                                        <p class="card-text">{comment.comment}</p>
                                        {/* <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Typography component="legend"></Typography>
                                            <Rating name="read-only" value={comment.rating} readOnly />
                                        </Box> */}
                                        <div className="text-right">
                                            < StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={comment.rating}
                                                renderStarIcon={() => <h2>★</h2>}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                )
            })
        )
    }

    render() {
        return (
            <div className="container" >
                <h2 className="text-center">ความคิดเห็น</h2>

                <div className="row">
                    {this.renderComment()}
                </div>

            </div>
        )
    }
}
function mapStateToProps({ comments }) {
    return { comments }
}
export default connect(mapStateToProps, { commentFetch })(UserComment)