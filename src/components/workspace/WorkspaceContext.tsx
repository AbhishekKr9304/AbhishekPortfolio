"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { AppId } from "@/types/workstation";
import type { ProjectCategory } from "@/types/project";

interface OpenAppOptions {
  categoryFilter?: ProjectCategory;
}

interface WorkspaceContextValue {
  activeApp: AppId | null;
  activeCategoryFilter: ProjectCategory | undefined;
  hoveredObjectId: string | null;
  focusedObjectId: string | null;
  setHoveredObjectId: (id: string | null) => void;
  openApp: (appId: AppId, objectId: string, options?: OpenAppOptions) => void;
  closeApp: () => void;
}

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<ProjectCategory | undefined>(
    undefined,
  );
  const [hoveredObjectId, setHoveredObjectId] = useState<string | null>(null);
  const [focusedObjectId, setFocusedObjectId] = useState<string | null>(null);

  const openApp = useCallback(
    (appId: AppId, objectId: string, options?: OpenAppOptions) => {
      setActiveApp(appId);
      setActiveCategoryFilter(options?.categoryFilter);
      setFocusedObjectId(objectId);
    },
    [],
  );

  const closeApp = useCallback(() => {
    setActiveApp(null);
    setActiveCategoryFilter(undefined);
    setFocusedObjectId(null);
  }, []);

  const value = useMemo<WorkspaceContextValue>(
    () => ({
      activeApp,
      activeCategoryFilter,
      hoveredObjectId,
      focusedObjectId,
      setHoveredObjectId,
      openApp,
      closeApp,
    }),
    [activeApp, activeCategoryFilter, hoveredObjectId, focusedObjectId, openApp, closeApp],
  );

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace(): WorkspaceContextValue {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) throw new Error("useWorkspace must be used within a WorkspaceProvider");
  return ctx;
}
