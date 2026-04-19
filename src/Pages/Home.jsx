import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import ErrorMessage from "../Components/ErrorMessage";
import { useTasks } from "../hooks/useTasks";

function Home() {
  const {
    tasks,
    inputValue,
    setInputValue,
    editId,
    error,
    handleSubmit,
    handleDelete,
    handleEdit,
  } = useTasks();

  return (
    <div className="app-wrapper">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card border-0 shadow-lg app-card">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h1 className="fw-bold app-title">Task Tracker App</h1>
                  <p className="text-muted mb-2">
                    Görev ekleme, listeleme, güncelleme ve silme uygulaması
                  </p>
                  <span className="badge rounded-pill text-bg-dark px-3 py-2">
                    Toplam Görev: {tasks.length}
                  </span>
                </div>

                <TaskForm
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  handleSubmit={handleSubmit}
                  isEditing={editId !== null}
                />

                <ErrorMessage message={error} />

                <div className="mt-4">
                  <TaskList
                    tasks={tasks}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;