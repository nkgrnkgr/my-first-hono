import { fetchDocument, type getFireStore } from "./third-party-lib.js";
// Return Type

type Play = () => string;
type Result = ReturnType<Play>;

// third-party library の 関数の戻り値の型を取得すると便利
type DB = ReturnType<typeof getFireStore>;

// tupleで返ってくる値に名前をつける例
type ReturnValue = {
  readonly value: ReturnType<typeof fetchDocument>[0];
  readonly isLoading: ReturnType<typeof fetchDocument>[1];
  readonly error: ReturnType<typeof fetchDocument>[2];
};

function f(): ReturnValue {
  const [value, isLoading, error] = fetchDocument();
  return { value, isLoading, error };
}

const { value, isLoading, error } = f();

// ReturnTypeのGenerics

function getT<T>(value: T): T {
  return value;
}

type T1 = ReturnType<<T>() => T>;
