import React, { Component } from 'react';
import '../assest/css/style.css'
import product1 from '../assest/img/product1.jpg'
import product2 from '../assest/img/product2.jpg'
import product3 from '../assest/img/product3.jpeg'
import product4 from '../assest/img/product4.webp'
import product5 from '../assest/img/product5.jpeg'
import product6 from '../assest/img/product6.jpg'
import product7 from '../assest/img/product7.png'
import { BiSearchAlt2 } from 'react-icons/bi'
import { toast, Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

class Index extends Component {
    constructor(props) {
        super()
        this.state = {
            allproduct: [],
            categorydata: [
                {
                    category: "Fashion"
                },
                {
                    category: "Electronics"
                },
                {
                    category: "Mobiles"
                },

            ],
            product: [
                {
                    Productname: "All Black Quartz Analog Watch",
                    Code: "001",
                    Image: product1,
                    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nisl ipsum. Mauris mattis turpis eu quam varius, quis tincidunt nulla ullamcorper.",
                    Category: "Fashion"
                },
                {
                    Productname: "Bluetooth Gaming Headset",
                    Code: "002",
                    Image: product2,
                    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nisl ipsum. Mauris mattis turpis eu quam varius, quis tincidunt nulla ullamcorper.",
                    Category: "Fashion"
                },
                {
                    Productname: "EOS 3000D DSLR Camera",
                    Code: "003",
                    Image: product3,
                    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nisl ipsum. Mauris mattis turpis eu quam varius, quis tincidunt nulla ullamcorper.",
                    Category: "Electronics"
                },
                {
                    Productname: "Gaming Core i5 10th Gen",
                    Code: "004",
                    Image: product4,
                    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nisl ipsum. Mauris mattis turpis eu quam varius, quis tincidunt nulla ullamcorper.",
                    Category: "Electronics"
                },
                {
                    Productname: "Stylish Casual Sports Shoes",
                    Code: "005",
                    Image: product5,
                    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nisl ipsum. Mauris mattis turpis eu quam varius, quis tincidunt nulla ullamcorper.",
                    Category: "Fashion"
                },
                {
                    Productname: "Apple iPhone XR (Red, 64 GB) ",
                    Code: "006",
                    Image: product6,
                    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nisl ipsum. Mauris mattis turpis eu quam varius, quis tincidunt nulla ullamcorper.",
                    Category: "Mobiles"
                },
                {
                    Productname: "Wildcraft Outdoor protection mask",
                    Code: "007",
                    Image: product7,
                    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nisl ipsum. Mauris mattis turpis eu quam varius, quis tincidunt nulla ullamcorper.",
                    Category: "Fashion"
                },
            ],
            productname: null,
            productcode: null,
            category: null,
            productimg: null,
            description: null
        }
    }

    componentDidMount = () => {
        const { product } = this.state
        this.setState({
            allproduct: product
        })
    }

    handlechange = (e) => {
        const { product } = this.state
        console.log(e.target.value === "");
        if (e.target.value === "") {
            this.setState({
                allproduct: product
            })
        } else {
            var data = []
            for (var i = 0; i < product.length; i++) {
                if (product[i].Productname.toLowerCase().includes(e.target.value.toLowerCase())) {
                    data.push(product[i]);
                }
            }
            this.setState({
                allproduct: data
            })
        }
    }

    addproduct = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitbtn = () => {
        const { productname, productcode, category, productimg } = this.state
        if (productname === null) {
            toast.info("Product Name Required...", {
                autoClose: 2000,
                transition: Slide
            })
        }
        else if (productcode === null) {
            toast.info("Product Code Required...", {
                autoClose: 2000,
                transition: Slide
            })
        }
        else if (category === null) {
            toast.info("Product Category Required...", {
                autoClose: 2000,
                transition: Slide
            })
        }
        else if (productimg === null) {
            toast.info("Product Image Required...", {
                autoClose: 2000,
                transition: Slide
            })
        }
        else {
            toast.success("Product Added ...", {
                autoClose: 2000,
                transition: Slide
            })
            setTimeout(() => {
                window.location.reload()
            }, 5000)
        }
    }

    render() {
        const { allproduct, categorydata } = this.state
        return (
            <div className='product-session'>
                <header className="header">
                    <nav className="nav">
                        <div className="logo">LOGO.</div>
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"><BiSearchAlt2 /></span>
                            <input type="text" className="form-control" placeholder="Product Search" name='searchname' onChange={(e) => this.handlechange(e)} />
                        </div>
                        <ul>
                            <li className='addproductbtn btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add</li>
                        </ul>
                    </nav>
                </header>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className='mt-3'>
                                    <label><b>Product Name *</b></label>
                                    <input type="text" className='form-control' placeholder='Enter Product Name' name='productname' onChange={(e) => this.addproduct(e)} />
                                </div>
                                <div className='mt-3'>
                                    <label><b>Product Code *</b></label>
                                    <input type="text" className='form-control' placeholder='Enter Product Code' name='productcode' onChange={(e) => this.addproduct(e)} />
                                </div>
                                <div className='mt-3'>
                                    <label><b>Category *</b></label>
                                    <select className='form-control' name='category' onChange={(e) => this.addproduct(e)}>
                                        <option>Select Category</option>
                                        {categorydata.length !== 0 ? categorydata.map((data, index) => (
                                            <option value={data.category}>{data.category}</option>
                                        )) : null}
                                    </select>
                                </div>
                                <div className='mt-3'>
                                    <label><b>Product Image *</b></label>
                                    <input type="file" className='form-control' name='productimg' onChange={(e) => this.addproduct(e)} />
                                </div>
                                <div className='mt-3'>
                                    <label><b>Product Description</b></label>
                                    <textarea name="description" className='form-control' placeholder='Enter Product Description' onChange={(e) => this.addproduct(e)}></textarea>
                                </div>
                                <div className='mt-3 text-center'>
                                    <button className='submitbtn btn btn-primary' onClick={this.submitbtn}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-2'>
                    <div className='row'>
                        {allproduct.length !== 0 ? allproduct.map((productdetails, index) => (
                            <div className='col-md-3 mt-5' key={index}>
                                <div className="card">
                                    <div className="img-mask">
                                        <img className='productimg' src={productdetails.Image} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <div className='row'>
                                            <div className='col-sm-8'>
                                                <h2 className="title">{productdetails.Productname}</h2>
                                            </div>
                                            <div className='col-sm-4'>
                                                <span className="price">{productdetails.Code}</span>
                                            </div>
                                        </div>
                                        <span className='category'><b>{productdetails.Category}</b></span> <br />
                                        <p className='description'>{productdetails.Description}</p>
                                    </div>
                                </div>
                            </div>
                        )) : null}
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default Index;