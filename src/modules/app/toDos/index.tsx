import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

import useModal from 'hooks/modal';

import CreateButton from 'components/CreateButton';

import { Todo } from './models/todo';
import { TodosServices } from './services';

import {
  Box,
  Column,
  ColumnHeader,
  DroppableContainer,
  DragItem,
  DragItemContent,
  DragItemButtons,
  Button,
} from './styles';
import TodosForm from './components/TodosForm';

const ToDos: React.FC = () => {
  const { open, toggle } = useModal();
  const [groupedTodos, setGroupedTodos] = useState<{ [key: string]: Todo[] }>(
    {},
  );
  const [selectedTodo, setSelectedTodo] = useState<Todo>();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination?.droppableId) return;

    if (result.destination.droppableId === result.source.droppableId) {
      alert('Movimento permtido somente entre colunas diferentes');
      return;
    }

    const copy = groupedTodos;

    copy[result.destination.droppableId].splice(result.destination.index, 0, {
      ...copy[result.source.droppableId][result.source.index],
      completed: result.destination.droppableId === 'Finalizados',
    });
    copy[result.source.droppableId].splice(result.source.index, 1);

    setGroupedTodos(copy);
  };

  const handleClickCreate = () => {
    setSelectedTodo(undefined);
    toggle();
  };

  const handleClickEdit = (todo: Todo) => {
    setSelectedTodo(todo);
    toggle();
  };

  const handleClickDelete = async (id: number, origin: string) => {
    if (confirm('A tarefa selecionando será excluído')) {
      await TodosServices.delete(id);

      setGroupedTodos(state => ({
        ...state,
        [origin]: state[origin].filter(item => item.id !== id),
      }));
    }
  };

  const onSave = (todo: Todo) => {
    if (selectedTodo) {
      setGroupedTodos(state => ({
        ...state,
        [todo.completed ? 'Finalizados' : 'Pra fazer']: [
          ...state[todo.completed ? 'Finalizados' : 'Pra fazer'].map(item => {
            if (item.id === todo.id) return todo;

            return item;
          }),
        ],
      }));
    } else {
      setGroupedTodos(state => ({
        ...state,
        [todo.completed ? 'Finalizados' : 'Pra fazer']: [
          { ...todo, id: Math.random() },
          ...state[todo.completed ? 'Finalizados' : 'Pra fazer'],
        ],
      }));
    }
  };

  useEffect(() => {
    TodosServices.list().then(({ data }) => {
      const todos = data.filter(item => item.completed === false);
      const completedTodos = data.filter(item => item.completed === true);

      setGroupedTodos({
        'Pra fazer': todos,
        Finalizados: completedTodos,
      });
    });
  }, []);

  return (
    <>
      <CreateButton onClick={handleClickCreate}>Criar tarefa</CreateButton>
      <Box>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(groupedTodos).map(([key, todos]) => (
            <Column key={key}>
              <ColumnHeader>{key}</ColumnHeader>

              <Droppable droppableId={key}>
                {provided => (
                  <DroppableContainer
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {todos.map((item, index) => (
                      <Draggable
                        draggableId={item.id.toString()}
                        index={index}
                        key={item.id.toString()}
                      >
                        {(supplier, snapshot) => {
                          return (
                            <DragItem
                              ref={supplier.innerRef}
                              snapshot={snapshot}
                              completed={item.completed}
                              {...supplier.draggableProps}
                              {...supplier.dragHandleProps}
                            >
                              <DragItemContent>{item.title}</DragItemContent>

                              <DragItemButtons>
                                <Button onClick={() => handleClickEdit(item)}>
                                  Editar
                                </Button>
                                <Button
                                  onClick={() =>
                                    handleClickDelete(item.id, key)
                                  }
                                >
                                  Deletar
                                </Button>
                              </DragItemButtons>
                            </DragItem>
                          );
                        }}
                      </Draggable>
                    ))}
                  </DroppableContainer>
                )}
              </Droppable>
            </Column>
          ))}
        </DragDropContext>

        <TodosForm
          open={open}
          toggle={toggle}
          selectedTodo={selectedTodo}
          onSave={onSave}
        />
      </Box>
    </>
  );
};

export default ToDos;
