import { useState } from "react";
import { Heading } from "native-base";

import { VStack, SectionList, Text } from "native-base";

import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

const DATA = [
  {
    title: "26.08.22",
    data: ["Puxada fontal", "Remada unilateral"],
  },
  {
    title: "27.08.22",
    data: ["Puxada frontal"],
  },
];

export function History() {
  const [exercises, setExercises] = useState(DATA);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. {"\n"} Vamos fazer exercícios
            hoje?
          </Text>
        )}
      />
    </VStack>
  );
}
