type A = Awaited<Promise<string>>;

function fetchData() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });
}

type R = Awaited<ReturnType<typeof fetchData>>;
// R is string;
