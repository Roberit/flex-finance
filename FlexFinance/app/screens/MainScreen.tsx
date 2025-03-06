import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const MainScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.logo}>Flex Finance</Text>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Resumen Financiero */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Resumen Financiero</Text>
          <Text style={styles.balance}>Saldo Total: $12,350.75</Text>
          <View style={styles.incomeExpenseContainer}>
            <Text style={styles.income}>Ingresos: $5,000.00</Text>
            <Text style={styles.expense}>Gastos: $2,500.00</Text>
          </View>
        </View>

        {/* Gráficos de Gastos */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Distribución de Gastos</Text>
          {/* Aquí iría el componente del gráfico circular */}
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Evolución Mensual</Text>
          {/* Aquí iría el componente del gráfico de barras */}
        </View>

        {/* Metas de Ahorro */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Metas de Ahorro</Text>
          {/* Aquí iría el componente de progreso de metas */}
        </View>

        {/* Recordatorios de Pagos */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Próximos Pagos</Text>
          {/* Aquí iría la lista de próximos pagos */}
        </View>

        {/* Consejos Financieros */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Consejos Financieros</Text>
          {/* Aquí iría la lista de consejos personalizados */}
        </View>

        {/* Acceso Rápido */}
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessText}>Añadir Gasto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessText}>Añadir Ingreso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessText}>Transferencias</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.card}>
          <Text style={styles.sectionTitle}>¿Quieres hablar con la IA?</Text>
          {/* Aquí irá la funcion de preguntar a la ia */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40, // Añadir margen superior
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  incomeExpenseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  income: {
    fontSize: 16,
    color: 'green',
  },
  expense: {
    fontSize: 16,
    color: 'red',
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickAccessButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  quickAccessText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainScreen;
