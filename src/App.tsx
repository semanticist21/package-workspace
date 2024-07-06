/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import { createQueryFactory } from "../submodules/simple-querykey-factory/dist";

const baseKey = createQueryFactory("test");

function App() {
  const client = useQueryClient();

  const query1 = useQuery({
    queryKey: baseKey.all(),
    queryFn: mockAsync1,
  });

  const query2 = useQuery({
    queryKey: baseKey.lists(),
    queryFn: mockAsync1,
  });

  const query3 = useQuery({
    queryKey: baseKey.list("test"),
    queryFn: mockAsync1,
  });

  const query4 = useQuery({
    queryKey: baseKey.details(),
    queryFn: mockAsync1,
  });

  const query5 = useQuery({
    queryKey: baseKey.detail("test"),
    queryFn: mockAsync1,
  });

  const query6 = useQuery({
    queryKey: baseKey.actions(),
    queryFn: mockAsync1,
  });

  const query7 = useQuery({
    queryKey: baseKey.action("test"),
    queryFn: mockAsync1,
  });

  const query8 = useQuery({
    queryKey: baseKey.lists().action("test"),
    queryFn: mockAsync1,
  });

  const query9 = useQuery({
    queryKey: baseKey.lists().detail("test").action("test"),
    queryFn: mockAsync1,
  });

  const query91 = useQuery({
    queryKey: baseKey.list("test").detail("t2e2s2t"),
    queryFn: mockAsync1,
  });

  const query10 = useQuery({
    queryKey: baseKey.lists().action("test").params({
      test1: "test",
      test2: "test",
    }),
    queryFn: mockAsync1,
  });

  const query11 = useQuery({
    queryKey: baseKey.lists().params({
      test1: "test",
      test2: "test",
    }),
    queryFn: mockAsync1,
  });

  const query12 = useQuery({
    queryKey: baseKey.action("test").params(4),
    queryFn: mockAsync1,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: "10px",
        height: "100dvh",
      }}
    >
      <button
        onClick={() => client.invalidateQueries({ queryKey: baseKey.all() })}
      >
        모두 초기화
      </button>
      <button
        onClick={() => client.invalidateQueries({ queryKey: baseKey.lists() })}
      >
        리스트 초기화
      </button>
      <button
        onClick={() =>
          client.invalidateQueries({ queryKey: baseKey.list("test") })
        }
      >
        리스트 'test' 초기화
      </button>

      <button
        onClick={() =>
          client.invalidateQueries({ queryKey: baseKey.details() })
        }
      >
        디테일 초기화
      </button>

      <button
        onClick={() =>
          client.invalidateQueries({ queryKey: baseKey.action("test") })
        }
      >
        액션 'test' 초기화
      </button>

      <button
        onClick={() =>
          client.invalidateQueries({ queryKey: baseKey.actions() })
        }
      >
        액션 초기화
      </button>
    </div>
  );
}

const mockAsync1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 1500);
  });
};

export default App;
