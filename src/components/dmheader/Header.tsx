import * as React from "react";
import Cta from "../commons/cta";
// import logo from "../../images/logo copy.png";
import "../../index.css";

const Header = ( props : any) => {
  const {label,images,_site}=props;
  
  let NewVAr : any = props.label;
  // console.log(props.label,"Props");
  const linkDoms = props?._site?.c_headerLink?.map((link:any) => (
    <a className="navbar-item" href={link.link} >
        <span className="text-blue-600">{link.label}</span>
      </a>
  ));

  return (
    <>
         <div style={{backgroundColor:"green"}}>
            <div style={{fontSize:"Oswald",height:"80px"}} className="flex gap-x-16 font-semibold">
               <img style={{height:"80px",width:"130px"}} src={_site.logo?.image?.url} />
                  <div style={{padding:"15px",marginLeft:"10px"}} className="flex gap-x-8 text-2xl ">
                     {linkDoms}
                     <a href="#">
                       <div className=""> {<Cta
                          buttonText="Download"
                          url="#"
                          style="bg-[#FF0000] text-orange  shadow-xl"
                          ></Cta>  }
                       </div> </a>
                  </div>     
           </div>
        </div>         
    </>
  );
};

export default Header;