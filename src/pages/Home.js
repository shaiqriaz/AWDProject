import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import img from '../images/pic00.jpg';
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
import '../style/App.css';
import '../style/main.css';



class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <article id="home" class="wrapper style1">
				<div class="container">
				
						<span class="image fit"><img src={img} alt="" /></span>
											
				</div>
			    </article>

                <article id="work" class="wrapper style2">
					<div class="container">
							<header>
									<h1>Welcome to <strong>Web Parlor</strong>.</h1>
							</header>
							
									<section class="box style1">
											<p>We have Experienced <strong>software engineers</strong>,with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.</p>
											<a href="#work" class="button large scrolly">Learn about what I do</a>
											</section>
								</div>
						
			    </article>


                <article id="portfolio" class="wrapper style3">
				<div class="container">
					<header>
						<h2>Here’s some stuff we made recently.</h2>
						<p>some stuff that recently delivered to companies accorting to thier requirements.</p>
					</header>
					<div class="row">
						<div class="col-4 col-6-medium col-12-small">
							<article class="box style2">
								<a href="http://bilali.sgedu.site/online/" class="image featured"><img src={pic01} alt="" /></a>
								<h3><a href="http://bilali.sgedu.site/online/">Florian Collections</a></h3>
							</article>
						</div>
						<div class="col-4 col-6-medium col-12-small">
							<article class="box style2">
								<a href="https://sundukchi.com/" class="image featured"><img src={pic02} alt="" /></a>
								<h3><a href="https://sundukchi.com/">Sundukchi Store</a></h3>
							</article>
						</div>
						<div class="col-4 col-6-medium col-12-small">
							<article class="box style2">
								<a href="https://alfarado.wpdevcourse.com/" class="image featured"><img src={pic03} alt="" /></a>
								<h3><a href="https://alfarado.wpdevcourse.com/">Alfarado Cafe</a></h3>
							</article>
						</div>
					</div>
					<footer>
					</footer>
				</div>
			</article>


            

            </div>
        );
    }
}

export default Home;
