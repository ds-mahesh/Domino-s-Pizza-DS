import { Link } from "@yext/pages/components";
import * as React from "react";
import { conversionDetailsDirection, conversionDetailsPhone, Directionsvg } from "../../../sites-global/global";

type Cta = {
  buttonText: string;
  address: object;
  latitude?: number;
  longitude?: number;
};

const GetDirection = (props: GetDirection) => {
  const {
    buttonText,
    latitude,
    address,
    longitude
  } = props;


  const getDirectionUrl = () => {
    var origin: any = null;
    if (address.city) {
      origin = address.city;
    } else if (address.region) {
      origin = address.region;
    } else {
      origin = address.country;
    }
    if (navigator.geolocation) {
      const error = (error: any) => {
        var getDirectionUrl =
          "https://www.google.com/maps/dir/?api=1&destination=" +
          latitude +
          "," +
          longitude +
          "&origin=" +
          origin + "," + 'UK';

        window.open(getDirectionUrl, "_blank");
      };
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log("current lat lang");
          let currentLatitude = position.coords.latitude;
          let currentLongitude = position.coords.longitude;
          let getDirectionUrl =
            "https://www.google.com/maps/dir/?api=1&destination=" +
            latitude +
            "," +
            longitude +
            "&origin=" +
            currentLatitude +
            "," +
            currentLongitude;
          window.open(getDirectionUrl, "_blank");
        },
        error,
        {
          timeout: 10000,
        }
      );
    }
  };
  const conversionDetails_direction = conversionDetailsDirection;
  // const conversionDetails_phone = conversionDetailsPhone;

  return (
    <>
      <Link
        data-ya-track="getdirections"
        eventName={`getdirections`}
        className="btn notHighligh"
        onClick={getDirectionUrl}
        href="javascript:void(0);"
        rel="noopener noreferrer"
        conversionDetails={conversionDetails_direction}
        style={{ backgroundColor: "DodgerBlue", width: "100px" }}
      >
        {buttonText}

      </Link>
      {/* <img src="https://th.bing.com/th/id/R.5543977e539f0979e782db81b1ee4d86?rik=xxyh5oY%2fMyaXrA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9cp%2f6Ka%2f9cp6Kakyi.jpg&ehk=DgyitthMoWfR8Zhd65neDxsgGhIckdRrV2p1nGww5bI%3d&risl=&pid=ImgRaw&r=0" /> */}
      <a
        onClick={getDirectionUrl} className="btn notHighlight" rel="noopener noreferrer" >
        <div dangerouslySetInnerHTML={{ __html: Directionsvg }} />
      </a>
    </>

  );
};

export default GetDirection;
