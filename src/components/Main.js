import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";






export default class Main extends Component{
    render(){
        return(
        
            <section id="slider">
                    <form action=""  className="search-btn">
<input type="search"/>
<i class="fa fa-search"></i>
</form>  
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div id="slider-carousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#slider-carousel" data-slide-to="1"></li>
                                <li data-target="#slider-carousel" data-slide-to="2"></li>
                            </ol>
                            
                            <div class="carousel-inner">
                                <div class="item active">
                                    <div class="col-sm-6">
                                        <h1><span>О</span>-Аукцион</h1>
                                       
                                        <h2>Выгодные предложения на смартфоны</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <button type="button" class="btn btn-default get">Узнать больше</button>
                                    </div>
                                    <div class="col-sm-6">
                                      
                                    </div>
                                </div>
                              
                          
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>                  
                                
             
        )
    }
}
