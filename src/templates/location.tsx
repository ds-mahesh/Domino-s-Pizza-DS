import * as React from "react";
import Banner from "../components/locationDetail/banner";
import Cta from "../components/commons/cta";
import Contact from "../components/locationDetail/contact";
import ApiCall from "../Apis/ApiCall";
import Nearby from "../components/locationDetail/Nearby";
import { CustomFieldDebuggerReactProvider } from '@yext/custom-field-debugger';
import { JsonLd } from "react-schemaorg";
import Opening from "../components/commons/openClose";
import { nearByLocation } from "../types/nearByLocation";
// import Logo from "../images/logo-header.svg"
// import offerBanner from "../images/offer-banner.jpg"
import IframeMap from "../components/locationDetail/IframeMap";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";
import { fetch } from "@yext/pages/util";
import Nav from "../components/layouts/Nav";

import Menu from "../components/locationDetail/Menu";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import PhotoGallery from "../components/locationDetail/PhotoGallery";
import About from "../components/locationDetail/About";
import Breadcrumb from "../components/layouts/Breadcrumb";
import CustomMap from "../components/locationDetail/CustomMap";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import StoreHighlight from "../components/locationDetail/SoreHighlight";
import OpenClose from "../components/commons/openClose";
import Faq from "../components/locationDetail/Faqs";
import { StaticData } from "../../sites-global/staticData";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import {apikey_for_entity, baseuRL,stagingBaseurl,AnalyticsEnableDebugging,AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import FeaturesBrand from "../components/locationDetail/FeaturesBrand";
import { Fade, Slide } from "react-awesome-reveal";
import MgmTimber from "../components/locationDetail/MgmTimber";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "hours",
      "slug",
      "timezone",
      "yextDisplayCoordinate",
      "displayCoordinate",
      "cityCoordinate",
      "description",
      "logo",
      "photoGallery",
      "c_bannerVideo",
      "c_bannerImage",
      "c_explore",
      "c_cuponcard",
      "c_googleLogo",
      "c_bannerCta",
      "c_howzetimage"
      
      
      
      
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
     entityTypes:['location']

    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  // var url = "";
  // var name: any = document.name.toLowerCase();
  // var string: any = name.toString();;
  // let result: any = string.replaceAll(" ", "-");
  // document.dm_directoryParents.map((result: any, i: Number) => {
  //   if (i > 0) {
  //     url += result.slug + "/"
  //   }
  // })
  // if (!document.slug) {
  //   url += `${result}.html`;
  // } else {
  //   url += `${document.slug.toString()}.html`;
  // }

  return document.id;
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.c_meta_title?document.c_meta_title:`${document.name} Store of MGM Timber`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${document.c_meta_description?document.c_meta_description:`Find the ${document.name} Timber Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },

     
      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      // {
      //   type: "link",
      //   attributes: {
      //     rel: "canonical",
      //     href: `${document._site.c_canonical?document.c_canonical:stagingBaseurl

      //       }${document.slug?document.slug:`${document.name.toLowerCase()}`}.html`,
      //   },
      // },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${document.c_meta_description?document.c_meta_description:`Find the ${document.name} Timber Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: document.c_meta_title?document.c_meta_title:`${document.name} Store of MGM Timber`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${document.c_meta_description?document.c_meta_description:`Find the ${document.name} Timber Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      /// twitter tag






    ],

  };
};
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {
//   const url = `https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=2500&location=INDIA&api_key=2ed997f92ca318240b8a95375187f129&v=20181201&resolvePlaceholders=true&entityTypes=location&limit=4`
//   const externalApiData = (await fetch(url).then((res: any) =>
//     res.json()
//   )) as nearByLocation;
//   return { ...data, externalApiData };
// };

  var location = `${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.latitude : data.document.displayCoordinate.latitude},${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.longitude : data.document.displayCoordinate.longitude}`;

    const url = `${AnswerExperienceConfig.endpoints.verticalSearch}?experienceKey=${AnswerExperienceConfig.experienceKey}&api_key=${AnswerExperienceConfig.apiKey}&v=20220511&version=${AnswerExperienceConfig.experienceVersion}&locale=${AnswerExperienceConfig.locale}&location=${location}&locationRadius=${AnswerExperienceConfig.locationRadius}&verticalKey=${AnswerExperienceConfig.verticalKey}&limit=4&retrieveFacets=true&skipSpellCheck=false&sessionTrackingEnabled=true&source=STANDARD`;
 console.log(url)
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()

  )) as nearByLocation;
  return { ...data, externalApiData };
};



