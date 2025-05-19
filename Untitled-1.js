import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const initialPlayers = [
  {
    id: 1,
    Name: "DayS",
    Stats: {
      GenericElimination: 31,
      ArchivedElimination: 15,
      BadgesOwned: 5,
      CharactersOwned: 2,
      ItemsOwned: 0,
    },
    Badges: "Debris of Memories", "Putrid Conclusion", "Subconscious Compromise", "Archived Player", "The Final Page",
    Characters: ["Collapsed Dust {Scattered Ashes}", "Collapsed Dust {Conclusion}"],
    Items: 0
  },
  {
    id: 2,
    Name: "Xeno",
    Stats: {
      GenericElimination: 36,
      ArchivedElimination: 17,
      BadgesOwned: 5,
      CharactersOwned: 2,
      ItemsOwned: 0,
    },
    Badges: "Debris of Memories", "Putrid Conclusion", "Archived Player", "An Answered Contribution", "The Final Page",
    Characters: ["Collapsed Dust {Scattered Ashes}", "Collapsed Dust {Conclusion}"],
    Items: 0
  },
  {
    id: 3,
    Name: "British Remilia",
    Stats: {
      GenericElimination: 36,
      ArchivedElimination: 17,
      BadgesOwned: 6,
      CharactersOwned: 2,
      ItemsOwned: 0,
    },
    Badges: "Debris of Memories", "Putrid Conclusion", "Subconscious Compromise", "Archived Player", "An Answered Contribution", "The Final Page",
    Characters: ["Collapsed Dust {Scattered Ashes}", "Collapsed Dust {Conclusion}"],
    Items: 0
  },
];

export default function IronHorusAgencyDatabase() {
  const [players, setPlayers] = useState(initialPlayers);
  const [newPlayerName, setNewPlayerName] = useState("");

  const addPlayer = () => {
    if (!newPlayerName) return;
    const newPlayer = {
      id: Date.now(),
      name: newPlayerName,
      stats: { matches: 0, goals: 0, assists: 0 },
      badge: "",
      recordings: [],
    };
    setPlayers([...players, newPlayer]);
    setNewPlayerName("");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Iron Horus Agency Database</h1>

      <div className="flex gap-2 items-center justify-center">
        <Input
          placeholder="Add player name"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
        />
        <Button onClick={addPlayer}>Add Player</Button>
      </div>

      <Tabs defaultValue="Stats" className="w-full">
        <TabsList className="flex justify-center">
          <TabsTrigger value="Stats">Stats</TabsTrigger>
          <TabsTrigger value="Badges">Badges</TabsTrigger>
          <TabsTrigger value="Characters">Characters</TabsTrigger>
        </TabsList>

        <TabsContent value="Stats">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((player) => (
              <Card key={player.id}>
                <CardContent className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold">{player.name}</h2>
                  <p>GenericElimination: {player.stats.GenericElimination}</p>
                  <p>ArchivedElimination: {player.stats.ArchivedElimination}</p>
                  <p>BadgesOwned: {player.stats.BadgesOwned}</p>
                  <p>CharactersOwned: {player.stats.CharactersOwned}</p>
                  <p>ItemsOwned: {player.stats.ItemsOwned}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="Badges">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((player) => (
              <Card key={player.id}>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold">{player.name}</h2>
                  <p>Badge: {player.badge || "No badge assigned"}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="Characters">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((player) => (
              <Card key={player.id}>
                <CardContent className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold">{player.name}</h2>
                  <ul className="list-disc list-inside">
                    {player.recordings.length > 0 ? (
                      player.recordings.map((rec, i) => <li key={i}>{rec}</li>)
                    ) : (
                      <li>No Characters</li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 
