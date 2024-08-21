import { useEffect } from "react"
import { useCameraPermissions } from "expo-camera"

const useCamera = () => {
    const [permission, requestPermission] = useCameraPermissions();

    const getPermission = async () => {
        if(!permission?.granted) {
            await requestPermission();
        }
    }

    useEffect(() => {
        getPermission();
    }, [])

    return {
        permission,
    }
}

export {
    useCamera
};