type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
}) => {
  const {
    _site,
    address,
    slug,
    hours,
    mainPhone,
    photoGallery,
    c_bannerImage,
    c_canonical,
    description,
    additionalHoursText,
    timezone,
    yextDisplayCoordinate,
    displayCoordinate,
    cityCoordinate,
    logo,
    c_bannerVideo,
    c_explore,
    c_cuponcard,
    c_googleLogo,
    c_bannerCta,
    c_howzetimage,

    
    name
  } = document;
  // const services = c_servicesIn?.map((link: any) => (
	// 	<a className="navbar-item" href={link.link} >
	// 	  <span>{link.label}</span><br />
	// 	</a>
	//   ));
  const image=c_bannerImage?.map((i:any)=>(    
    <img src={i.url} className="" alt="..."/>     
));

const Cuponcard= c_cuponcard?.map((i:any)=>(   
  <img src={i.url} className="card-img-top w-4/5 " alt="..."/>  
));

const Explore= c_explore?.map((i:any)=>(   
  <img src={i.url} className="card-img-top w-4/5 " alt="..."/>  
));

const Googlelogo =c_googleLogo?.map((link: any) => (
  <div className=""> 
        <a className="navbar-item" href={link.link} >   
              <img src={link.icon?.url} className="flex space-x-4 h-16 w-48"/><br/>          
       </a>
     </div>      
  ));




  

 let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme = [];
  for (var key in hours) {
    if (hours.hasOwnProperty(key)) {
      let openIntervalsSchema = "";
      if (key !== "holidayHours") {
        if (hours[key].isClosed) {
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: key,
          };
        } else {
          let end = "";
          let start = "";
          if (typeof hours[key].openIntervals != "undefined") {
            let openIntervals = hours[key].openIntervals;
            for (var o in openIntervals) {
              if (openIntervals.hasOwnProperty(o)) {
                end = openIntervals[o].end;
                start = openIntervals[o].start;
              }
            }
          }
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            closes: end,
            dayOfWeek: key,
            opens: start,
          };
        }
      } else {
      }

      hoursSchema.push(openIntervalsSchema);
    }
  }
  document.dm_directoryParents &&
  document.dm_directoryParents.map((i: any, index: any) => {
    if (i.meta.entityType.id == "ce_country") {
      document.dm_directoryParents[index].name =
        document.dm_directoryParents[index].name;
      document.dm_directoryParents[index].slug =
        document.dm_directoryParents[index].slug;

      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
       
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    } else if (i.meta.entityType.id == "ce_region") {
      let url = "";
      document.dm_directoryParents.map((j: any) => {
        if (
          j.meta.entityType.id != "ce_region" &&
          j.meta.entityType.id != "ce_city" &&
          j.meta.entityType.id != "ce_root"
        ) {
          console.log(j, "j");
          url = url  + j.slug;
        }
      });
      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
            url + "/" +
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    } else if (i.meta.entityType.id == "ce_city") {
      let url = "";
      document.dm_directoryParents.map((j: any) => {
        if (
          j.meta.entityType.id != "ce_city" &&
          j.meta.entityType.id != "ce_root"
        ) {
          console.log(j, "j");
          url = url  + "/" + j.slug;
        }
      });
      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
            url +"/" +
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    }
  });

