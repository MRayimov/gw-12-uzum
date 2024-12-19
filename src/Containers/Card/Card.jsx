import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { GrShop } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { useStore } from '../../store/store';

const Card = ({ product }) => {
	const {addToFavorite, removeFromFavorite, favorite } = useStore();
	const { images, title, rating, fullPrice, sellPrice, productId } = product;
	const navigate = useNavigate();
	const [isFavorite, setIsFavorite] = useState(favorite.find(id => id == productId) ? true : false
);
	function hanleClick() {
		navigate(`/product/${productId}`);
	}
	function handleFavorite() {
		if(favorite.find(id => id == productId)){
			removeFromFavorite(productId)
		} else {
			addToFavorite(productId)
		}
		setIsFavorite(!isFavorite);
	}

	return (
		<div className='w-[235px]  overflow-hidden hover:shadow-xl hover:rounded-lg '>
			<div className='relative'>
				<img src={images[0]} alt='' className='rounded-xl transition-transform duration-300 transform hover:scale-105' onClick={hanleClick} />

				{isFavorite ? (
					<FaHeart
						className='absolute top-4 right-4 animate-yurak'
						style={{
							animationIterationCount: '1',
						}}
						size={20}
						color='#7f4dff'
						onClick={handleFavorite}
					/>
				) : (
					<FaRegHeart
						className='absolute top-4 right-4'
						size={20}
						onClick={handleFavorite}
					/>
				)}
			</div>
			<p className='font-bold text-[16px]' onClick={hanleClick}>
				{title}
			</p>
			{rating == 0 ? (
				<p>Product not rated yet...</p>
			) : (
				<Rating
					readonly
					initialValue={rating}
					SVGstyle={{ display: 'inline-block' }}
					allowFraction
					size={25}
					transition
				/>
			)}
			<p className='text-xs pt-5 text-slate-500 line-through'>{fullPrice}</p>
			<div className='flex justify-between p-2'>
				<p className=''>{sellPrice} so'm</p>
				<GrShop className='' size={20} />
			</div>
		</div>
	);
};

export default Card;
