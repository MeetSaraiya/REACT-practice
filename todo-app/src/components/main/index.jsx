import { useEffect, useState } from "react";
// import "./MainComponent.css";
// import TodoList from "./components/todoList";
import TodoList from "../todoList";
import { CircularProgress } from "@mui/material";

import { Route, Routes, useRoutes } from "react-router-dom";
import { Product } from "../product";
import { Blog } from "../blog";
import ResponsiveAppBar from "../Nabar";
import { Test } from "../TestComponent";

function MainComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewTodo , setViewTodo] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    setLoading(true);
    const fetchedData = await fetch("https://dummyjson.com/todos").then((d) =>
      d.json()
    );
    setData(fetchedData.todos);
    setLoading(false);
  }

  function CustomRoutes() {
    const element = useRoutes([
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/test/:id",
        element: <Test />,
        children: [
          {
            path: "product",
            element: <Product />,
          },
          {
            path: "blog",
            element: <Blog />,
          },
        ],
      },
      {
        path:"*" ,
        element:<div>404 Page Not Found</div>
      }
    ]);
    return element;
  }

  return (
    <div className="flex flex-col gap-2 mt-2 items-center">
      {/* Navbar */}
      <ResponsiveAppBar />

      {/* Routes */}
      {/* <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes> */}
      <CustomRoutes/>

      {/* Page Content */}
      <h1 className="text-[40px] text-gray-400">Todo</h1>
      <p className="text-xl p-2">Welcome to Todo</p>

      {/* Fetch Data Button */}

      <button
        onClick={()=>setViewTodo(!viewTodo)}
        className="text-xl p-3 border bg-gray-300 text-black rounded-lg hover:scale-110 hover:translate-y-1 hover:shadow-lg hover:bg-black hover:text-white"
      >
        {viewTodo ? 'Hide' : 'View'} Todo
      </button>

      <button
        onClick={fetchTodos}
        className="text-xl p-3 border bg-gray-300 text-black rounded-lg hover:scale-110 hover:translate-y-1 hover:shadow-lg hover:bg-black hover:text-white"
      >
        Fetch Data
      </button>

      {/* Todo List */}
      
      {loading && viewTodo ? (
        <CircularProgress />
      ) : viewTodo ? (
        <TodoList
          todos={data}
          loading={loading}
          className="w-full max-w-screen-lg"
        />
      ) : null}
    </div>
  );
}

export default MainComponent;
