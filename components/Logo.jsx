import React from 'react';

class Logo extends React.Component{

render() {
  return (
    <svg width="280" height="280" {...this.props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M42 60l50.126 160.756h95.748L238 60h-62.5l-35.448 115.63L104.605 60H42zm118.712-20h104.474l-62.598 200.756H77.412L14.814 40h104.578l20.66 67.393L160.712 40z"
        fill="#313F4F"
        fillRule="nonzero"
      />
      <path fill="#F44A06" d="M50 65h20.372l46.78 150H96.78z" />
      <path fill="#FDAE1B" d="M77.162 65h20.372l46.78 150h-20.372z" />
      <path fill="#FBDA15" d="M229.466 65h-20.372l-46.78 150h20.372z" />
      <path fill="#FDAE1B" d="M202.303 65h-20.371l-46.78 150h20.371z" />
    </g>
  </svg>
  );
}
}
// import React from "react";

// const SvgLogo = props => (
//   <svg viewBox="0 0 280 280" width="1em" height="1em" {...props}>
//     <g fill="none" fillRule="evenodd">
//       <path
//         d="M42 60l50.126 160.756h95.748L238 60h-62.5l-35.448 115.63L104.605 60H42zm118.712-20h104.474l-62.598 200.756H77.412L14.814 40h104.578l20.66 67.393L160.712 40z"
//         fill="#313F4F"
//         fillRule="nonzero"
//       />
//       <path fill="#F44A06" d="M50 65h20.372l46.78 150H96.78z" />
//       <path fill="#FDAE1B" d="M77.162 65h20.372l46.78 150h-20.372z" />
//       <path fill="#FBDA15" d="M229.466 65h-20.372l-46.78 150h20.372z" />
//       <path fill="#FDAE1B" d="M202.303 65h-20.371l-46.78 150h20.371z" />
//     </g>
//   </svg>
// );

// export default SvgLogo;


const logo = `
<svg width="280px" height="280px" viewBox="0 0 280 280" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>vulcan-logo-border-2</title>
<desc>Created with Sketch.</desc>
<defs></defs>
<g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="vulcan-logo-border-2" transform="translate(14.000000, 40.000000)">
        <path d="M28,20 L78.1255176,180.75571 L173.874482,180.75571 L224,20 L161.499399,20 L126.052169,135.629899 L90.6049389,20 L28,20 Z M146.711875,7.10542736e-15 L251.185951,7.10542736e-15 L188.587964,200.75571 L63.4120358,200.75571 L0.814048637,1.0658141e-14 L105.392463,0 L126.052169,67.392565 L146.711875,7.10542736e-15 Z" id="Combined-Shape" fill="#313F4F" fill-rule="nonzero"></path>
        <g id="vulcan-logo-copy" transform="translate(36.000000, 25.000000)">
            <polygon id="Rectangle-3" fill="#F44A06" points="0 0 20.3717949 0 67.151893 150 46.7800982 150"></polygon>
            <polygon id="Rectangle-3-Copy" fill="#FDAE1B" points="27.1623932 0 47.534188 0 94.3142862 150 73.9424913 150"></polygon>
            <polygon id="Rectangle-3" fill="#FBDA15" transform="translate(145.889865, 75.000000) scale(-1, 1) translate(-145.889865, -75.000000) " points="112.313919 0 132.685714 0 179.465812 150 159.094017 150"></polygon>
            <polygon id="Rectangle-3-Copy" fill="#FDAE1B" transform="translate(118.727472, 75.000000) scale(-1, 1) translate(-118.727472, -75.000000) " points="85.1515258 0 105.523321 0 152.303419 150 131.931624 150"></polygon>
        </g>
    </g>
</g>
</svg>
`;

// export function Logo (props) {
//   return <div dangerouslySetInnerHTML={logo}/>
// }

export default Logo