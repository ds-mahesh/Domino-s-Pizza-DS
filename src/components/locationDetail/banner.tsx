import * as React from "react";
import OpenClose from "../commons/openClose";
import Defaultimage from "../../images/tech.webp"

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  address?: Address;
  hours?: any;
  timezone?: any;
  clickcollect?: object;
  c_bannerImage?: any;
  c_bannerphoto?: any;
  c_bannerVideo?:string;
  c_locatorBannerAdditionalText?:string;
  children?: React.ReactNode;
};

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};


const Banner = (props: Banner) => {
  const { name, address, clickcollect,c_bannerVideo, c_bannerImage,c_bannerphoto,c_locatorBannerAdditionalText, children} = props;
 
  // const image =c_bannerImage?.map((i: any) => (
  //   <img src={i.url} className="" alt="..." />
  // ));
  return (
    <>
      <div className="hero-section">
        {/* <img className="hero-image"
          src={c_bannerphoto?.url} alt="banner"  /> */}
        <div className="hero-content">
          <div className="container">
            <div className={`banner-text  ${props.hours && props.timezone ? 'banner-dark-bg': ''}`}>
              <h1 className="text-white text-3xl font-semibold">{name}</h1>
              <p className="text-lg pt-2 text-white font-semibold">
                {renderPrettyAddress(address)}
              </p>
              {c_locatorBannerAdditionalText?
              <p>{c_locatorBannerAdditionalText}</p>
              :''}
              {props.hours && props.timezone ?
                <div className="openClosestatus">
                  <OpenClose timezone={props.timezone} hours={props.hours} deliveryHours={props.hours}></OpenClose>
                </div> : ''}
            </div>
          </div>
        </div>
        </div>
        {/* <div>{image}</div> */}
      </>
      );
};

      export default Banner;

  


    
