import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";





export default class Navbar extends Component{
    render(){
        return(
          <header>
          <div class="header-middle">
          <div class="container">
            <div class="row">
              <div class="col-md-4 clearfix">
          
                <div class="btn-group pull-right clearfix">
                  <div class="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                      
                      <span class="caret">Про Онлайн Аукцион</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="">Про нас</a></li>
                      <li><a href="">Вопросы/Ответы</a></li>
                    </ul>
                  </div>
                  
  

                  <div class="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                     Оплата
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="">Сом</a></li>
                      <li><a href="">Доллары</a></li>
                    </ul>
                  </div>
                </div>
              </div>
    
            <div class="col-md-8 clearfix">
						<div class="shop-menu clearfix pull-right">
							<ul class="nav navbar-nav">
								<li><a href="\"><i class="fa fa-user"></i>Мой профиль</a></li>
								<li><a href="\"><i class="fa fa-star"></i>Желаемое</a></li>
							
								<li><a href="\"><i class="fa fa-lock"></i>Логин/Регистрация</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
        
       
              </header>  
              
             
        )
    }
}
