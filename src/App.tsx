import { useState } from "react"
import { InputAdd } from "./components/inputAdd"
import { TodoItem } from "./components/TodoItem"
import { List } from "./components/List"

export function App() {

  const [list, setList] = useState([

    { id: '1', label: 'Fazer Café', complete: false },
    { id: '2', label: 'Fazer Café', complete: false },
    { id: '3', label: 'Fazer Almoço', complete: false },
    { id: '4', label: 'Fazer Jantar', complete: false },

  ])

const handleAdd = (value: string) => {
  setList
    ([...list,
    { id: (list.length + 1).toString(), label: value, complete: false }])
}
const handleRemove = (id: string) => { setList([...list.filter(item => item.id !== id),]) }

const handleComplete = (id: string) => {
  setList(list.map(item => ({
    ...item, complete: item.id === id ? true : item.complete
  })))
}

return (
  <div>
    <InputAdd onAdd={handleAdd} />

    <List>
      {list.map((listItem) => (
        <TodoItem
          key={listItem.id}

          id={listItem.id}
          label={listItem.label}
          complete={listItem.complete}

          onComplete={() => handleComplete(listItem.id)}

          onRemove={() => handleRemove(listItem.id)}
        />

      ))}
    </List>
  </div>
)
}