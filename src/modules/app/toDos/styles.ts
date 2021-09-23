import styled from 'styled-components';
import { DraggableStateSnapshot } from 'react-beautiful-dnd';
import colors from 'styles/colors';

interface DragItemProps {
  snapshot: DraggableStateSnapshot;
  completed: boolean;
}

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
`;

export const Column = styled.div`
  padding: 32px;
  border-radius: 6px;
  background: ${colors.gray};
`;

export const ColumnHeader = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
`;

export const DroppableContainer = styled.div`
  padding: 24px 0;
`;

export const DragItem = styled.div<DragItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-radius: 6px;
  background: ${({ completed }) => (completed ? colors.green : colors.primary)};
  color: ${({ completed }) => (completed ? colors.black : colors.white)};
  font-weight: 600;

  & + div {
    margin-top: 40px;
  }
`;

export const DragItemContent = styled.div`
  flex: 1;
`;

export const DragItemButtons = styled.div`
  width: 144px;
`;

export const Button = styled.button`
  background: ${colors.white};
  color: ${colors.black};

  & + button {
    margin-left: 16px;
  }
`;
