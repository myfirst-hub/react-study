import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { observer } from "mobx-react-lite"
import { makeObservable, observable, computed, action, autorun, reaction, when } from "mobx"

class Todo {
  id = Math.random()
  title = ""
  finished = false

  constructor(title: string) {
      makeObservable(this, {
          title: observable,
          finished: observable,
          toggle: action
      })
      this.title = title
  }

  toggle() {
      this.finished = !this.finished
  }
}

class TodoList {
    todos: Todo[] = []
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }
    constructor(todos: Todo[]) {
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed
        })
        this.todos = todos
    }
}

type TodoListViewRef = {
  childFn: () => void;
}

const TodoListView = observer(forwardRef(({ todoList }: { todoList: TodoList }, ref: React.MutableRefObject<TodoListViewRef>) => {
  const childFn = () => {
    console.log('childFn............')
  }

  useImperativeHandle(ref, () => ({
    childFn,
  }))

  return (
    <div>
        <ul>
            {todoList.todos.map(todo => (
                <TodoView todo={todo} key={todo.id} />
            ))}
        </ul>
        Tasks left: {todoList.unfinishedTodoCount}
    </div>
)
}))

const TodoView = observer(({ todo }: {todo: Todo}) => {
  useEffect(() => {
    autorun(() => {
      console.log('autorun.finished................', todo.finished)
    })
  
    reaction(() => todo.finished, finished => {
      console.log('reaction................', finished)
    })
  
    when(() => todo.finished, () => {
      console.log('when................')
    })
  }, [])
  return (
    <li>
        <input type="checkbox" defaultChecked={!!todo.finished} onClick={() => todo.toggle()} />
        {todo.title}
    </li>
)
})

const store = new TodoList([new Todo("Get Coffee"), new Todo("Write simpler code")])

const TodoComp = React.memo(() => {
  const viewRef = useRef<TodoListViewRef>()
  useEffect(() => {
    viewRef.current.childFn();
  }, [])
  return (
    <TodoListView ref={viewRef} todoList={store} />
  )
})

export default TodoComp
