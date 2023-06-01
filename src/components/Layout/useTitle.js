import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `HappyPlaytime | ${title}`;
    }, [title])
}

export default useTitle