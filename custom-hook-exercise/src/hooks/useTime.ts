import { useState, useEffect } from "react";

function useTime(value: string, update: number) {
    const [time, setTime] = useState<string | number | null>(null);

    useEffect(() => {
        const date = new Date();
        if (value === 'day') {
            setTime(date.toLocaleDateString('en-us', {weekday: 'long'}));
        } else if (value === 'hour') {
            setTime(date.getHours());
        } else if (value === 'minutes') {
            setTime(date.getMinutes())
        } else if (value === 'seconds') {
            setTime(date.getSeconds())
        }
    }, [value, update])

    return time
}

export default useTime;