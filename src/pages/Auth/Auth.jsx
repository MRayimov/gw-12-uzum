import { useForm } from 'react-hook-form';

const Auth = () => {
	// return (
	// 	<div className='flex justify-center items-center h-80'>
	// 		<form className='flex flex-col bg-slate-300 p-10 shadow-xl rounded-xl	mt-36 gap-2'>
	// 			<label htmlFor='email'>Email kirit:</label>
	// 			<Input
	// 				type='email'
	// 				color='blue'
	// 				className=''
	// 				id='email'
	// 				label='email'
	// 			/>
	// 			<label htmlFor='password'>Parol kirit:</label>
	// 			<Input type='password' color='blue' label='password' id='password' />
	// 			<Button type='submit'>Send</Button>
	// 			<div></div>
	// 		</form>
	// 	</div>
	// );
	const {
		control,
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	console.log(errors);

	function formaSubmitQilinganda(data) {
		console.log(data);
	}
	return (
		<div className='flex justify-center'>
			<form
				className='flex flex-col gap-2 bg-blue-gray-800 p-5 rounded-md'
				onSubmit={handleSubmit(formaSubmitQilinganda)}
			>
				<label htmlFor=''>Email:</label>
				<input type='email' {...register('email', { required: true })} />
				{errors.email?.type == 'required' && (
					<p className='text-xs text-red-500'>Email kiritilishi shart</p>
				)}
				<label htmlFor=''>Password</label>
				<input
					type='text'
					{...register('password', {
						required: true,
						minLength: 8,
						pattern:
							/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
					})}
				/>
				{errors.password?.type == 'required' && (
					<p className='text-xs text-red-500'>Parol kiritilishi shart</p>
				)}
				{errors.password?.type == 'minLength' && (
					<p className='text-xs text-red-500'>
						Parol uzunligi kamida 8 ta harf bolishi kerak
					</p>
				)}
				{errors.password?.type == 'pattern' && (
					<p className='text-xs text-red-500'>
						Parol da kamida 1tadan Katta harf, simvol, raqam bolishi kerak
					</p>
				)}
				<input type='submit' className='bg-green-500 rounded-md' />
			</form>
		</div>
	);
};

export default Auth;
