import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useNotices() {
  return useQuery({
    queryKey: [api.notices.list.path],
    queryFn: async () => {
      const res = await fetch(api.notices.list.path);
      if (!res.ok) throw new Error("Failed to fetch notices");
      return await res.json();
    },
  });
}

export function useAchievements() {
  return useQuery({
    queryKey: [api.achievements.list.path],
    queryFn: async () => {
      const res = await fetch(api.achievements.list.path);
      if (!res.ok) throw new Error("Failed to fetch achievements");
      return await res.json();
    },
  });
}

export function usePlacements() {
  return useQuery({
    queryKey: [api.placements.list.path],
    queryFn: async () => {
      const res = await fetch(api.placements.list.path);
      if (!res.ok) throw new Error("Failed to fetch placements");
      return await res.json();
    },
  });
}
