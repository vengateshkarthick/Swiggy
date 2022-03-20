import React from 'react'
import logo from '../../../images/SigninLogo.png'
import '../../../components/style.css'
 export default function Signin() {
    return (
        <div className="container-fluid" id='signin'>
            <div className="card ">
                
                <div className='card-body d-flex  flex-wrap align-items-center w-100'>
                        
                        <div
                         style={{
                            height: '80vh',
                            flexBasis: '100%',
                            //backgroundColor: '#3db34a',
                            //  color: 'white'
                         }}
                        > 
                           
                            <form className='form fields d-flex flex-wrap fs-4'
                               
                            >
                                <fieldset className='w-100'>
                                    <legend>
                                        <h4 className='fw-normal m-1'
                                            style={{
                                                fontSize: '40px',
                                                bottom: '15px',
                                                paddingLeft: '10px'

                                            }}
                                        >
                                            Create your account
                                        </h4>
                                    </legend>
                                </fieldset>
                            <div 
                               className='d-flex  justify-content-between flex-wrap'
                               style={{
                                   width: '60%'
                               }}
                            
                            >
                                    <div 
                                    className='row row-cols-12  m-1'
                                    
                                    >
                                        <div className="col col-auto">
                                            <label 
                                            htmlFor="firstname" 
                                            style={{
                                                fontSize: '1rem'
                                            }}
                                            >
                                                Enter your First Name
                                                <input 
                                                type="text" 
                                                className='form-control p-2 p-1'
                                                style={{
                                                    margin: '1%'
                                                }} 
                                                name="firstname" 
                                                id="firstname" />
                                            </label>
                                        </div>
                                    </div>
                                    <div 
                                    className='row row-cols-12 m-1'
                                
                                    >
                                        <div className="col col-auto">
                                            <label 
                                            className='mb-1' 
                                            htmlFor="lastname"
                                            style={{
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Enter your Last Name
                                                <input 
                                                type="text" 
                                                className='form-control p-2' 
                                                    style={{
                                                        margin: '1%'
                                                    }} 
                                                name="lastname" 
                                                id="lastname" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                   className='d-flex  justify-content-between flex-wrap'
                                   style={{
                                       width: '60%'
                                   }}
                                
                                >

                                
                                    <div 
                                      className='row row-cols-12  m-1'
                                    
                                    >
                                        <div className="col col-auto">
                                            <label 
                                            htmlFor="mailid1" 
                                            style={{
                                                fontSize: '1rem'
                                            }}
                                            >
                                                Enter your Mailid
                                                <input 
                                                type="email" 
                                                className='form-control p-2 '
                                                style={{
                                                    margin: '1%'
                                                }} 
                                                name="mailid1" 
                                                id="mailid1" />
                                            </label>
                                        </div>
                                    </div>
                                    <div 
                                    className='row row-cols-12  m-1'
                                    
                                    >
                                        <div className="col col-auto">
                                            <label 
                                            htmlFor="mailid2" 
                                            style={{
                                                fontSize: '1rem'
                                            }}
                                            >
                                                Renter your Mailid
                                                <input 
                                                type="email" 
                                                className='form-control p-2 '
                                                style={{
                                                    margin: '1%'
                                                }} 
                                                name="mailid2" 
                                                id="mailid2" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                   className='d-flex  justify-content-between flex-wrap'
                                   style={{
                                       width: '60%'
                                   }}
                                
                                >
                                    <div 
                                        className='row row-cols-12  m-1'
                                        
                                        >
                                        <div className="col col-auto">
                                            <label 
                                                htmlFor="password1" 
                                                style={{
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Enter your Password
                                                <input 
                                                type="password" 
                                                className='form-control p-2 '
                                                style={{
                                                    margin: '1%'
                                                }} 
                                                name="password1" 
                                                id="password1" />
                                            </label>
                                        </div>
                                    </div>
                                    <div 
                                        className='row row-cols-12 m-1'
                                        
                                        >
                                        <div className="col col-auto">
                                            <label 
                                                htmlFor="password2" 
                                                style={{
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Renter your Password
                                                <input 
                                                type="email" 
                                                className='form-control p-2 '
                                                style={{
                                                    margin: '1%'
                                                }} 
                                                name="password2" 
                                                id="password2" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                   className='d-flex  justify-content-between flex-wrap'
                                   style={{
                                       width: '60%'
                                   }}
                                
                                >
                                    <div
                                        className='row row-cols-12  m-1'

                                    >
                                        <div className="col col-auto">
                                            <label
                                                htmlFor="phno1"
                                                style={{
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                    Enter your Phone number
                                                    <input
                                                        type="tel"
                                                        className='form-control p-2 '
                                                        style={{
                                                            margin: '1%'
                                                        }}
                                                        name="phno1"
                                                        id="phno1"
                                                    />
                                            </label>
                                            </div>
                                    </div>
                                </div>
                                <div className="row row-cols-12 w-100 m-1">
                                    <div className="col col-auto">
                                        <button className="btn btn-outline-primary fw-bold">
                                            Create
                                        </button>
                                    </div>
                                        
                                </div>
                                    <div className="row row-cols-12 m-1">
                                    <div className="col col-auto">
                                        <span>
                                            Already have account ?
                                            </span>
                                        <button className="m-1 btn btn-outline-dark fw-bold">
                                            Log in
                                            </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            
        </div>
    )
}