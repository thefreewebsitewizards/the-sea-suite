import React from 'react';
import { useNavigate } from 'react-router-dom';

const Partners: React.FC = () => {
  const navigate = useNavigate();

  const handlePartnerClick = () => {
    navigate('/partnerships');
  };
  return (
    <section aria-label="Our Partners">
      <h2 className="text-deep-navy text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 font-heading">Our Partners</h2>
      <div className="flex items-center justify-around p-4 gap-4 flex-wrap">
        <button onClick={handlePartnerClick} className="transition-transform hover:scale-105 cursor-pointer">
          <img
            alt="TravelCo Logo"
            className="h-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB2_cvmrKgAPiI9gVM6UXfawPQvvI-JNJ7C6y4K2966_UI4GrRE7h_naYbwFyUdoW8YvH4YST_6er0AMqEVhaIK1iZ4nMo717LjVcSJHC6_k7y1BS5GNwD_qATol84qXHYoggfLEeTHkdzNTxh4_aWbJCfObn0qejCO6If-2OTKfxpvOdkcjJMnh5JwEcjGF6yY4i2Ug6e1vo9y86HDuLIQEcJo1pHfg8IaY7EKXJTG0LXm9htiEn4I6EuYlRS2naBtBhNPfj9h2yc"
          />
        </button>
        <button onClick={handlePartnerClick} className="transition-transform hover:scale-105 cursor-pointer">
          <img
            alt="TechBrand Logo"
            className="h-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLAwpxbwfhjkWx4tjfMTBr7iBc4YJ8F8k2DZRHvMYRy3ZRizYfJS5p3AG-jcpK_6iiKAP8ZSAOX5N_Hhsav0x9EgR2eg_eVZ6DfU0QBZcsQP4dvaD7lb0vXhTp3Mq1eySRxXpD2qKPTN6K1tZPQFlT3DfPEFZXM8gtrrBjHpwaSWtajvEStAQ9k1f8YtiAwZscsr9f09AO156HPEesIWBR5yJTv3UYH2SoQ1I_cclP-hcCNoe-ouoTc8MyEdBgBo1Curwv-0zvFDMP"
          />
        </button>
        <button onClick={handlePartnerClick} className="transition-transform hover:scale-105 cursor-pointer">
          <img
            alt="CruiseLine Logo"
            className="h-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYE1Pk0ARQi_yvjzdewtAGb1M1NW8mQsVvxWyFBtEg2MXGfOD61_Y7gb9mUmJuIf9NnvN0JBLKTKBjrfNP_Nr4EPmPAqjPnUbKBuyRxKwSifF104zq7iLK6uFe3_40da9ncmI57YiuHgSLHAtrBVxHw3Af8zEmFbpJOiBjI301zTyXU07VJ4wZrjQ3KnTy7mz3phl7d5XtoJMck488mUo5_4h1NS3b3PXwxKkQKN3jraTdW3HaX_GQp1LvPiVtOdoMdmAZ_amT73Km"
          />
        </button>
        <button onClick={handlePartnerClick} className="transition-transform hover:scale-105 cursor-pointer">
          <img
            alt="NomadGear Logo"
            className="h-30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB__sYLdUMWfEnVTEHvympYNaSlIq33y16zq9SPxkD8mERsLMr-nTcfwu-mhkNNWPLxm1rE7vRyjPz_V5TuGl3ukwX7uXS3l0ZXI3KGffRei9NRUTwzsRenaf5egJJEzQHW_F3qcv80n49uiiV8icDmQXjZ4nmstb_KDycGQ-LXMcdvxGRX7ZZmusF4r2nLnT-L1ASJY6WqfBn_NR2yNJrTnuCUYtFcusaT4QneWslXtVciHelQL6-soqfp31E2fU_5wdMnqChlDrc-"
          />
        </button>
      </div>
    </section>
  );
};

export default Partners;