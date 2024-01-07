import React,{useState } from 'react';

const RetrieveCard = () => {
	const [smallInput, setSmallInput] = useState('');
	const [bigInput, setBigInput] = useState('');
	const [message, setMessage] = useState('');

	const handleClick = () => { 
		fetch('http://localhost:2000/retrieve', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id: smallInput }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Response:', data);
				setMessage(data.error);
				setBigInput(data.description || '');
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	return (
		<div className="p-8 m-10 rounded-lg mockup-code glass">
			<h2 className="text-lg font-bold mb-4">Retrieve Card</h2>
			<textarea
				className="textarea  mb-5"
				style={{ width: '100%', height: '200px' }}
				value={bigInput}
				readOnly
			></textarea>
			<div className="flex mb-4">
				<input
					type="text"
					placeholder="enter the id of the text u want to retrieve"
					className="input w-full max-w-xs"
					value={smallInput}
					onChange={(e) => setSmallInput(e.target.value)}
				/>
				<button className="btn btn-neutral ml-3" onClick={handleClick}>
          Retrieve
				</button>
			</div>
			{message && <p className="mt-2 text-red-500">{message}</p>}
		</div>
	);
};

export default RetrieveCard;
