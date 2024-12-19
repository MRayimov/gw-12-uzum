import React from 'react';
import Card from '../../Containers/Card/Card';
const Recommendations = ({ data }) => {
	if (!data) return null;

	return (
		<div>
	 <button>
        <h1 className='text-3xl font-[650] ml-[110px] mt-4 mb-5 flex'>Katta savdo
          <SlArrowRight className='w-5 h-4 mt-[15px] ml-2'/>
        </h1>
      </button>
		<div className='flex px-28 box-border gap-6 flex-wrap '>
			{data.productList.map(product => (
				<Card product={product} key={product.key} />
			))}
		</div>
		</div>
	);
};

export default Recommendations;
