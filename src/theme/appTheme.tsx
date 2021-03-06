import { StyleSheet } from "react-native";

export const colores = {
    primary: '#0096C7'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'teal',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginVertical: 15
    },
    botonGrandeTexto: {
        fontWeight: 'bold', 
        fontSize: 15,
        color: 'white'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    avatar: {
        width: 100,
        height: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 20
    },
    menuButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    menuText: {
        fontSize: 20,
        marginLeft: 5
    }
});