breadcrumbScheme.push({
  "@type": "ListItem",
  position: 4,
  item: {
    "@id": stagingBaseurl + path,
    name: document.name,
  },
});
  let imageurl = photoGallery ? photoGallery.map((element: any) => {
    return element.image.url
  }) : null;
  console.log(document)
  let bannerimage = c_bannerImage && c_bannerImage?.image?.url;
  
  // let offercard = c_offercard && c_offercard.image?.url;


  

  return (

    <>

      <JsonLd<Store>
        item={{
          "@context": "https://schema.org",
          "@type": "DepartmentStore",
          name: name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hoursSchema,
          description: description,
          image: imageurl,
          telephone: mainPhone,
          url: `${c_canonical?c_canonical:stagingBaseurl}${slug?slug:`${name}`}.html`
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />
    


<AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging} 
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
      <PageLayout _site={_site}>
      <Header _site={_site}/> 
      {/* <Banner c_bannerImage={c_bannerImage}  name={name}/> */}
      <div  className="flex" style={{backgroundColor:"DodgerBlue"}}>
            <div className="flex-col space-y-6" style={{marginTop:"100px",marginLeft:"70px",width:"500px"}}>
              <h1 style={{fontSize:"35px",color:"white"}}>Domino's Online Ordering</h1>
              <p style={{fontSize:"20px",color:"darkkhaki"}}>Yummy Pizza Delivered Fast & Fresh</p>
               <div className=""  style={{backgroundColor:"LimeGreen",height:"60px",width:"400px"}}>
                <a className="" href={c_bannerCta.link} style={{}} >
                   <button className="" style={{fontSize:"25px" ,padding:"18px",paddingLeft:"40px",color:"white"}}><b>{c_bannerCta.label} </b></button></a>
               </div>
		           <div className="" style={{height:"220px",width:"400px"}}>
                  <a className="navbar-item" href={c_howzetimage.link} >   
                  <img src={c_howzetimage.icon?.url} className="flex" /><br/>          
                 </a>
               </div>
          </div>
          <div className="" style={{paddingTop:"90px"}}>{image}</div>
    </div>
        <h2 className=" pt-6" style={{fontSize:"30px",paddingLeft:"30px", color:"gray"}}><b>Coupons & Offers</b></h2>
        <div className=" flex space-x-4 pt-6" style={{height:"270px"}}>{Cuponcard}</div>
        
     
      <div className="container">
            <div className='banner-text banner-dark-bg justify-center text-center'>
              <h1 className="">{name} </h1>
                <div className="openClosestatus detail-page closeing-div">
                  <OpenClose timezone={timezone} hours={hours} />
                </div> 
            </div>
          </div>
          <div className="location-information">
        <Contact address={address} 
           phone={mainPhone} latitude={yextDisplayCoordinate ? yextDisplayCoordinate.latitude : displayCoordinate?.latitude}
           yextDisplayCoordinate={yextDisplayCoordinate} longitude={yextDisplayCoordinate ? yextDisplayCoordinate.longitude : displayCoordinate?.longitude} hours={hours}  additionalHoursText={additionalHoursText} ></Contact>
          {
            hours ?
              <div className="map-sec" id="map_canvas">
                <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
              </div> :
              <div className="map-sec without-hours" id="map_canvas">
                <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
              </div>
          }
        </div> 
        <div className="nearby-sec">
          <div className="container">
            <div className="sec-title"><h2 className="">{StaticData.NearStoretext}</h2></div>
            <div className="nearby-sec-inner">
              {yextDisplayCoordinate || cityCoordinate || displayCoordinate ?
                <Nearby externalApiData={externalApiData} /> 
             : ''}
            </div>
          </div>          
        </div>
        {/* <div className="flex" style={{backgroundColor:"DeepSkyBlue"}}>
           <div className="w-full"> {c_about?.map((i:any)=>{
             return (
                   <img src={i.image?.url} className="card-img-top w-full " style={{paddingRight:"10px"}} alt="..."/>
                    )
                    
               })}
           </div>
           <div className="w-4/5">
               <div className=""> {c_about?.map((i:any)=>{
                   return (
                      <div className="text-2xl">{i.description}</div>
                    )                   
               })}
               </div>
               <div className=""> {c_about?.map((link:any)=>{
                    return (
                        <a className="navbar-item" href={link.cTA.link} >
                         <button className="bg-[#1da1f2]">{link.cTA.label}</button></a>
                    )                   
               })}
               </div>
           </div> */}
              {/* <div className="w-1/2 flex flex-col space-y-4 text-xl ">{c_details.description}
                 <div><a href="#">
                   <div className=""> {<Cta
                      buttonText="About-us"
                      url="#"
                      style="bg-[#1da1f2] text-orange  shadow-xl"
                      ></Cta>  }
                   </div> </a>
                 </div> 
              </div>  */}
              {/* <Cta /> */}
           {/* </div>      */}
        {/* <Footer _site={_site}/>   
        <div className="" style={{backgroundColor:"DarkGoldenRod"}}>    
           <div className="text-2xl" style={{textAlign:"center"}}>Services				   		          
                <div className="flex-none">
		                {c_servicesIn?.headingName}  
                    <div className="text-xl flex">                  
                        <a className="flex gap-x-10 font-semibold">{services}</a> 
                        </div>                     
                </div>
			        </div>             				  					  					 
				   </div>  */}
           	 
        {/* <div>
        <Faq faqs={c_faqs} />
     </div> */}
     {/* <div><About about={c_about}/></div> */}
     
     <h1 className="" style={{color:"GrayText",paddingLeft:"20px"}}><b>Explore</b></h1>
     <div  className="flex" style={{backgroundColor:"lightBlue",height:"500px"}}>
         <div className="w-1/2" style={{height:"600px",width:"800px",paddingTop:"55px"}}> {Explore} 
         </div>
            <div className="w-1/2"  >
               <div className="" style={{paddingTop:"100px",paddingLeft:"50px"}}>
                <h1 className="" style={{fontSize:"40px",color:"GrayText"}}><b>Unlock Exclusive Offers</b></h1><br/><br/>
               <p style={{fontSize:"30px",color:"GrayText"}}>For Lightning Fast Ordering Experience </p><br/>
               <p style={{fontSize:"30px",color:"GrayText"}}> download the Domino's App</p>
               </div>
               <div className="flex space-x-8 " style={{paddingTop:"100px",paddingLeft:"50px"}}>{Googlelogo}
              </div>
            </div>
     </div>
     <div className="pt-6">
     <div className="pt-6" style={{paddingLeft:"10px",backgroundColor:"LightGray"}} >
      <h1 style={{color:"DodgerBlue"}}><b>Domino's Pizza: Delivering Happiness </b></h1>
       <p className="pt-6" style={{fontSize:"20px"}}>{description}</p> 
     </div>   
     </div>  
     <Footer _site={_site}/>
  
                    
    
    
     </PageLayout>
      </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Location;