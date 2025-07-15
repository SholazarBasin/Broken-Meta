"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const games = ["CS2", "LoL", "RL", "Valorant"];
const lolLeagues = ["LEC", "LCK", "LPL", "LCS"];

type Tournament = {
  name: string;
  date: string;
  status: string;
};

type Team = {
  name: string;
  rank: number;
};

type Player = {
  name: string;
  team: string;
  titles: number;
};

export default function BrokenMeta() {
  const [selectedGame, setSelectedGame] = useState("CS2");
  const [selectedLeague, setSelectedLeague] = useState("LEC");

  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (selectedGame === "LoL") {
      setTeams([
        { name: `${selectedLeague} Kings`, rank: 1 },
        { name: `${selectedLeague} Stars`, rank: 2 },
        { name: `${selectedLeague} Giants`, rank: 3 },
      ]);
    } else {
      setTournaments([
        { name: `${selectedGame} Masters`, date: "2025-08-10", status: "En cours" },
        { name: `${selectedGame} Championship`, date: "2025-09-15", status: "À venir" },
      ]);

      setTeams([
        { name: `${selectedGame} Titans`, rank: 1 },
        { name: `${selectedGame} Warriors`, rank: 2 },
        { name: `${selectedGame} Legends`, rank: 3 },
      ]);
    }

    setPlayers([
      { name: "PlayerOne", team: `${selectedGame} Titans`, titles: 12 },
      { name: "PlayerTwo", team: `${selectedGame} Warriors`, titles: 9 },
    ]);
  }, [selectedGame, selectedLeague]);

  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">Broken Meta</h1>
      <Tabs value={selectedGame} onValueChange={setSelectedGame} className="mb-6">
        <TabsList className="flex space-x-4">
          {games.map((game) => (
            <TabsTrigger
              key={game}
              value={game}
              className="text-lg px-4 py-2 rounded-md border"
            >
              {game}
            </TabsTrigger>
          ))}
        </TabsList>

        {games.map((game) => (
          <TabsContent key={game} value={game}>
            {game === "LoL" && (
              <div className="my-4">
                <label className="block mb-2 text-sm">Choisissez une ligue :</label>
                <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                  <SelectTrigger className="w-[200px] bg-zinc-800 border border-zinc-700">
                    <SelectValue placeholder="Ligue" />
                  </SelectTrigger>
                  <SelectContent>
                    {lolLeagues.map((league) => (
                      <SelectItem key={league} value={league}>
                        {league}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Tournois</h2>
                  {tournaments.map((t, i) => (
                    <div key={i} className="mb-1">
                      <strong>{t.name}</strong> – {t.date} ({t.status})
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {game === "CS2" ? "Classement HLTV / VRS" : "Top Équipes"}
                  </h2>
                  {teams.map((team, i) => (
                    <div key={i}>
                      #{team.rank} – {team.name}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Joueurs</h2>
                  {players.map((player, i) => (
                    <div key={i}>
                      <strong>{player.name}</strong> – {player.team} ({player.titles} titres)
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
