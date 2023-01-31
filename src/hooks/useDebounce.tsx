import { useState, useEffect } from 'react';

function useDebounce(value: any, delay = 300) {
	const [debouncesValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const handler = window.setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		// 下次渲染清空handler
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncesValue;
}

export default useDebounce;
