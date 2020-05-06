import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { categoriesFetch } from "../actions"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);

    this.props.categoriesFetch()
  }

  componentDidUpdate() { }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // this.state = {date : new Date()};
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              <img style={{ height: 70 }} src="/images/logo/logo.png" alt="" />{" "}
              เฮลตี้ คาเฟ่2 {" "}
            </h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>

            <ul className="list-inline">
              <li className="list-inline-item title"><Link className="text-success" to="/">หน้าหลัก</Link></li>
              <li className="list-inline-item title"><Link className="text-success" to="/order">รายการสั่งชื้อ</Link></li>
              <li className="list-inline-item title"><Link className="text-success" to="/product">สิ้นค้า</Link></li>
              <li className="list-inline-item title"><Link className="text-success" to="/about">เกี่ยวกับเรา</Link></li>
            </ul>
            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
  </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>

        </div>
        <hr />
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  //console.log(categories)
  return { categories }
}


export default connect(mapStateToProps, { categoriesFetch })(Header);
