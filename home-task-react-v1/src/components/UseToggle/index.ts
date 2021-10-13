import {useState, useCallback} from 'react';

const useToggle = (initialValue: boolean): [boolean, () => void] => {
    const [flag, setFlag] = useState(initialValue)
    const toggleValue = useCallback(() => {
        setFlag(!flag)
    }, [flag])
    return [flag, toggleValue]
}

export default useToggle;
