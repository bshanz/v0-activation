"use client";

import { useState, useCallback, useEffect } from "react";

/**
 * Custom hook for syncing state with localStorage.
 * Handles SSR by initializing with default value.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  // Use useState with lazy initialization
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        setStoredValue((prev) => {
          const valueToStore = value instanceof Function ? value(prev) : value;
          if (typeof window !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          }
          return valueToStore;
        });
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key]
  );

  // Sync with storage changes from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch {
          // Ignore parse errors
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
}

/**
 * Hook specifically for tracking completed action items.
 * Returns functions to check, toggle, and clear completion status.
 */
export function useCompletedActions(storageKey: string = "v0-playbook-completed") {
  const [completedIds, setCompletedIds] = useLocalStorage<string[]>(storageKey, []);

  const isCompleted = useCallback(
    (id: string) => completedIds.includes(id),
    [completedIds]
  );

  const toggleCompleted = useCallback(
    (id: string) => {
      setCompletedIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    },
    [setCompletedIds]
  );

  const clearAll = useCallback(() => {
    setCompletedIds([]);
  }, [setCompletedIds]);

  return { completedIds, isCompleted, toggleCompleted, clearAll };
}
