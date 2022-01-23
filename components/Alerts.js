import { Alert } from "react-native";

export const simpleAlert = () => {
    Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );
}
