// App.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, Queue } from './DataStructures';

const App = () => {
    const [input, setInput] = useState('');
    const [stackItems, setStackItems] = useState<string[]>([]);
    const [queueItems, setQueueItems] = useState<string[]>([]);

    const stack = new Stack<string>();
    const queue = new Queue<string>();

    const handlePushToStack = () => {
        stack.push(input);
        setStackItems([input, ...stackItems]);
        setInput('');
    };

    const handlePopFromStack = () => {
        stack.pop();
        setStackItems(stackItems.slice(1));
    };

    const handleEnqueueToQueue = () => {
        queue.enqueue(input);
        setQueueItems([...queueItems, input]);
        setInput('');
    };

    const handleDequeueFromQueue = () => {
        queue.dequeue();
        setQueueItems(queueItems.slice(1));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stack & Queue Block Game</Text>

            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Enter data"
            />

            <View style={styles.buttonContainer}>
                <Button title="Push to Stack" onPress={handlePushToStack} />
                <Button title="Pop from Stack" onPress={handlePopFromStack} />
                <Button title="Enqueue to Queue" onPress={handleEnqueueToQueue} />
                <Button title="Dequeue from Queue" onPress={handleDequeueFromQueue} />
            </View>

            <View style={styles.gameContainer}>
                {/* Stack Section */}
                <View style={styles.stackContainer}>
                    <Text style={styles.sectionTitle}>Stack</Text>
                    <ScrollView contentContainerStyle={styles.blockContainer}>
                        {stackItems.map((item, index) => (
                            <View key={index} style={styles.block}>
                                <Text style={styles.blockText}>{item}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Queue Section */}
                <View style={styles.queueContainer}>
                    <Text style={styles.sectionTitle}>Queue</Text>
                    <ScrollView horizontal contentContainerStyle={styles.blockContainer}>
                        {queueItems.map((item, index) => (
                            <View key={index} style={styles.block}>
                                <Text style={styles.blockText}>{item}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    gameContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    stackContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    queueContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    blockContainer: {
        flexDirection: 'column-reverse',  // Stack blocks from bottom to top
        alignItems: 'center',
    },
    block: {
        width: 60,
        height: 60,
        backgroundColor: '#4caf50',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    blockText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default App;
