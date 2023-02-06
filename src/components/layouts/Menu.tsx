import * as React from "react";
import Link from "../commons/Link";

function Menu(props: any) {
  console.log(props.c_digitalBusiness)
  return (
    <>
      <ul className="primary-nav">
        {props.c_digitalBusiness && props.c_header_links.map((item: any, i: Number) => {
          return (
            <>
              <li>
              <Link props={item} />
              </li>
            </>
          )
        })}

      </ul>
    </>
  )
}

export default Menu