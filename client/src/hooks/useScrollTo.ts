import { useEffect } from 'react';

type Position = 'bottom' | 'center' | 'top';

interface UseScrollToOptions {
	readonly target: HTMLElement | null;
	readonly position?: Position;
}

const useScrollTo = (options: UseScrollToOptions): void => {
	const { target, position = 'top' } = options;
	useEffect(() => {
		if (!target) {
			return;
		}
		let top: number;
		const { height, paddingTop, paddingBottom } = getComputedStyle(target);
		const targetHeight =
			parseFloat(height) + parseFloat(paddingBottom) + parseFloat(paddingTop);
		console.log(target, targetHeight, position);
		switch (position) {
			case 'bottom': {
				top = targetHeight;
				break;
			}
			case 'center': {
				top = targetHeight / 2;
				break;
			}
			case 'top': {
				top = 0;
				break;
			}
		}
		target.scrollTo({
			left: 0,
			behavior: 'smooth',
			top,
		});
	}, [target, position]);
};

export default useScrollTo;
