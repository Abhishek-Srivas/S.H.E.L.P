import React from 'react';
//import Webdev from '../../../assets/Images/webdev.png';
import './CSS/Cart.css';
import Rating from '../CoursePage/Rating';


const CartCard =(props)=> {


    return(

    <div className="CartContent">

            <div className="CardMain ">


                    <div className="CardImageParent">
                        <img src={props.img} alt="course"/>
                    </div>

                    <div className="CardSideContent">

                            <p class="CourseTitle">{props.title}</p>

                            <div className="CardParent1">
                                <p className="CourseTeacher">By {props.teacher}</p>
                                <p className="CourseRemove">Remove</p>
                            </div>

                                <div className="CardParent2"> 
                                  
                                        <span className="CourseRating">{props.rating}</span>  
                                        <span className="Coursestar"><Rating rating={props.rating}/></span> 
                                   

                                        <p className="CourseSave">Save for Later</p>

                                </div>

                                
                                <div className="CardParent3">
                                    <p className="CoursePrice">₹ 500</p>
                                    <p className="CourseWhishlist">Move to Whishlist</p>
                                </div>

                                <div className="CourseBuy"> <p>Buy Now</p></div>
                                

                    </div>



            </div>




    </div>






    );

}

export default CartCard;
