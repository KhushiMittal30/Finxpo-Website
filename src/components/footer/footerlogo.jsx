import React from "react";

{/* <img alt="Ride Logo" loading="lazy" width="150" height="50" decoding="async" class="block w-250 h-59.63 max-w-full pt-2 pb-2 mr-3 align-middle box-border border-0" srcset="/src/components/images/finallogo.png?w=256&amp;q=75 1x, /src/components/images/finallogo.png?w=640&amp;q=75 2x" src="/src/components/images/finallogo.png?w=640&amp;q=75" style="
    width: 250px;
"></img> */}

function Footerlogo(props){
    return(
        <img alt={props.alt} loading="lazy" width={props.width} height="50" decoding="async" className={props.class} srcSet={`${props.src}?w=256&q=75 1x, ${props.src}?w=640&q=75 2x`} src={`${props.src}?w=640&q=75`}  />
      );
}

export default Footerlogo;