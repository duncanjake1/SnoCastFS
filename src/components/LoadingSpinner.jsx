import React from "react";

import "./styles/loadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div id="spinner-container">
      <svg
        className="spinningSVG"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 36.283 36.283"
      >
        <g>
          <path
            d="M35.531,17.391h-3.09l0.845-1.464c0.207-0.359,0.083-0.817-0.274-1.024c-0.357-0.207-0.816-0.085-1.023,0.274l-1.276,2.214
							h-2.103l2.515-4.354c0.207-0.358,0.084-0.817-0.272-1.024c-0.357-0.207-0.818-0.084-1.024,0.274l-2.948,5.104h-2.023
							c-0.213-1.918-1.233-3.591-2.713-4.684l1.019-1.76l5.896-0.002c0.414,0,0.75-0.336,0.75-0.75c0-0.414-0.336-0.75-0.75-0.75
							l-5.029,0.002l1.051-1.82l2.557,0.002l0,0c0.413,0,0.75-0.336,0.75-0.75c0-0.414-0.334-0.75-0.75-0.75l-1.689-0.002l1.545-2.676
							c0.207-0.358,0.084-0.817-0.273-1.024S26.4,2.343,26.193,2.701l-1.547,2.676l-0.844-1.463c-0.207-0.358-0.668-0.482-1.023-0.274
							c-0.358,0.207-0.481,0.666-0.274,1.024l1.278,2.213l-1.051,1.818l-2.514-4.354c-0.207-0.358-0.666-0.481-1.024-0.274
							c-0.358,0.207-0.481,0.666-0.274,1.024l2.946,5.104l-1.016,1.758c-0.828-0.365-1.743-0.57-2.706-0.57
							c-0.962,0-1.877,0.205-2.707,0.568l-1.013-1.754l2.946-5.105c0.207-0.358,0.084-0.817-0.274-1.024
							c-0.358-0.208-0.818-0.084-1.024,0.274L13.56,8.697l-1.05-1.818l1.278-2.217c0.207-0.358,0.084-0.816-0.274-1.023
							c-0.36-0.208-0.818-0.085-1.024,0.273l-0.845,1.465l-1.551-2.678C9.887,2.342,9.427,2.219,9.07,2.426
							C8.711,2.633,8.589,3.092,8.796,3.449l1.545,2.678H8.652c-0.414,0-0.75,0.336-0.75,0.75c0,0.414,0.336,0.75,0.75,0.75h2.556
							l1.05,1.818H7.231c-0.414,0-0.75,0.336-0.75,0.75c0,0.414,0.336,0.75,0.75,0.75h5.894l1.017,1.762
							c-1.478,1.092-2.499,2.766-2.712,4.684H9.406l-2.95-5.104c-0.208-0.36-0.667-0.481-1.025-0.274s-0.481,0.666-0.274,1.024
							l2.516,4.354H5.569l-1.277-2.213c-0.207-0.359-0.667-0.48-1.024-0.273c-0.359,0.206-0.481,0.666-0.274,1.023l0.845,1.463H0.75
							c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75h3.09l-0.845,1.465c-0.207,0.359-0.083,0.817,0.275,1.022
							c0.118,0.068,0.247,0.103,0.374,0.103c0.259,0,0.511-0.135,0.65-0.375l1.277-2.215h2.103l-2.516,4.354
							c-0.207,0.357-0.084,0.816,0.274,1.023c0.118,0.068,0.247,0.102,0.375,0.102c0.259,0,0.511-0.136,0.65-0.375l2.949-5.104h2.024
							c0.213,1.918,1.234,3.591,2.712,4.685l-1.017,1.762H7.232c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75h5.026l-1.05,1.818
							H8.651c-0.414,0-0.75,0.336-0.75,0.75c0,0.413,0.336,0.75,0.75,0.75h1.69l-1.545,2.676c-0.207,0.357-0.084,0.816,0.274,1.023
							c0.118,0.068,0.247,0.102,0.375,0.102c0.259,0,0.511-0.135,0.65-0.375l1.546-2.676l0.846,1.465c0.139,0.238,0.391,0.375,0.65,0.375
							c0.127,0,0.256-0.033,0.375-0.103c0.359-0.207,0.481-0.666,0.274-1.022l-1.279-2.215l1.05-1.82l2.515,4.354
							c0.139,0.24,0.391,0.375,0.65,0.375c0.127,0,0.256-0.03,0.375-0.102c0.359-0.206,0.481-0.665,0.274-1.023l-2.947-5.104l1.013-1.756
							c0.83,0.364,1.744,0.569,2.707,0.569s1.877-0.205,2.708-0.569l1.014,1.756l-2.947,5.104c-0.207,0.358-0.084,0.817,0.273,1.023
							c0.118,0.067,0.247,0.102,0.375,0.102c0.26,0,0.512-0.135,0.65-0.375l2.515-4.354l1.053,1.82l-1.277,2.213
							c-0.207,0.358-0.084,0.816,0.273,1.023c0.117,0.066,0.246,0.102,0.375,0.102c0.26,0,0.512-0.136,0.65-0.375l0.844-1.463
							l1.545,2.678c0.141,0.24,0.393,0.375,0.65,0.375c0.127,0,0.256-0.032,0.375-0.103c0.358-0.207,0.48-0.666,0.274-1.022l-1.548-2.678
							h1.689c0.414,0,0.75-0.338,0.75-0.75c0-0.414-0.336-0.75-0.75-0.75h-2.557l-1.051-1.82l5.029,0.002c0.414,0,0.75-0.336,0.75-0.75
							s-0.336-0.75-0.75-0.75l-5.896-0.002l-1.019-1.76c1.479-1.094,2.5-2.767,2.711-4.685h2.023l2.947,5.104
							c0.139,0.239,0.391,0.375,0.65,0.375c0.127,0,0.256-0.032,0.375-0.102c0.358-0.207,0.479-0.666,0.272-1.023l-2.515-4.354h2.104
							l1.279,2.215c0.139,0.24,0.391,0.375,0.649,0.375c0.127,0,0.256-0.03,0.375-0.103c0.357-0.205,0.48-0.665,0.273-1.022l-0.848-1.465
							h3.092c0.414,0,0.75-0.335,0.75-0.75S35.945,17.391,35.531,17.391z M23.395,18.141c0,0.257-0.041,0.502-0.076,0.75
							c-0.197,1.36-0.911,2.544-1.943,3.358c-0.393,0.312-0.818,0.574-1.291,0.766c-0.604,0.242-1.259,0.384-1.949,0.384
							c-0.69,0-1.344-0.142-1.948-0.384c-0.471-0.188-0.898-0.454-1.291-0.766c-1.032-0.813-1.746-1.998-1.943-3.358
							c-0.036-0.247-0.076-0.493-0.076-0.75s0.04-0.503,0.076-0.75c0.197-1.361,0.911-2.545,1.944-3.359
							c0.393-0.312,0.82-0.576,1.291-0.765c0.604-0.242,1.258-0.384,1.948-0.384c0.69,0,1.344,0.142,1.948,0.384
							c0.471,0.188,0.898,0.454,1.291,0.765c1.032,0.814,1.746,1.998,1.943,3.359C23.354,17.638,23.395,17.884,23.395,18.141z"
          />
        </g>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
