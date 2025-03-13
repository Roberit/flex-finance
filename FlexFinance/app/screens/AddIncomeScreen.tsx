import React from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, StyleSheet } from "react-native";

export default function AddIncomeScreen(props) {
    return (
        <View style={styles.container}>
            {/* Título */}
            <Text style={styles.title}>Agregar</Text>

            {/* Selector de Gastos/Ingresos */}
            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tab, styles.activeTab]}>
                    <Text style={styles.activeTabText}>Ingreso</Text>
                </TouchableOpacity>
            </View>

            {/* Categorías */}
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.category}>
                        <Image source={item.icon} style={styles.categoryIcon} />
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                contentContainerStyle={styles.categoryContainer}
            />

            {/* Selección de Fecha */}
            <View style={styles.dateContainer}>
                <TouchableOpacity style={styles.dateButton}>
                    <Text style={styles.dateText}>3/12 Hoy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dateButton}>
                    <Text style={styles.dateText}>3/11 Ayer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dateButton}>
                    <Text style={styles.dateText}>3/10 Hace dos días</Text>
                </TouchableOpacity>
            </View>

            {/* Campo de Comentario */}
            <TextInput style={styles.input} placeholder="Comentario" placeholderTextColor="#666" />

            {/* Fotos Adjuntas */}
            <View style={styles.photoContainer}>
                {[...Array(3)].map((_, index) => (
                    <TouchableOpacity key={index} style={styles.photoPlaceholder}>
                        <Text style={styles.plus}>+</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Botón Agregar */}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Agregar</Text>
            </TouchableOpacity>
        </View>
    );
}

// **Datos de Categorías**
const categories = [
    { name: "Sueldo", icon: require("@/assets/images/salary.png") },
    { name: "Inversiones", icon: require("@/assets/images/investment.png") },
    { name: "Regalos", icon: require("@/assets/images/gift.png") }

];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 40,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderBottomWidth: 2,
        borderBottomColor: "transparent",
    },
    activeTab: {
        borderBottomColor: "#3b82f6",
    },
    tabText: {
        color: "#666",
        fontSize: 16,
    },
    activeTabText: {
        color: "#3b82f6",
        fontSize: 16,
        fontWeight: "bold",
    },
    categoryContainer: {
        justifyContent: "space-between",
    },
    category: {
        alignItems: "center",
        margin: 10,
        flex: 1,
    },
    categoryIcon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    categoryText: {
        color: "#333",
        fontSize: 14,
    },
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    dateButton: {
        backgroundColor: "#3b82f6",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    dateText: {
        color: "white",
        fontSize: 14,
    },
    input: {
        backgroundColor: "#e0e0e0",
        color: "#333",
        padding: 10,
        borderRadius: 6,
        fontSize: 16,
        marginBottom: 20,
    },
    photoContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    photoPlaceholder: {
        width: 80,
        height: 80,
        backgroundColor: "#e0e0e0",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    plus: {
        color: "#666",
        fontSize: 24,
    },
    addButton: {
        backgroundColor: "#3b82f6",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    addButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
