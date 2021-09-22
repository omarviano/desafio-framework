import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

import { Todo } from './models/todo';
import { TodosServices } from './services';

import {
  Container,
  Column,
  ColumnHeader,
  DroppableContainer,
  DragItem,
} from './styles';

const ToDos: React.FC = () => {
  const [groupedTodos, setGroupedTodos] = useState<{ [key: string]: Todo[] }>(
    {},
  );

  const onDragEnd = (result: DropResult) => {
    if (!result.destination?.droppableId) return;

    const copy = groupedTodos;

    copy[result.destination.droppableId][result.destination.index] =
      copy[result.source.droppableId][result.source.index];

    copy[result.source.droppableId].splice(result.source.index, 1);

    setGroupedTodos(copy);
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
    <Container>
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
                      draggableId={`item-${item.id}`}
                      index={index}
                      key={`item-${item.id}`}
                    >
                      {(provideda, snapshot) => {
                        return (
                          <DragItem
                            ref={provideda.innerRef}
                            snapshot={snapshot}
                            {...provideda.draggableProps}
                            {...provideda.dragHandleProps}
                          >
                            {item.title}
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
    </Container>
  );
};

export default ToDos;
