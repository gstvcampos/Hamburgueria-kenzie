import { useEffect, useRef } from "react"

function useKeydowm(keyId , callback) {
  const ref = useRef(null)

  useEffect(() => {
    const handleUseKeydowm = (event) => {
      if (event.key === keyId) {
        if(callback) callback(ref.current)
      }
    }

    window.addEventListener("keydown", handleUseKeydowm)

    return () => {
      window.removeEventListener("keydown", handleUseKeydowm)
    }
  }, [])

  return ref
}

export default useKeydowm