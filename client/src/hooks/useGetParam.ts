import { useParams } from 'react-router-dom';

const useGetParam = (paramName: string): string => {
	const { [paramName]: param } = useParams();
	return param || '';
};

export default useGetParam;
