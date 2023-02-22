import * as React from "react";
import "../../index.css";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";

// const Footer = ( props: any) => { 
// 	let NewVAr : any = props.label;
// 	console.log(props.label,"Props");
// 	const linkDoms = NewVAr.map((link:any) => (
// 	  <div className="grid place-items-center"> 
// 	  <a className="navbar-item" href={link.link} >   
// 		 <span> {link.label}</span>
// 		  <img src={link.icon?.url} className="h-10 w-10"/><br/>          
// 		</a>
// 		</div>      
  
// 	));
// 	const Services = props?._site?.c_digitalBusiness?.links?.map((link: any) => (
// 		<a className="navbar-item" href={link.link} >
// 		  <span>{link.label}</span><br />
// 		</a>
// 	  ));
const Footer = (props: any) => {
	const {label,images,_site}=props;
	console.log(props)
	React.useEffect(() => {
	  document.body.setAttribute("id", "body");
	})
	// const toggle = () => {
	//   (document.getElementById("body") as HTMLInputElement).classList.toggle('');
	// }
	const Company = props?._site?.c_company?.map((link: any) => (
	  <a className="navbar-item" href={link.link} >
		<span>{link.label}</span><br />
	  </a>
	));

	const Pizzarestaurants = props?._site?.c_pizzarestaurant?.map((link: any) => (
		<a className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const Aboutus = props?._site?.c_about?.map((link: any) => (
		<a className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const Legal = props?._site?.c_legal?.map((link: any) => (
		<a className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const Icons = props?._site?.c_icons?.map((link: any) => (
		<div className=""> 
          <a className="navbar-item" href={link.link} >   
                 {/* <span className="text-xl  "> {link.label}</span> */}
                <img src={link.icon?.url} className="flex space-x-2 h-9 w-9"/><br/>          
         </a>
       </div>      
	  ));

	//   const services = c_servicesIn?.map((link: any) => (
	// 	<a className="navbar-item" href={link.link} >
	// 	  <span>{link.label}</span><br />
	// 	</a>
	//   ));

	return (
		<>
			<footer className="site-footer inline-block w-full">
							 		  					  					  
				    
				<div style={{backgroundColor:"teal"}} >
					
				<div  className="container px-6 pt-6" style={{height:"330px"}}>
					<div className="store-locator">					   
		              <h2>COMPANY</h2> 
                           <div className="text-2xl pt-6 ">
		                       {props._site?.c_company?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer">
                               <li><a >{Company}</a></li>
                               </ul>
                           </div>
			          					  					  					 
				    </div>
					<div className="store-locator">					   
		                 <h2>PIZZA RESTAURANTS</h2>
                           <div className=" text-2xl pt-6">
		                       {props._site?.c_pizzarestaurant?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer  ">
                               <li><a >{Pizzarestaurants}</a></li>
                               </ul>
                           </div>
			          					  					  					 
				    </div>
					<div className="store-locator">					   
		               <h2>ABOUT</h2>
                           <div className="text-2xl  pt-6">
		                       {props._site?.c_about?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer ">
                               <li><a >{Aboutus}</a><br /></li>
                               </ul>
                           </div>
			         					  					  					 
				    </div>
					<div className="store-locator">					   
		                <h2>LEGAL</h2>
                           <div className="text-2xl  pt-6">
		                       {props._site?.c_legal?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer ">
                               <li><a >{Legal}</a></li>
                               </ul>
                           </div>
			          					  					  					 
				    </div>
					<div className="store-locator">	
					<h2>SOCIAL MEDIA</h2>				   
                           <div className="flex grid grid-cols-4 gap-4 pt-6">
		                       {props._site?.c_icons?.headingName}
								 {Icons} 
								<div className="w-56"> <img src={_site?.c_logo?.url} alt="" className="h-16"/>  </div>                                        
                           </div>
			          </div>
					<div>
            {/* <div style={{fontSize:"Oswald" ,backgroundColor:"",height:"70px"}} className="flex gap-x-10">
               <img src={_site.c_footerlogo?.url} style={{height:"70px",width:"100px"}}/>
                  <div style={{padding:"20px"}} className="flex gap-x-10 text-2xl">
                     {_site.c_footerDescription}
                  </div>
            </div> */}
         </div>
					      														
				</div>	
				</div>		                                                                         
			</footer>
			<CookieConsent
				buttonText={"Accept"}
				buttonStyle={{
					marginLeft: "100px",
				}}
			>
				<p>
					{cookieText}
					<a className="text-cookies-link" href={cookiesUrl}>
						{StaticData.cookie}
					</a>
					
				</p>
			</CookieConsent>
		</>
	);
};

export default Footer;
// function handleMediaQueryChange(mediaQuery: MediaQueryList) {
// 	throw new Error("Function not implemented.");
// }

