import { useState } from 'react';

const RandomImage = () => {
	const [seed, setSeed] = useState(Date.now());

	return (
		<img
			src={`https://picsum.photos/seed/${seed}/400/300`}
			alt="Random placeholder"
			className="rounded-3xl shadow flex-shrink-0 w-[200px] h-[150px] md:w-[400px] md:h-[300px] object-cover"
		/>
	);
};

export default RandomImage;
