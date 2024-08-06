import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
	return (
		<>
			<StatusBar backgroundColor="#f0f9ff" translucent={false} style="dark" />
			<Tabs
				screenOptions={{
					headerTitle: 'Gemilang Taruna',
					headerStyle: {
						backgroundColor: 'white',
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 5,
						},
						shadowOpacity: 0.34,
						shadowRadius: 6.27,
						elevation: 10,
					},
					tabBarLabelStyle: {
						marginVertical: 10,
					},
					tabBarStyle: {
						height: 70,
					},
					tabBarIconStyle: {
						marginTop: 10,
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'pie-chart' : 'pie-chart-outline'} color={color} />,
						tabBarLabel: 'Pesanan Mudah',
					}}
				/>
				<Tabs.Screen
					name="PesananSulit"
					options={{
						tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'bar-chart' : 'bar-chart-outline'} color={color} />,
						tabBarLabel: 'Pesanan Sulit',
					}}
				/>
			</Tabs>
		</>
	);
}
