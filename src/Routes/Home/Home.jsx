import React, { useState } from 'react';
import TodoList from '../../components/TodoList/TodoList'
import Pagination from '../../components/Pagination/Pagination'

function Home({ tasks }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(5);

  const handlePageChange = (pageNumber, itemsPerPage) => {
    setCurrentPage(pageNumber);
    setTodosPerPage(itemsPerPage);
  };

  // Cálculos para la paginación
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTasks = tasks.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <div>
      <h1>Home</h1>
      <TodoList tasks={currentTasks} />
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={tasks.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;
