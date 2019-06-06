import React, {Component} from 'react';



export default class Product extends Component{
    render(){
        return(
            <section className="product">
                
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="left-sidebar">
                            <h2>Характеристики</h2>
                            <div class="panel-group category-products" id="accordian">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordian" href="#Iphone">
                                                <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                               Apple Iphone
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="phones" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <ul>
                                                <li><a href="#">Apple iPhone 5S, 6, 6S и 6S Plus </a></li>
                                                <li><a href="#">Apple iPhone 7 и 7 Plus</a></li>
                                                <li><a href="#">Apple iPhone 8 и 8 Plus</a></li>
                                                <li><a href="#">Apple iPhone X, XR и Xs</a></li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordian" href="#Samsung">
                                                <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                                Смартфоны Samsung
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="mens" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <ul>
                                                <li><a href="#">Samsung Galaxy A-серии</a></li>
                                                <li><a href="#">Samsung Galaxy J-серии</a></li>
                                                <li><a href="#">Samsung Galaxy M-серии</a></li>
                                                <li><a href="#">Samsung Galaxy Note-серии</a></li>
                                                <li><a href="#">Samsung Galaxy S-серии</a></li>
                                             
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordian" href="#MI">
                                                <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                                Смартфоны Xiaomi
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="xiaomi" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <ul>
                                                <li><a href="#">Xiaomi Mi</a></li>
                                                <li><a href="#">Xiaomi Max</a></li>
                                                <li><a href="#">Xiaomi Redmi</a></li>
                                                <li><a href="#">Xiaomi Redmi Note</a></li>
                                            
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"><a href="#">Nokia</a></h4>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"><a href="#">Смартфоны Honor</a></h4>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"><a href="#">Sony</a></h4>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"><a href="#">Motorolla</a></h4>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"><a href="#">LG</a></h4>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"><a href="#">O</a></h4>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"><a href="#">Другие</a></h4>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="brands_products">
                                <h2>Бренды</h2>
                                <div class="brands-name">
                                    <ul class="nav nav-pills nav-stacked">
                                        <li><a href="#"> <span class="pull-right"></span>Apple Iphone</a></li>
                                        <li><a href="#"> <span class="pull-right"></span>Samsung</a></li>
                                        <li><a href="#"> <span class="pull-right"></span>Xiaomi</a></li>
                                        <li><a href="#"> <span class="pull-right"></span>Honor</a></li>
                                        <li><a href="#"> <span class="pull-right"></span>Nokia</a></li>
                                   
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="price-range">
                                <h2>Цена</h2>
                                <div class="well text-center">
                                     <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2"/ ><br />
                                     <b class="pull-left">$ 0</b> <b class="pull-right">$ 600</b>
                                </div>
                            </div>
                            
                            <div class="memory-range">
                                <h2>Память</h2>
                                <div class="well text-center">
                                     <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2"/ ><br />
                                     <b class="pull-left">32GB</b> <b class="pull-right">64GB</b>
                                </div>
                            </div>

                            <div class="brands_products">
                                <h2>Версия операционной системы</h2>
                                <div class="brands-name">
                                    <ul class="nav nav-pills nav-stacked">
                                    <li><a href="#"> <span class="pull-right"></span>Android 9.0</a></li>
                                        <li><a href="#"> <span class="pull-right"></span>Android 8.1</a></li>
                                        <li><a href="#"> <span class="pull-right"></span>Android 4.2</a></li>
                                        <li><a href="#"> <span class="pull-right"></span>Android 6.0</a></li>
                                        <li><a href="#"> <span class="pull-right"></span>Android 7.1</a></li>
                                        <li><a href="#"> <span class="pull-right"></span>Android 8.0</a></li>
                                   
                                        <li><a href="#"> <span class="pull-right"></span>iOS 11</a></li>
                                        <li><a href="#"> <span class="pull-right"></span>iOS 9</a></li>
                                     
                                        <li><a href="#"> <span class="pull-right"></span>iOS 12</a></li>
                                        </ul>
                                </div>
                            </div>
                           
                        
                            
                        </div>
                    </div>
                    
                    <div class="col-sm-9 padding-right">
                        <div class="features_items">
                            <h2 class="title text-center">СОТОВЫЕ ТЕЛЕФОНЫ</h2>
                           
                            <div class="product-card">
    <div class="product-image">
     <img src="https://s18.postimg.org/akrvucg2h/T_Shirt_Mock_Up_Front.png"/>
  </div>
  <div class="product-details">
    <h1>Product title</h1>
    <p>Great product title for a great product and all of the extra things a product might need to make it fill an entire card.</p>
    <button type="button" class="btn">Auction</button>
  </div>
</div>

<div class="product-card">
  <div class="product-details">
    <h1>Product title</h1>
    <p>Great product title for a great product and all of the extra things a product might need to make it fill an entire card.</p>
    <button type="button" class="btn">Auction</button>
  </div>
  <div class="product-image">
    <img src="https://s18.postimg.org/akrvucg2h/T_Shirt_Mock_Up_Front.png"/>
  </div>
</div>
<div class="product-card">
  <div class="product-details">
    <h1>Product title</h1>
    <p>Great product title for a great product and all of the extra things a product might need to make it fill an entire card.</p>
    <button type="button" class="btn">Auction</button>
  </div>
  <div class="product-image">
    <img src="https://s18.postimg.org/akrvucg2h/T_Shirt_Mock_Up_Front.png"/>
  </div>
</div>
<div class="product-card">
  <div class="product-details">
    <h1>Product title</h1>
    <p>Great product title for a great product and all of the extra things a product might need to make it fill an entire card.</p>
    <button type="button" class="btn">Auction</button>
  </div>
  <div class="product-image">
    <img src="https://s18.postimg.org/akrvucg2h/T_Shirt_Mock_Up_Front.png"/>
  </div>
</div>
<div class="product-card">
  <div class="product-details">
    <h1>Product title</h1>
    <p>Great product title for a great product and all of the extra things a product might need to make it fill an entire card.</p>
    <button type="button" class="btn">Auction</button>
  </div>
  <div class="product-image">
    <img src="https://s18.postimg.org/akrvucg2h/T_Shirt_Mock_Up_Front.png"/>
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
