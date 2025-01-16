type DB = {
  name: string;
  connectionCount: number;
};

export function getFireStore(): DB {
  return {
    name: "firestore",
    connectionCount: 10,
  };
}

export function fetchDocument(): [string, boolean, Error | null] {
  const value: string = "";
  const isLoading: boolean = true;
  const error: Error | null = null;

  return [value, isLoading, error];
}
